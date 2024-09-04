import React from 'react';
import {Link} from 'react-router-dom';
import './services.css';
function Service(){
  return (
    <div className="pattu">
      <div className="cont">
        <h1 className='hh7'>WELCOME TO OUR WEBSITE</h1>
        <p className='p8'>Explore Our Services</p>
        <div className="cons1">
          <label className='l1' htmlFor="sel"><b>OurServices</b></label>
          <ul>
        <li><Link to="/forex">Forex</Link></li>
        <li><Link to="/hotel">Hotel Booking</Link></li>
        <li><Link to="/flight">Flight Booking</Link></li>
        <li><Link to="/bus">Bus Booking</Link></li>
      </ul>
        </div>
      </div>
    </div>
  );
};

export default Service;



      