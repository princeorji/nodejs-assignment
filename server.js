const http = require("http")

const hostname = 'localhost';
const port = 8080

const requestListener = function (req, res) {
    res.writeHead(200);
    res.write('Hello world');
    res.end();
}

const server = http.createServer(requestListener)
server.listen(port, hostname, () => {
    console.log(`http://${hostname}:${port}/`)
})