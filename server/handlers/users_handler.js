"use strict";

module.exports = (event, context, callback) => {
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

    callback(null, response);
};
