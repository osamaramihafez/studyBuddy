import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:3001');

function updateTimer(values) {
  socket.on('tick', values => {
    
  });
  socket.emit('tick');
}

export { updateTimer };