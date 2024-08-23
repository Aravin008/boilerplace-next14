const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Custom API endpoint example
  server.get('/api/hello', (req, res) => {
    console.log("Serving from here")
    res.json({ message: 'Hello from the server!' });
  });

  // Custom routes (optional)
  server.get('/custom', (req, res) => {
    console.log('Request for /custom');
    app.render(req, res, '/custom', req.query);
  });

  server.get('/welcome', (req, res) => {
    console.log("Got request");
    app.render(req, res, '/welcome/main', req.query);
  })

  // Handle all other routes with Next.js
  server.all('*', (req, res) => {
    handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});

