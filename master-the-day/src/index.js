import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import HabitForm from './components/HabitForm';
import HabitList from './components/HabitList';
import NoMatch from './components/NoMatch';
import './index.css';

ReactDOM.render((
	<Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/add" component={HabitForm}/>
		<Route path="/list" component={HabitList}/>
    <Route path="*" component={NoMatch}/>
  </Router>
	), document.getElementById('root')
);
