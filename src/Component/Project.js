import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import logo from './logo.png'
import paris from './paris.webp'
import bangkok from './bangkok.jfif'
import london from './london.jfif'
import dubai from './dubai.jfif'
import los from './los.jfif'
import forex1 from './forex1.jpg'
import flight from './flight.jpg'
import hotel from './hotel.jpg'
import client from './client.png'
const Project = () => {
  return (
    <div>
      <div className="head1">
      <div className="header1">
        <div className="head-items logo">
            <img src={logo} width="95" height="90"/>
        </div>
        <div className="head-items nav">
            <div className="nav-items it1"><Link to='/'>Home</Link></div>
            <div className="nav-items it2"><Link to='/about'>About</Link></div>
            <div className="nav-items it3"><Link to='/service'>Service</Link></div>
            <div className="nav-items it4"><Link to='/contact'>Contact</Link></div>
            <div className="nav-items it5"><Link to='/login'>Login</Link></div>
            <div className="nav-items it6"><Link to='/signup'>Signup</Link></div>
            </div>
            </div>
            <div className="image">
                <div className="img img1"><img src={paris} height="200" width="200"/></div>
                <div className="img img2"><img src={bangkok} height="200" width="200"/></div>
                <div className="img img3"><img src={london} height="200" width="200"/></div>
                <div className="img img4"><img src={dubai} height="200" width="200"/></div>
                <div className="img img5"><img src={los} height="200" width="200"/></div>
            </div>
            <div className="content">
                <div className="contents cont1">
                    <h4>Paris</h4>
                    <br></br>
                    <button className='bt'>Explore Now</button>
                </div>
                <div className="contents cont1">
                    <h4>Bangkok</h4>
                    <br></br>
                    <button className='bt'>Explore Now</button>
                </div>
                <div className="contents cont1">
                    <h4>London</h4>
                    <br></br>
                    <button className='bt'>Explore Now</button>
                </div>
                <div className="contents cont1">
                    <h4>Dubai</h4>
                    <br></br>
                    <button className='bt'>Explore Now</button>
                </div>
                <div className="contents cont1">
                    <h4 className='hh'>Los Angeles</h4>
                    <br></br>
                    <button className='bt'>Explore Now</button>
                </div>
                </div>
                <div className="c1">
                    <br></br>
                <div className="conts1">
                    <h1 className='hh1'><strong>Our Services</strong></h1>
                </div>
                <div className="image2">
                    <div className="imag imag1"><img src={forex1} height="220" width="260"/></div>
                    <div className="imag imag2"><img src={flight} height="220" width="230"/></div>
                    <div className="imag imag3"><img src={hotel} height="220" width="230"/></div>
                </div>
                <div className="content1">
                    <div className="contents1 con1">
                        <h2 className='hh2'>Forex</h2>
                        <p className='p1'>We,at Wandering souls,make your travel not only memorable 
                            but also convenient. We also help you with 'Forex' or 'Foreign Currency Exchange'
                            where you can convert one currency to another currency with ease. <br></br>
                        </p>
                        </div>
                        <div className="contents1 con1">
                            <h2 className='hh2'>Flight Booking</h2>
                            <p className='p1'>We,at Wandering Souls,offering the excellent quality Air Ticketing 
                                Services
                                to the clients.These services are widely for booking air
                                ticket in timely manner.<br></br>
                            </p>
                            </div>
                        <div className="contents1 con1">
                            <h2 className='hh2'>Hotel Booking</h2>
                            <p className='p1'>Wandering Souls is offering excellent quality Hotel reservation 
                                services. We make the hotel reservation according to destination 
                                provided by the clients.<br></br>
                            </p>
                            </div>
                            </div>
                            </div>
                            <div className="c2">
                                <h2 className='hh3'><b>"Our Client Says"</b></h2>
                                <img src={client} width="100" height="100"/>
                                <div className="container4"> 
                                <br></br>
                                       <p className='p2'>"THIS TRIP WAS INCREDIBLE...! from day one our 
                                         guide was amazing..caring and knowledgeable..
                                        Thanks everyone who made our trip as unforgettable experience!!!</p>
                                        <br></br>
                                        <p className='p3'>~ Hiren Patel</p>
                                       </div>
                                </div>
                                <div className="contain">
                                    <div className="contain1">  
                                        <p className='p4'>Copyright © 2024  wandering souls Planner. All rights reserved</p>
                                        <p className='p5'>www.wanderingsouls.co.in<br/>
                                            booking@wanderingsouls.co.in</p>
                                    </div>
                                </div>
                            </div>              
    </div>
  )
}

export default Project
