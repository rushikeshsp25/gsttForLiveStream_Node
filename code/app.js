// to brings environment variables into action
require('dotenv').config();
let express = require('express');
let app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server);
let port = process.env.PORT || 1337;

let videoToAudio = require('./videoToAudio');

//corse config
let cors = require('cors')
let corsConfig = require('./cors');
app.use(cors(corsConfig));

//live routes
app.use('/', require('./routes/live'));

//serves library files
app.use('/library', express.static(__dirname + '/libraries'));

//serves assets
app.use('/assets', express.static(__dirname + '/public'));


// starting http server
server.listen(port, "0.0.0.0", function() {
    console.log('Server started on port:' + port)
});

const live_io = io.of('/live');
live_io.on('connection', (client) => {
    console.log('client connected');
    videoToAudio.startVideoToAudio(client);
    /* uncomment this code to send dummy audio data to recognizeStream */
    //setInterval(videoToAudio.writeDummyDataToRecognizeStream, 1000);
});