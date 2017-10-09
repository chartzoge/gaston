"use strict";

const routes = require("./server/routes");

routes.forEach(route => {
    global.console.info("Registering handler", route.path);
    module.exports[route.path] = route.handler;
});
