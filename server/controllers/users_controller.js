"use strict";

const Promise = require("bluebird");

module.exports = {
    get: {
        handler (req) {
            console.log(req.params);

            const response = {
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Origin" : "*",
                    "Access-Control-Allow-Credentials" : true
                },
                body: JSON.stringify({
                    users: [{ name: "chase" }]
                }),
            };

            return Promise.resolve(response);
        }
    }
};
