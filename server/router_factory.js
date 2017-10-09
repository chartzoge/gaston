"use strict";

const createHandler = (controller) => (event, context, callback) => {
    const method = event.httpMethod.toLowerCase();
    const body = JSON.parse(event.body || "{}");

    const routeHandler = controller[method];

    if (!routeHandler) {
        return callback(null, {
            statusCode: 404,
            body: "Not found"
        });
    }

    routeHandler({
        __event: event,
        __context: context,
        body,
        params: event.pathParameters || {},
        query: event.queryStringParameters || {}
    })
    .then((response) => callback(null, response))
    .catch(err => {
        global.console.error(err);
        callback(err);
    });
};

module.exports = {
    install (path, controller, params = {}) {
        return {
            path,
            handler: createHandler(controller, params)
        };
    }
};
