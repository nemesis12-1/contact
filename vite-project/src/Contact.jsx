import React from 'react'
import './Contact.css'
import linkedin from './assets/linkedin.svg';
import instagram from './assets/instagram.svg';
import email from './assets/email.svg';
import contact from './assets/contact.svg';

const Contact = () => {


    return (
        <>
            <div className="container">
                <div className='heading'>
                    <h2>Contact Us</h2>
                </div>
                <div className="main">
                    <div className="info">
                        <div className='info_heading'>
                            <h4>Reach Us</h4>

                            <p>Feel free to contact us for any query.</p>


                        </div>
                        <div className='contact_details'>
                            <div className="content">
                                <img src={contact} alt="" />
                                <p>Phone: +91 1234567890</p>
                            </div>
                            <div className="content">
                                <img src={email} alt="" />
                                <p>Email:Contact@gmail.com</p>
                            </div>
                        </div>

                        <div className="icons">
                            <div>
                                <h2>Connect With Us</h2>
                            </div>
                            <img src={instagram} alt="" />
                            <img src={email} alt="" />
                            <img src={linkedin} alt="" />
                        </div>

                    </div>
                    <div className="details">
                        <p>Get in touch</p>
                        <form>

                            {/* <label htmlFor="">Name:</label> */}
                            <input type="text" placeholder="Enter your name" />

                            {/* <label htmlFor="">Email:</label> */}
                            <input type="email" placeholder="Enter your email" />

                            {/* <label htmlFor="">Message:</label> */}
                            <textarea name="" id="" cols="30" rows="10" placeholder="Enter your message"></textarea>
                            <div className='btn'>
                                <button>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact