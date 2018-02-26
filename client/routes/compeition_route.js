"use strict";

import React from "react";
import { connect } from "react-redux";
import CompetitionsModel from "../models/competitions_model";

class AppRoot extends React.Component {
    constructor (params) {
        super(params);

        this.state = {
            competitions: []
        };

        const competitions = new CompetitionsModel();
        params.dispatch(competitions.findById(params.compeitionId));
    }

    onCompSelection (e) {
        console.log(e);
    }

    render () {

        const comps = this.props.competitions || [];

        const rows = comps.map((comp, index) => (
            <tr key={index} onClick={() => this.onCompSelection(comp)}>
                <td>{comp.name}</td>
                <td>{comp.location}</td>
                <td>{comp.date}</td>
            </tr>
        ));

        return (
            <div class="container">
                <h1> Competitions </h1>

                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {rows}
                    </tbody>

                </table>
            </div>
        );
    }
}

export default connect((state, props) => ({
    compeitionId: props.match.params.id,
    competition: state.competitions || {}
}))(AppRoot);
