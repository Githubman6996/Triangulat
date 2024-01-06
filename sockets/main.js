module.exports = (io) => {
    io.on('connection', (socket) => {
        if (!socket.request.session || !socket.request.session.user) return;
        socket.join(socket.request.session.user.id);

        fs.readdirSync(`${__dirname}/events`).forEach((file) => {
            socket.on(file.split(".")[0], (data) => {
                require(`${__dirname}/events/${file}`)(io, socket, data);
            });
        });
    });

    console.log(`Loaded sockets.`);
};