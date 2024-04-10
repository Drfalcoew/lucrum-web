import { Col, Row } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';
import { EmailRecipient, SchedulePropsData } from '../../../Types';
import { notification } from 'antd';
import LoadingModal from '../../../reusable-components/LoadingModal';



interface ScheduleProps {
    onAppointmentScheduled: (data: SchedulePropsData) => void;
  }

const Contact: React.FC<ScheduleProps> = ({ onAppointmentScheduled }) => {

    const isMobile = window.innerWidth < 768;
    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate();

    const showLoadingModal = () => {
        setLoading(true);
    };

    const hideLoadingModal = () => {
        setLoading(false);
    };

    /* onFinish function to send data to backend */
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const fullName = formData.get('firstname') + ' ' + formData.get('lastname') as string;
        const email = formData.get('email') as string;
        const phoneNumber = formData.get('phone') as string;
        const comments = formData.get('message') as string;
        const businessAddress = formData.get('address') as string;


        let orderNumber = null;
        
        showLoadingModal();

        // Send email to customer
        const emailProps : EmailRecipient = {
        recipientEmail: email,
        recipientName: fullName,
        phoneNumber: phoneNumber,
        address: businessAddress,
        comments: comments,
        };

        // Sending email with default subject and message
        try {


        const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8080/api/email';

        const response = await fetch(`${apiUrl}`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailProps),
        });

        // Check if the response status is OK (status code 2xx)
        if (response.ok) {
            const result = await response.json();
            if (result.entity && result.entity.orderNumber) {
            orderNumber = result.entity.orderNumber;
            } else {
            console.error('Error sending email');
            notification.error({
                message: 'Error',
                description: `Failed to send email: ${result.message}`,
            });
            return;
            }
        } else {
            // If the response status is not OK, handle the error
            console.error('Error:', response.status, response.statusText);
            // Show an error notification
            notification.error({
            message: 'Error',
            description: `Failed to send email: ${response.statusText}`,
            })
        }
        } catch (error) {
        console.error('Fetch error:', error);
        // Show an error notification
        notification.error({
            message: 'Fetch Error',
            description: 'Failed to fetch data. Please try again later.',
        });
        return;
        } finally {
        hideLoadingModal();
        }
        
    
        if (orderNumber) { // This navigates to the success page
            onAppointmentScheduled({
                fullName: fullName,
                email: email,
                orderNumber: orderNumber,
            });

            navigate('/success');
        }
    }




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
                                <a href='tel:+1909-358-5018'>+1 909-358-5018</a>
                            </div>
                        </div>
                    </div>
                    </Col>
                    <Col span={isMobile ? 24 : 12}>
                        <div className='contact-form-container'>
                                <form className='contact-form' method='post' onSubmit={handleSubmit}>
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
                                        <label className='contact-form-label' htmlFor='address'>Business Address *</label>
                                        <input className='contact-form-field contact-form-address' type='text' id='address' name='address' />
                                    </div>
                                    <div className='contact-form-group'>
                                        <label className='contact-form-label' htmlFor='message'>Message</label>
                                        <textarea className='contact-form-field contact-form-field-message'
                                         id='message' name='message'></textarea>
                                    </div>

                                    <button className='contact-form-button' type='submit'>Submit</button>
                                </form>
                        </div>
                    </Col>
                </Row>
            </div>
            <LoadingModal visible={loading} closeModal={hideLoadingModal} />
        </div>
    );
}

export default Contact;