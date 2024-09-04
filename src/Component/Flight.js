import React from 'react'
import './flight.css'
const Flight = () => {
  return (
    <div>
      <div className="container88">
      <div className="container33">
        <h2>Flight Booking</h2>
        <form>
          <label htmlFor="from">From:</label>
          <input type="text" id="from" name="from" required />
          <br />
          <label htmlFor="to">To:</label>
          <input type="text" id="to" name="to" required />
          <br />
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" required />
          <br />
          <label htmlFor="class">Class:</label>
          <select id="class" name="class">
            <option value="economy">Economy</option>
            <option value="business">Business</option>
            <option value="first">First Class</option>
          </select>
          <br />
          <button type="submit">Book Flight</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Flight