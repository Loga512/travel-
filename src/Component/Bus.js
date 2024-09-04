import React from 'react'
import './Bus.css'
const Bus = () => {
  return (
    <div>
      <div className="manu">
      <div className="container44">
          <h2>Bus Booking</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <br />
            <label htmlFor="date">Date of Travel:</label>
            <input type="date" id="date" name="date" required />
            <br />
            <label htmlFor="time">Time of Travel:</label>
            <input type="time" id="time" name="time" required />
            <br />
            <label htmlFor="destination">Destination:</label>
            <select id="destination" name="destination" required>
              <option value>Select Destination</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
              <option value="Houston">Houston</option>
              <option value="Phoenix">Phoenix</option>
            </select>
            <br />
            <input type="submit" defaultValue="Book Now" />
          </form>
        </div>
      </div>
      </div>
    );
  }
export default Bus
