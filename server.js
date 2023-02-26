const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({
  static: './build',
});

const port = process.env.PORT || 8000;
server.use(middlewares);

// Add Access-Control-Allow-Origin header to allow cross-origin requests
server.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

server.use(router);
server.listen(port, () => {
  console.log('JSON Server is running');
});
