"use strict";

import { HashRouter as Router, Route } from "react-router-dom";
import AppRoot from "./app_root";
import UsersRoute from "./users_route";
import CompetitionRoute from "./compeition_route";

export default () => (
    <Router>
        <div>
            <Route exact path="/" component={AppRoot} />
            <Route path="/users" component={UsersRoute} />
            <Route path="/competitions/:id" component={CompetitionRoute} />
        </div>
    </Router>
);
