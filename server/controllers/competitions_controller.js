"use strict";

const Promise = require("bluebird");
const moment = require("moment");

module.exports = {
    index: {
        handler (req) {
            console.log(req.params);

            const response = {
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Origin" : "*",
                    "Access-Control-Allow-Credentials" : true
                },
                body: JSON.stringify({
                    competitions: [{
                        id: 1,
                        name: "PRG Heartburn",
                        location: "PRG",
                        date: moment(Date.now()).format("MM/DD/YYYY HH:mm")
                    }]
                }),
            };

            return Promise.resolve(response);
        }
    },

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
                    competition: {
                        id: 1,
                        name: "PRG Heartburn",
                        location: "PRG",
                        date: moment(Date.now()).format("MM/DD/YYYY HH:mm")
                    }
                }),
            };

            return Promise.resolve(response);
        }
    }
};
