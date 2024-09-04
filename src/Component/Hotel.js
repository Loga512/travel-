import React from 'react'
import './Hotel.css'
const Hotel = () => {
  return (
    <div>
      <div className="container99">
        <div className="container22">
          <h2 className='h13'>Hotel Booking</h2>
          <form action="#" method="post">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <br/>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <br/>
            <div className="form-group">
              <label htmlFor="check-in">Check-in Date:</label>
              <input type="date" id="check-in" name="check-in" required />
            </div>
            <br/>
            <div className="form-group">
              <label htmlFor="check-out">Check-out Date:</label>
              <input type="date" id="check-out" name="check-out" required />
            </div>
            <br/>
            <div className="form-group">
              <label htmlFor="room-type">Room Type:</label>
              <select id="room-type" name="room-type" required>
                <option value="single">Single</option>
                <option value="double">Double</option>
                <option value="suite">Suite</option>
              </select>
            </div>
            <br/>
            <div className="form-group">
              <button type="submit">Book Now</button>
            </div>
            <br/>
          </form>
        </div>
      </div>
      </div>
    );
  }
export default Hotel




