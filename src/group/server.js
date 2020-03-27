const io = require('socket.io')();

io.on('connection', (client) => ***REMOVED***
    client.on('subscribeToTimer', (interval) => ***REMOVED***
      console.log('client is subscribing to timer with interval ', interval);
      setInterval(() => ***REMOVED***
        client.emit('timer', new Date());
      }, interval);
    ***REMOVED***
  ***REMOVED***


const port = 3001;
io.listen(port);
console.log('listening on port ', port);