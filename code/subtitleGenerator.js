'use strict';
const gstt_config = require('./config').gstt_config_live;

const fs = require('fs');

const sentence_maker = require('./sentenceMaker')

//google speech to text
const speech = require('@google-cloud/speech');

const chalk = require('chalk');

// creates a speech client
const speechClient = new speech.v1p1beta1.SpeechClient();
let stream_restarted = false;
let stream_restarted_from_timeout = true;
let recognizeStream = null;
let restartCounter = 0;
let timoutDuration = 10;
let resultEndTime = {
    seconds: 0,
    nanos: 0
};
let oldResultEndTime = {
    seconds: 0,
    nanos: 0
}
let isFinalEndTime = 0;
let lastTranscriptWasFinal = false;
let timeout = null;

// for starting speech to text conversion
function startStream(client) {
    console.log("started recognition stream");
    recognizeStream = speechClient
        .streamingRecognize(gstt_config.request)
        .on('error', err => {
            if (err.code === 11) {
                console.log('Error : long time elapsed without audio');
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = null;
                }
                restartStream(client);
            } else {
                console.error('API request error ' + err);
            }
        })
        .on('data', function(stream) {
            // console.log(JSON.stringify(stream, null, 2));
            speechCallback(stream, client)
        });
    //restarting stream every 5 mins for infinite streaming
    timeout = setTimeout(restartStreamForTimeout, gstt_config.streamingLimit, client);
}

// callback for data event
const speechCallback = (stream, client) => {
    let stdoutText = '';
    if (stream.results[0] && stream.results[0].alternatives[0]) {
        stdoutText = stream.results[0].alternatives[0].transcript;
    }

    //if sentence is final
    if (stream.results[0] && stream.results[0].isFinal) {
        stdoutText = stream.results[0].alternatives[0].transcript;
        process.stdout.write(chalk.green(`${stdoutText}\n`));
        process.stdout.write(chalk.red(`stream result: ${JSON.stringify(stream.results[0].alternatives[0].transcript, null, 4)}\n`));
        process.stdout.write(chalk.red(`channelTag: ${stream.results[0].channelTag}`));
        isFinalEndTime = resultEndTime;
        lastTranscriptWasFinal = true;
        //individual words inside the transcript 
        //along with their start and end time
        let words = stream.results[0].alternatives[0].words;
        if (words.length > 0) {
            if (stream_restarted) {
                for (let i = 0; i < words.length; i++) {
                    words[i].startTime.seconds = parseInt(words[i].startTime.seconds) + parseInt(oldResultEndTime.seconds);
                    words[i].startTime.nanos = parseInt(words[i].startTime.nanos) + parseInt(oldResultEndTime.nanos);
                    words[i].endTime.seconds = parseInt(words[i].endTime.seconds) + parseInt(oldResultEndTime.seconds);
                    words[i].endTime.nanos = parseInt(words[i].endTime.nanos) + parseInt(oldResultEndTime.nanos);
                }
            } else {
                for (let i = 0; i < words.length; i++) {
                    words[i].startTime.seconds = parseInt(words[i].startTime.seconds);
                    words[i].startTime.nanos = parseInt(words[i].startTime.nanos);
                    words[i].endTime.seconds = parseInt(words[i].endTime.seconds);
                    words[i].endTime.nanos = parseInt(words[i].endTime.nanos);
                }
            }
            let subtitles = sentence_maker.getTimeDataFromSubtitlesPunctuated(words);
            resultEndTime.seconds = parseInt(words[words.length - 1].endTime.seconds);
            resultEndTime.nanos =
                parseInt(words[words.length - 1].endTime.nanos);
            process.stdout.write(chalk.yellow(`resultEndtime: ${JSON.stringify(resultEndTime, null, 4)}\n`));
            client.emit('data', subtitles);
        }
    }
};

//for restarting the stream in case there is no audio for long time
function restartStream(client) {

    oldResultEndTime.seconds = resultEndTime.seconds;
    oldResultEndTime.nanos = resultEndTime.nanos;
    stream_restarted = true;
    restartCounter++;
    if (recognizeStream) {
        recognizeStream.removeListener('data', speechCallback);
        recognizeStream = null;
    }
    console.log("oldResultEndTime: ", oldResultEndTime, " restartCounter: ", restartCounter);
    startStream(client);
}

//for restarting the stream in case there is no audio for long time
function restartStreamForTimeout(client) {
    stream_restarted_from_timeout = true;
    restartCounter++;
    if (recognizeStream) {
        recognizeStream.removeListener('data', speechCallback);
        recognizeStream = null;
    }
    console.log("Stream restarted from timeout, restartCounter: ", restartCounter);
    startStream(client);
}

//for ending the stream
function stopStream(client) {
    console.log("GSTT stream stopped as client disconnected");
    if (recognizeStream) {
        recognizeStream.removeListener('data', speechCallback);
        console.log(timeout);
        if (timeout) {
            clearTimeout(timeout);
            timeout = null;
        }
        console.log(timeout);
        recognizeStream.end();
        recognizeStream = null;
    }
}

module.exports = {
    startStream: startStream,
    restartStream: restartStream,
    getRecognizeStream: () => recognizeStream,
    stopStream: stopStream
}