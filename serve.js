var liveServer = require("live-server");

var params = {
    port: 9000, // Set the server port. Defaults to 8080.
    host: "0.0.0.0", // Set the address to bind to. Defaults to 0.0.0.0.
    root: "./src", // Set root directory that's being server. Defaults to cwd.
    open: true, // When false, it won't load your browser by default.
    file: "index.html", // When set, serve this file for every 404 (useful for single-page applications)
};

liveServer.start(params);