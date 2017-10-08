"use strict";

import $ from "jquery";
import Promise from "bluebird";

export default class ApiManager {
    _makeRequest (params) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: params.url,
                method: params.method,
                data: params.query || params.body
            })
            .done((responseBody) => {
                resolve(responseBody);
            })
            .fail((xhr, status, err) => {
                reject(err);
            });
        });
    }

    get (params) {
        params.method = "GET";
        return this._makeRequest(params);
    }

    static get (params) {
        return (new ApiManager(params)).get(params);
    }
}
