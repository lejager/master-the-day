import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import moment from 'moment';
import './App.css';
import Habits from './components/Habits';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habits : {
        '01' : {
          title: 'Mindfulness Break',
          description: 'Take a mindfulness break for 10 minutes',
          timer: 1000
        }
      }
    };
    this.checkTimers = this.checkTimers.bind(this);
    this.completeHabit = this.completeHabit.bind(this);
  }

  componentDidMount() {
    const habitTimer = setInterval(()=> {
      this.checkTimers(); // check timers every minute (currently every 5 second);
    }, 5000);
  }

  checkTimers() {
    const habits = {...this.state.habits};
    // for each habit, check the next timer instance
    Object.keys(habits).map(key => {
      // const date = habits[key].date.getTime();
      const timerDateObj = habits[key].timer;
      console.log(timerDateObj);
      // const date = new Date().getTime();
      // console.log('date', date);
      const now = new Date().getTime();
      console.log('now', now);
      // const timer = date - now;
      // if (timer < 0) {
      //   clearInterval(x);
      //   document.getElementById("root").innerHTML = "EXPIRED";
      // }
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

  completeHabit(key,complete) {
    const habits = {...this.state.habits};
    const habit = habits[key];
    if (complete) {
      habit.complete = true;
    } else {
      habit.dismiss = true;
    }
    this.setState({ habits });
    //** close the habit, remove from the view screen
    //** create a new instance of the habit, based on whether it's set to recurring or not
  }

  dismissHabit(key) {
    console.log(key);
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <div className="container">
            <h2>Welcome to React</h2>
            <ul className="menu">
              <li key="habit-form"><Link to={'add'}>Add</Link></li>
              <li key="habit-link"><Link to={'list'}>List</Link></li>
              <li>Calendar</li>
            </ul>
          </div>
        </header>
        <section className="habit">
          <div className="container">
            <Habits
              habits={this.state.habits}
              completeHabit={this.completeHabit}
            />
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
