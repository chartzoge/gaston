"use strict";

module.exports = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: "Yayayay",
            input: event,
        }),
    };

    callback(null, response);
};
