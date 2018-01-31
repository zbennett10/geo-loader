const http = require('http'),
      router = require('./router'),
      wireUpRoutes = require('./routes'),
      EventEmitter = new (require('events'));

EventEmitter.on('serverStart', () => {
    console.log("Starting server on port 4040");
});

wireUpRoutes(router);

var server = http.createServer((req, res) => {
    //compression, json body parsing middleware in here
    const handleRoute = router.route(req);
    handleRoute(res);
});

server.listen(4040, () => EventEmitter.emit('serverStart'));