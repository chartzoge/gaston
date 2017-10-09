"use strict";

const Promise = require("bluebird");

module.exports = (req) => {
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin" : "*",
            "Access-Control-Allow-Credentials" : true
        },
        body: JSON.stringify({
            users: [{ name: "chase" }],
            event: req.__event,
            context: req.__context
        }),
    };

    return Promise.resolve(response);
};
