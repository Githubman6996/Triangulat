const e = require("express");
const User = require('../../models/User');

module.exports = (io, socket, data) => {
    if (typeof data !== 'string') return io.to(socket.request.session.user).emit("chat", {
        error: true,
        reason: "Message must be a string"
    });
    if (data.length === 0) return io.to(socket.request.session.user).emit("chat", {
        error: true,
        reason: "Message cannot be empty"
    });
    if (data.length > 1000) return io.to(socket.request.session.user).emit("chat", {
        error: true,
        reason: "Message cannot be longer than 1,000 characters"
    });
    if (socket.request.session.lastMessage && socket.request.session.lastMessage > Date.now() - 500) return io.to(socket.request.session.user).emit("chat", {
        error: true,
        reason: "You are sending messages too fast. Please wait a moment before sending another message."
    });
    socket.request.session.lastMessage = Date.now();
        User.findOne({_id: socket.request.session.user}, (err, user) => { 
        if (err) return io.to(socket.request.session.user).emit("chat", {
            error: true,
            reason: "An error occurred while sending your message. Please try again later."
        });


        io.emit("chat", {
            user: {
                pfp: user.pfp,
                _id: user._id,
                username: user.username,
                role: user.role
            },
            message: data
        });
    });
};