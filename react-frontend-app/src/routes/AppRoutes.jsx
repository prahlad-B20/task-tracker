import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from '../components/Signup';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import ProjectList from '../components/ProjectList';
import ProjectDetails from '../components/ProjectDetails';
import TaskForm from '../components/TaskForm';
import PrivateRoute from './PrivateRoute';

const AppRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/projects" component={ProjectList} />
                <PrivateRoute path="/projects/:id" component={ProjectDetails} />
                <PrivateRoute path="/tasks/new" component={TaskForm} />
            </Switch>
        </Router>
    );
};

export default AppRoutes;