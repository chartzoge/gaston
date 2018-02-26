"use strict";

import actions from "../config/actions";

export default class BaseModel {
    constructor (params) {
        this.modelName = params.modelName;
        this.actions = actions({
            modelName: this.modelName
        });
    }

    findAll(actionOptions) {
        return this.actions[`GET_${this.modelName}`](actionOptions);
    }

    findById (id) {
        return this.actions[`GET_BY_ID_${this.modelName}`]({ id });
    }
}
