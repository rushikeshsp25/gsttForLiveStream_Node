var express = require("express");
var router = express.Router();

router.get('/', function(req, res) {
    res.json({ 'message': 'welcome to Heartland Close Captioning' });
});

module.exports = router;