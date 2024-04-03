import React from 'react';
import '../Page.css';
import { Link } from 'react-router-dom';

const ContactUsSection = () => {
    return (
        <div className='page-container-root' style={{minHeight: '0', background: '#fff', color: 'black'}}>
            <div className='page-container'>
                <div className='contact-us-styling'>
                    <h2>Contact Us</h2>
                    <p>
                        For any questions or inquiries, please contact us <Link to='/contact'>here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ContactUsSection;