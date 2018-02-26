"use strict";

const METHODS_MAPPING = {
    get: "index",
    getid: "get",
    post: "create",
    putid: "update",
    deleteid: "delete"
};

const getMethod = (method, params) => METHODS_MAPPING[`${method}${params.id || ""}`];

const createHandler = (controller) => (event, context, callback) => {
    const method = event.httpMethod.toLowerCase();
    const body = JSON.parse(event.body || "{}");

    const routeHandler = controller[getMethod(method, event.pathParameters)];

    console.log(routeHandler, `${method}${event.pathParameters.id || ""}`, getMethod(method, event.pathParameters), controller, method);

    if (!routeHandler) {
        return callback(null, {
            statusCode: 404,
            headers: {
                "Access-Control-Allow-Origin" : "*",
                "Access-Control-Allow-Credentials" : true
            },
            body: "Not found"
        });
    }

    routeHandler.handler({
        __event: event,
        __context: context,
        body,
        params: event.pathParameters || {},
        query: event.queryStringParameters || {}
    })
    .then((response) => callback(null, response))
    .catch(err => {
        global.console.error(err);
        callback({
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Origin" : "*",
                "Access-Control-Allow-Credentials" : true
            },
            body: err
        });
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
