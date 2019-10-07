// gstt configurations
const gstt_config_live = {
    request: {
        config: {
            encoding: 'FLAC',
            sampleRateHertz: 48000,
            languageCode: 'en-US',
            model: 'default',
            audioChannelCount: 2,
            enableWordTimeOffsets: true,
            enableAutomaticPunctuation: true,
            // enableSeparateRecognitionPerChannel: true,
            speechContexts: [{
                "phrases": [
                    "Kezi 9"
                ],
                boost: 10
            }]
        },
        singleUtterance: false,
        //to get intermediate transcriptions
        interimResults: true,
    },
    streamingLimit: 100000
}
const gstt_config_recorded = {
    request: {
        config: {
            encoding: 'LINEAR16',
            languageCode: 'en-US',
            model: 'video',
            enableWordTimeOffsets: true,
            enableAutomaticPunctuation: true,
        },
        audio: {
            uri: ''
        }
    }
}
let livestream_endpoint = 'https://fuel-streaming-prod01.fuelmedia.io/v1/sem/40f15d3b-689f-48a5-9c61-a4f9583ed619.m3u8';

let bucket = {
    video: "heartland_recorded_videos",
    audio: "heartland_recorded_audios",
    trans: "heartland_recorded_transcriptions",
};

module.exports = {
    gstt_config_live: gstt_config_live,
    gstt_config_recorded: gstt_config_recorded,
    livestream_endpoint: livestream_endpoint,
    bucket: bucket
}