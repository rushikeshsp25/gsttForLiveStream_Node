var express = require("express");
var router = express.Router();
let recorded = require('../recorded')

router.get('/', async function(req, res) {
    let response = await recorded.getVideos(req.query.skip, req.query.limit);
    res.json(response);
});

router.get('/getsubtitles', async function(req, res) {
    let readStreanm = await recorded.getSubtitleFile(req.query.filename);
    res.setHeader('Content-Type', "text/vtt");
    readStreanm.pipe(res);
});

router.get('/video/subtitles', async function(req, res) {
    recorded.generateSubtitles(req.query.video_name)
        .then(res => {
            console.log("Done processing !");
        }).catch(err => {
            console.log("Err processing", err);
        })
    res.json({ "message": "Job is added in the queue" });
});

router.get('/video/count', async function(req, res) {
    let response = await recorded.getVideosCount();
    res.json({
        'count': response
    });
});

router.get('/audio/subtitles', async function(req, res) {
    recorded.generateSubtitlesFromAudio(req.query.audio_name)
        .then(res => {
            console.log("Done processing !");
        }).catch(err => {
            console.log("Err processing");
        })
    res.json({ "message": "Job is added in the queue" });
});


module.exports = router;