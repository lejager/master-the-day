import React, { Component } from 'react';

class Habits extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const habits = this.props.habits;
    // forin (habit in habits) {
      // get the habit when the time is appropriate
    // }
    const key = '01'; // just load one habit for now
    const habit = this.props.habits[key];
    let timer = habit.timer ? <h3 className="habit__timer">{habit.timer}</h3> : '';
    return (
      <div className="habit">
        <h2 className="habit__title">{habit.title}</h2>
        <p className="habit__description">{habit.description}</p>
        {timer}
        <button className="habit__complete" onClick={() => this.props.completeHabit(key,true)}>Done</button>
        <button className="habit__dismiss" onClick={() => this.props.completeHabit(key,false)}>Dismiss</button>
      </div>
    );
  }
}

export default Habits;
