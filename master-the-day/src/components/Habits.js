import React, { Component } from 'react';
import moment from 'moment';

class Habits extends Component {
  constructor(props) {
    super(props);
    this.complete = this.complete.bind(this);
    this.dismiss = this.dismiss.bind(this);
  }

  complete(habit) {
    habit.complete = true;
    this.props.completeHabit(habit);
  }

  dismiss(habit) {
    habit.complete = true;
    this.props.dismissHabit(habit);
  }


  render() {
    // const habits = this.props.habits;
    // forin (habit in habits) {
      // get the habit when the time is appropriate
    // }
    const habit = this.props.habits['01'];
    console.log(habit);
    let timer = habit.timer ? `<h3 className="habit__timer">${habit.timer}</h3>` : '';
    return (
      <div className="habit">
        <h2 className="habit__title">{habit.title}</h2>
        <p className="habit__description">{habit.description}</p>
        {timer}
        <button className="habit__complete" onClick={(habit) => this.complete(habit)}>Done</button>
        <button className="habit__dismiss" onClick={(habit) => this.dismiss(habit)}>Dismiss</button>
      </div>
    );
  }
}

export default Habits;
