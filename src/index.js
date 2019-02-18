import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ProjectGroup from './ProjectGroup';
import Project from './Project';
import Analytics from './Analytics';
import Users from './Users';
import About from './About';
import MenuDesktop from './MenuDesktop';
import Profile from './Profile';
import HomepageLayout from './Home';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import api from './api';
import createProject from './createProject';
import Landing from './Landing';

// aws imports
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
Amplify.configure(aws_exports);


let Example = ()=>{
    return (
        <Router>
        <div>
        <MenuDesktop />

          <Route exact path="/" component={Landing} />
          <Route path="/app" component={App} />
          <Route path="/api" component={api} />

          <Route path="/about" component={About} />
          <Route exact path="/create/project" component={createProject} />

          <Route exact path="/projects" component={ProjectGroup} />
          <Route exact path="/profile/:user" component={Profile} />
          <Route exact path="/analytics" component={Analytics} />
          <Route exact path="/users" component={Users} />
          <Route path="/projects/:projectId" component={Project} />

        </div>
      </Router>
    )
}

Example = withAuthenticator(Example)



ReactDOM.render(<Example />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
