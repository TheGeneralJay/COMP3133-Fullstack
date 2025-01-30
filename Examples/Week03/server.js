const express = require("express");
const socketio = require("socket.io");
const app = express();
const SERVER_PORT = 3000;

// Creates server object.
const server = app.listen(SERVER_PORT, () => {
  console.log(`Chat server on port http://localhost:${SERVER_PORT}.`);
});

// The root will open to the chat.html file.
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/chat.html");
});

// The root will open to the chat.html file.
app.get("/group", (req, res) => {
  res.sendFile(__dirname + "/views/group_chat.html");
});

// Create the socket server, pass the express server to it.
const io = socketio(server);

// Starts the socket server.
io.on("connection", (socket) => {
  // io is the server, socket is the client.
  console.log(`New Client: ${socket.id}.`);

  socket.on("disconnect", () => {
    console.log(`Client disconnected: ${socket.id}.`);
  });

  // Send method calls this 'message' event.
  socket.on("message", (data) => {
    console.log(`Message from ${socket.id}: ${data}`);
  });

  // Custom event.
  socket.on("chat_message", (data) => {
    data.clientId = socket.id; // This allows the socket.id to be visible from chat.html.
    console.log(`${JSON.stringify(data)}`);

    // Emit to io, which will send to the whole server.
    io.emit("chat_message", data);

    // socket.broadcast.emit("chat_message", data);
  });

  socket.on("join_group", (groupName) => {
    socket.join(groupName);
  });

  socket.on("leave_group", (groupName) => {
    socket.leave(groupName);
  });
});
