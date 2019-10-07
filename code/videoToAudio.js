// to create audio stream out of video channel
const ffmpeg = require('fluent-ffmpeg');

const fs = require('fs');

//to create redable and writable stream
const {
    Transform
} = require('stream');

let livestream_endpoint = require('./config').livestream_endpoint;

let subtitleGenerator = require('./subtitleGenerator');

let isFirstChunk = false;
let global_chunk;

// transform stream for getting audio chunks
let dest = new Transform({
    transform: (chunk, enc, next) => {
        if (chunk && subtitleGenerator.getRecognizeStream()) {
            if (!isFirstChunk) {
                isFirstChunk = true;
                global_chunk = chunk;
            }

            //write audio chunks to recognizeStream
            subtitleGenerator.getRecognizeStream().write(chunk);
        }
        next(null, chunk);
    }
});

dest.on('data', (data) => {
    // console.log('chunk coming...');
});

function startVideoToAudio(client) {
    return new Promise((resolve, reject) => {
        // console.log("Processing...");
        let command = ffmpeg(livestream_endpoint)
            .format('flac')
            .on('start', () => {
                console.log("ffmpeg : processing Started");
                subtitleGenerator.startStream(client); // starting audio recognision
            })
            .on('progress', (progress) => {
                console.log('ffmpeg : Processing: ' + progress.targetSize + ' KB converted');
            })
            .on('end', () => {
                console.log('ffmpeg : Processing finished !');
            })
            .on('error', (err) => {
                console.log('ffmpeg : ffmpeg error :' + err.message);
            })
            .output(dest, { end: true }) //transform stream
            // .run()
        command.run();
        client.on('disconnect', (client) => {
            console.log("Client Disconnected !");
            command.kill('SIGSTOP');
            subtitleGenerator.stopStream();
        });
    });
}

/* function to send dummy audio data to the stream */
function writeDummyDataToRecognizeStream() {
    // console.log("count: ", count++);
    if (global_chunk) {
        console.log(global_chunk.length, "dummy audio \t@ ", new Date());
        subtitleGenerator.getRecognizeStream().write(global_chunk);
    }
}

module.exports = {
    startVideoToAudio: startVideoToAudio,
    writeDummyDataToRecognizeStream: writeDummyDataToRecognizeStream
}