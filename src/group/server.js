const express = require("express");
const http = require("http");
const app = express();
const socket = require('socket.io');
const server = http.createServer(app);
const io = socket(server, ***REMOVED***
  origins: '*:*'
***REMOVED***
const port = 3001;
const ***REMOVED*** generateMessage } = require("./utils/messages")
const ***REMOVED***
  getUser,
  getUsersInRoom,
  addUser,
  removeUser
} = require("./utils/users")
// Timer implementation 
io.on("connection", socket => ***REMOVED***
  socket.on('join', (***REMOVED***
      username,
      room
  }, callback) => ***REMOVED***
      const ***REMOVED***
          error,
          user
      } = addUser(***REMOVED***
          id: socket.id,
          username,
          room
      })
      if (error) ***REMOVED***
          return callback(error);
      }
      socket.join(user.room);
      socket.emit("message", generateMessage("Welcome", "Admin"));
      socket.broadcast.to(user.room).emit("message", generateMessage(`$***REMOVED***user.username} has joined!`, "Admin"));
      io.to(user.room).emit("roomData", ***REMOVED***
          room: user.room,
          users: getUsersInRoom(user.room)
      })
  ***REMOVED***
  socket.on("sendMessage", (msg) => ***REMOVED***
      const user = getUser(socket.id);
      console.log("hello");
      io.to(user.room).emit("message", generateMessage(msg, user.username));
  ***REMOVED***

  socket.on("sendPlay", () => ***REMOVED***
    const user = getUser(socket.id);
    io.to(user.room).emit("play", socket.id);
  ***REMOVED***

  socket.on("sendPause", () => ***REMOVED***
    const user = getUser(socket.id)
    io.to(user.room).emit("pause", socket.id);
  })

  socket.on("sendReset", () => ***REMOVED***
    const user = getUser(socket.id)
    io.to(user.room).emit("reset", socket.id);
  })

  socket.on("sendSwitchModes", () => ***REMOVED***
    const user = getUser(socket.id)
    console.log("test");
    io.to(user.room).emit("switchModes", socket.id);
  })

  socket.on("sendSwitchContinue", () => ***REMOVED***
    const user = getUser(socket.id)
    console.log("test");
    io.to(user.room).emit("switchContinue", socket.id);
  })

  socket.on("disconnect", () => ***REMOVED***
      const user = removeUser(socket.id);
      if (user) ***REMOVED***
          io.to(user.room).emit('message', generateMessage(`$***REMOVED***user.username} has disconnected`, "Admin"));
          io.to(user.room).emit("roomData", ***REMOVED***
              room: user.room,
              users: getUsersInRoom(user.room)
          })
      }
  })
***REMOVED***



// Chat implementation


console.log('listening on port', port);


server.listen(port);
