"use strict";

const router = require("./router_factory");

module.exports = [
    router.install("users", require("./controllers/users_controller"))
];
