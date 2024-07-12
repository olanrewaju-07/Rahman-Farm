import React from 'react'
import './Contact.css'
import msg_icon from '../../images/msg-icon.png'
import mail_icon from '../../images/mail-icon.png'
import phone_icon from '../../images/phone-icon.png'
import location_icon from '../../images/location-icon.png'
import white_arrow from '../../images/white-arrow.png'
const Contact = () => {
    return (
      <div className="contact">
        <div className="contact-col">
          <div className="first">
            <h3>
              Send us message <img src={msg_icon} alt="" />
            </h3>
            <p>
              {" "}
              Feel free to reach out through our contact form or find our
              contact information below. Your feedback, question and suggestion
              are important to us as we strive to provide exceptional service to
              our university communities
            </p>
            <ul>
              <li>
                <img src={mail_icon} alt="" />
                issabasheet@gmail.com
              </li>
              <li>
                <img src={phone_icon} alt="" />
                +2348167375508
              </li>
              <li>
                <img src={location_icon} alt="" />
                No 19, Zone 2,
                <br />
                Aladi, Omiyale, Olomi,
                <br />
                Ibadan, Oyo State
              </li>
            </ul>
          </div>
        </div>
        <div className="contact-col">
          <form action="https://formspree.io/f/xoqgoknd" method="POST">
            <label>Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              required
            />
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your mobile numbe"
              required
            />
            <label>Write Your Message</label>
            <textarea
              name="message"
              placeholder="Write your message"
              rows="6"
              required
            ></textarea>
            <button type="submit" className="btn dark-btn">
              Submit Now <img src={white_arrow} alt="" />
            </button>
          </form>
          <span>Sending...</span>
        </div>
      </div>
    );
}

export default Contact;