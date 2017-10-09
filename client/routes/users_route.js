import React from "react";
import { connect } from "react-redux";

import UserModel from "../models/user_model";

class UsersRoute extends React.Component {
    constructor (params) {
        super(params);

        this.state = {};

        const userModel = new UserModel();
        params.dispatch(userModel.findAll());
    }

    render () {
        const users = this.props.users.map((user, index) => (
            <h1 key={index}>{user.name}</h1>
        ));

        return (
            <div>
                <h1> users </h1>
                {users}
            </div>
        );
    }
}

export default connect(state => ({ users: state.users || [] }))(UsersRoute);
