const EventEmitter = require('events');

//Create an event emitter object
const evenEmitter = new EventEmitter();

//Create an event handler
const myEventHandler = () => {
    console.log('Party time!');
};

//Assign the event handler to an event
evenEmitter.on('shout', myEventHandler);

//Fire the 'shout' event
evenEmitter.emit('shout');