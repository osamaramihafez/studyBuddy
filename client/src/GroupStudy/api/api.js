import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:3001');

function updateTimer(values) ***REMOVED***
  socket.on('tick', values => ***REMOVED***
    
  ***REMOVED***
  socket.emit('tick');
}

export ***REMOVED*** updateTimer };