const http = require('http');
const moment = require('moment');

const server = http.createServer((req, res) => {
    console.log(req.url)
    if(req.url == '/timer') {
        res.write('<h1>KST NOW</h1>');
        var date = moment();
        res.write(date.format("YYYY-MM-DD HH:mm:ss"));
        res.end();
    }
})

server.listen(8080)

server.on('listening', () => {
    console.log("server is running on 8080 port.")
})

server.on('error', (error) => {
    console.log(error)
})