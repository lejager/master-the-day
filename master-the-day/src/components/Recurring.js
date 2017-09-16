import React, { Component } from 'react';

class Recurring extends Component {
  render() {
    return (
      <div class="recurring">
      <strong>Repeats:</strong>
        <select>
          <option value="0" title="Daily">Daily</option>
          <option value="1" title="Every weekday (Monday to Friday)">Every weekday (Monday to Friday)</option>
          <option value="2" title="Every Monday, Wednesday, and Friday">Every Monday, Wednesday, and Friday</option>
          <option value="3" title="Every Tuesday and Thursday">Every Tuesday and Thursday</option>
          <option value="4" title="Weekly">Weekly</option>
          <option value="5" title="Monthly">Monthly</option>
          <option value="6" title="Yearly">Yearly</option>
        </select>
          <strong>Repeat every</strong>
          <select id= ":2k.interval" title= "Repeat every 1 weeks" >
          <option value="1" selected="selected">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
        </select>
        <label>weeks</label>Repeat on:
        <input id= ":2k.dow0" name= "SU" type= "checkbox" aria-label="Repeat on Sunday" title= "Sunday" >
        <label for=":2k.dow0" title="Sunday">S</label>
        <input id=":2k.dow1" name="MO" type="checkbox" aria-label="Repeat on Monday" title="Monday">
        <label for=":2k.dow1" title="Monday">M</label>
        <input id=":2k.dow2" name="TU" type="checkbox" aria-label="Repeat on Tuesday" title="Tuesday">
        <label for=":2k.dow2" title="Tuesday">T</label>
        <input id=":2k.dow3" name="WE" type="checkbox" aria-label="Repeat on Wednesday" title="Wednesday">
        <label for=":2k.dow3" title="Wednesday">W</label>
        <input id=":2k.dow4" name="TH" type="checkbox" aria-label="Repeat on Thursday" title="Thursday">
        <label for=":2k.dow4" title="Thursday">T</label>
        <input id=":2k.dow5" name="FR" type="checkbox" aria-label="Repeat on Friday" title="Friday">
        <label for=":2k.dow5" title="Friday">F</label>
        <input id=":2k.dow6" name="SA" type="checkbox" aria-label="Repeat on Saturday" title="Saturday">
        <label for=":2k.dow6" title="Saturday">S</label>
        Starts on: <input id=":2k.rstart" size="10" value="9/15/2017" disabled="disabled" aria-labelledby=":2k.rstart-label" autocomplete="off">Ends:<input id=":2k.endson_never" name="endson" type="radio" checked="checked" aria-label="Ends never" title="Ends never"><label for=":2k.endson_never" title="Ends never">Never</label>
        <input id=":2k.endson_count" name="endson" type="radio" aria-label="Ends after a number of occurrences" title="Ends after a number of occurrences">
        <label for=":2k.endson_count" title="Ends after a number of occurrences">
        After <input id=":2k.endson_count_input" size="3" value="" disabled="disabled" title="Occurrences"> occurrences
        <input id=":2k.endson_until" name="endson" type="radio" aria-label="Ends on a specified date" title="Ends on a specified date">
        <label for=":2k.endson_until" title="Ends on a specified date">
        On <input id=":2k.endson_until_input" size="10" value="" title="Specified date" disabled="disabled" autocomplete="off">
        Summary:
      </div>
    )
  }
}

export default Recurring;