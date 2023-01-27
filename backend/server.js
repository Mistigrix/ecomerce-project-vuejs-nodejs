const http = require('http');
const app = require('./app');

const HOSTNAME = 'localhost';
const PORT = 3000

const server = http.createServer(app)

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server started at http://${HOSTNAME}:${PORT}`);
})