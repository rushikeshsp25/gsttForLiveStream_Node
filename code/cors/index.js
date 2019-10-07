let originsWhitelist = [
    'http://localhost:4200', //this is my front-end url for development
    'http://127.0.0.1:4200',
    'http://http://35.236.232.219:4200',
];
let corsOptions = {
    origin: function(origin, callback) {
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
    },
    credentials: true
}

module.exports = {
    corsConfig: corsOptions
}