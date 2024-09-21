// Create web server
// Server listens on port 3000
// Server responds with a JSON object containing the comments
// Server responds with a 404 error if the request is not valid

const http = require('http');
const fs = require('fs');

const comments = require('./comments.json');

const server = http.createServer((req, res) => {
  if (req.url === '/comments' && req.method === 'GET') {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(JSON.stringify(comments));
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/html',
    });
    res.end('<h1>404 Not Found</h1>');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});