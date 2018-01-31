var urlParser = require('url')

var self = module.exports = {
    handlers: {},

    clear: () => {
        self.handlers = {};
    },

    register: (url, handler) => {
        self.handlers[url] = handler;
    },

    route: (req) => {
        var url = urlParser.parse(req.url, true);
        var matchingHandler = self.handlers[url.pathname].bind(null, req);
        //TODO: handle missing routeb^
        return matchingHandler; 
    }
}