import React, { Component } from 'react';

class HabitList extends Component {
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
    this.renderHabits = this.renderHabits.bind(this);
    // this.addHabit = this.addHabit.bind(this);
    // this.handleRecurring = this.handleRecurring.bind(this);
  }

  renderHabits(key) {
    const habits = {...this.state.habits};
    const habit = habits[key];
    return (
      <div className="habit" key={key}>
        <h2 className="habit__title">{habit.title}</h2>
        <p className="habit__description">{habit.description}</p>
      </div>
    );
  }

  render() {
    const habits = {...this.state.habits};
    return (
      <ul className="habit-list">
        {Object.keys(habits).map(this.renderHabits)}
      </ul>
    );
  }
}

export default HabitList;
