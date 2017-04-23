import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import moment from 'moment';
import './App.css';
import Habits from './components/Habits';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      habits : {
        '01' : {
          title: 'Mindfulness Break',
          description: 'Take a mindfulness break for 10 minutes',
          timer: 1000
        }
      }
    };
  }

  componentDidMount() {
    const habits = {...this.state.habits};
    Object.keys(habits).map(key => {
      const x = setInterval(function() {
        // const date = habits[key].date.getTime();
        const date = new Date().getTime();
        console.log('date', date);
        const now = new Date().getTime();
        console.log('now', now);
        const timer = date - now;
        if (timer < 0) {
          clearInterval(x);
          document.getElementById("root").innerHTML = "EXPIRED";
        }
      }, 1000);
    });
  }
  addHabit(habit) {
    const habits = {...this.state.habits};
    habit.timestamp = habit;
    this.setState({ habit });
  }

  displayHabit() {
    console.log(Object.keys(this.state.habits));
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <div className="container">
            <h2>Welcome to React</h2>
            <ul className="menu">
              <li key="habit-form"><Link to={'habits/add'}>Add Habit</Link></li>
              <li>Calendar</li>
            </ul>
          </div>
        </header>
        <section className="habit">
          <div className="container">
            <Habits habits={this.state.habits} />
          </div>
        </section>
        <footer className="footer">
          <p>Footer Goes Here</p>
        </footer>
      </div>
    );
  }
}

export default App;
