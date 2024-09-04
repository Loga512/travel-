import React from 'react'
import './contactus.css'
import whatimg from './whatimg.png'
import instaimg from './instaimg.jfif'
import gmail from './gmail.png'
import twitter from './twitter.png'
const Contact = () => {
  return (
    <div>
      <div className="header3">
          <div className="container12">
            <h2 className='hh9'>Contact Us</h2>
          </div>
          <div className="cont21">
            <div className="cont31">
              <h4 className='h10'>Address</h4>
              <p className='p9'>BF-29, Thiru Appt., Chitra<br />
                Complex,New IPCL Road, <br />
                Chennai-626023</p>
            </div>
            <div className="cont41">
              <h4>Email</h4>
              <p className='p9'>www.wanderingsouls.co.in<br />
                booking@wanderingsouls.co.in</p>
            </div>
            <br></br>
            <br></br>
            <div className="cont51">
              <h4>Phone</h4>
              <p className='p9'>Mobile: +919003660036</p>
            </div>
            <br></br>
            <br></br>
            <div className="cont61">
              <img src={whatimg} width="40px" height="40px" />
              <img src={instaimg} width="40px" height="40px" />
              <img src={gmail} width="40px" height="40px" />
              <img src={twitter} width="40px" height="40px" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact