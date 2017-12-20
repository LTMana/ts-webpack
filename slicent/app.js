"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const server = http_1.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World\n");
});
const hostname = "127.0.0.1";
const port = 3000;
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
//# sourceMappingURL=app.js.map