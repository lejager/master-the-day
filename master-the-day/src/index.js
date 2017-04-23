import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './App';
import HabitForm from './components/HabitForm';
import NoMatch from './components/NoMatch';
import './index.css';

ReactDOM.render((
	<Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/habits/add" component={HabitForm}/>
    <Route path="*" component={NoMatch}/>
  </Router>
	), document.getElementById('root')
);
