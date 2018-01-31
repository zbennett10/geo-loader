const routes = {
    '/': (req, res) => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end("Hello World");
    }
};

module.exports = (router) => {
    let routeURLs = Object.keys(routes);
    for(var i = 0; i < routeURLs.length; i++) {
        let routePath = routeURLs[i]
        router.register(routePath, routes[routePath]);
    }
}