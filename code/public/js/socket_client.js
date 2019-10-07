var socket = io('/live');
let displayArea = document.getElementById('display-area');
let videoElement = document.getElementById('videoPlayer');
let subtitles = {}

socket.on('data', function(data) {
    subtitles = {...subtitles, ...data };
    console.log(JSON.stringify(subtitles), null, 4);
    $("#videoPlayer").on("timeupdate", function(event) {
        let floored_ct = Math.floor(this.currentTime);
        let sentence_obj = subtitles[floored_ct];
        if (sentence_obj) {
            this.play();
            displayArea.innerHTML = sentence_obj.sentence;
        }
    });
});

function loaded() {
    var video = document.getElementById("videoPlayer"),
        track;
    if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource('https://fuel-streaming-prod01.fuelmedia.io/v1/sem/40f15d3b-689f-48a5-9c61-a4f9583ed619.m3u8');
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function() {
            video.pause();
        });
    }
}