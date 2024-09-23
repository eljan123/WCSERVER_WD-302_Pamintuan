const http = require('http');
const EventEmitter = require('events');
const evenEmitter = new EventEmitter();

const requestHandler = (req, res) => {
    if (req.url === '/') {
        evenEmitter.emit('homePage', res);

    }else {
        res.writeHead(404);
        res.end('Page Not Found');
    }
};

//Event handler for the homePage event
evenEmitter.on('homePage', (res)) =>