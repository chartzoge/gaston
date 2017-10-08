"use strict";

import BaseModel from "./base_model";

export default class UserModel extends BaseModel {
    constructor () {
        super({ modelName: "user" });
    }
}
