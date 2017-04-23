import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class HabitForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      recurring: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.addHabit = this.addHabit.bind(this);
    this.handleRecurring = this.handleRecurring.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleRecurring(e) {
    this.setState({ recurring: this.state.recurring ? false : true })
  }

  addHabit(event) {
    event.preventDefault();
    const date = this.state.startDate;
    let hour = +this.hour.value;
    if (this.ampm.value === 'pm') {
      hour += 12;
    }
    date.hour(hour);
    date.minute(this.minute.value);
    date.second(0);

    // const date = new Date(year, month[, date[, hours[, minutes[, seconds[, milliseconds]]]]]);
    const habit = {
      name: this.title.value,
      startDate: date
      // time: this.status.value,
      // desc: this.desc.value,
      // image: this.image.value,
    }
    console.log(habit);
    this.props.addHabit(habit);
    this.habitForm.reset();
  }

  render() {
    return (
      <form ref={(input) => this.habitForm = input} className="habit-form" onSubmit={(e) => this.addHabit(e)}>
        <div className="habit-form">
        <div className="row">
          <div className="form-element form-title">
            <label>Title</label>
            <input ref={(input) => this.title = input} type="text" />
          </div>
        </div>
        <div className="row">
          <div className="form-element form-date">
            <label>Start Date</label>
            <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange} />
          </div>
          <div className="form-element form-time">
            <label>Time</label>
            <input ref={(input) => this.hour = input} type="number" step="1" min="01" max="12" defaultValue="07" />
            <input ref={(input) => this.minute = input} step="1" min="00" max="60" defaultValue="00" />
            <select ref={(input) => this.ampm = input}>
              <option ref="am" value="am">am</option>
              <option ref="pm" value="pm">pm</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="form-element">
            <label>Repeat...</label>
            <input ref={(value) => this.recurring = value} type="checkbox" checked={this.state.recurring} onChange={this.handleRecurring}/>
            <select ref="repeat">
              <option ref="daily">Daily</option>
              <option ref="weekly">Weekly</option>
              <option ref="monthly">Monthly</option>
            </select>
          </div>
        </div>
        <button type="submit">Save</button>
        </div>
      </form>
    );
  }
}

export default HabitForm;
