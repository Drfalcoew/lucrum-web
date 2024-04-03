import { Col, Row } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';
import React from 'react';
import './Contact.css';

const Contact = () => {

    const isMobile = window.innerWidth < 768;

    return (
        <div className='page-container-root'>
            <div className='page-container'>
                <Row gutter={15} justify='center'>
                    <Col span={isMobile ? 24 : 12} style={{ display: 'flex', justifyContent: 'center' 
                }}>
                    <div className='contact-title-container'>
                        <h1>Chat With Our Team</h1>
                        <p>Our team is here to help you with any questions you may have. Fill out the email form and we will get back to you as soon as possible. 
                            You can also chat with us on our social media platforms.</p>
                        <div className='contact-call-container'>
                            <div className='contact-call'>
                                <PhoneOutlined />
                                <h2>Call us directly</h2>
                                <a href='tel:+1123-456-7890'>+1 123-456-7890</a>
                            </div>
                        </div>
                    </div>
                    </Col>
                    <Col span={isMobile ? 24 : 12}>
                        <div className='contact-form-container'>
                                <form className='contact-form'>
                                    <div className='contact-form-container-title'>
                                        <h2>Send Us An Email</h2>
                                    </div>
                                    <div className='contact-form-outer-group'>
                                        <div className='contact-form-group'>
                                            <label className='contact-form-label' htmlFor='firstname'>First Name *</label>
                                            <input className='contact-form-field' type='text' id='firstname' name='firstname' required />
                                        </div>
                                        <div className='contact-form-group'>
                                            <label className='contact-form-label' htmlFor='lastname'>Last Name *</label>
                                            <input className='contact-form-field' type='text' id='lastname' name='lastname' required />
                                        </div>
                                    </div>
                                    <div className='contact-form-outer-group'>
                                        <div className='contact-form-group'>
                                            <label className='contact-form-label' htmlFor='email'>Email *</label>
                                            <input className='contact-form-field' type='email' id='email' name='email' required />
                                        </div>
                                        <div className='contact-form-group'>
                                            <label className='contact-form-label' htmlFor='phone'>Phone Number *</label>
                                            <input className='contact-form-field' type='phone' id='phone' name='phone' required />
                                        </div>
                                    </div>
                                    <div className='contact-form-group'>
                                        <label className='contact-form-label' htmlFor='message'>Message</label>
                                        <textarea className='contact-form-field contact-form-field-message'
                                         id='message' name='message' required></textarea>
                                    </div>
                                    <button className='contact-form-button' type='submit'>Submit</button>
                                </form>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Contact;