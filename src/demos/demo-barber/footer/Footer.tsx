import React from 'react';
import { Row, Col } from 'antd';
import './Footer.css';

const DemoBarberFooter = () => {
    return (
        <footer className="demo-barber-footer" role="contentinfo">
            <div className="grid-container">
                <div className="grid-x ">
                    <div className="cell medium-8 small-order-2 medium-order-1">
                        <div className="grid-x">
                            <div className="demo-barber-footer-learn-more">
                                <h4><i>Join Barber Rewards</i></h4>
                                <p>Earn points with every visit, receive a special birthday treat, and enjoy exclusive offers throughout the year. Plus, unlock app features to schedule appointments, pay, and save your favorite styles.</p>
                                <a href="/rewards/" className="learn-more" aria-label="learn more about barber rewards">Learn More</a>
                                <div className="demo-barber-footer-learn-more-app">
                                    <a className="store-anchor app-ios" href="https://example.com" rel="noopener noreferrer" target="_blank" aria-label="appstore link">
                                        <img src="https://www.elpolloloco.com/content/img/download-button-app-store.webp" alt="app store badge" />
                                    </a>
                                    <a className="store-anchor app-google" href="https://example.com" rel="noopener noreferrer" target="_blank" aria-label="google play link">
                                        <img src="https://www.elpolloloco.com/content/img/download-button-google.webp" alt="google play badge" />
                                    </a>
                                </div>
                            </div>
                            <div className="footer-nav-links-one">
                                <Row gutter={10} className='footer-nav-links-row'>
                                    <Col span={12}>
                                        <ul>
                                            <li>
                                                <a href="/" aria-label="Services page link">Services</a>
                                            </li>
                                            <li>
                                                <a href="/" aria-label="Gallery page link">Gallery</a>
                                            </li>
                                            <li>
                                                <a href="/" aria-label="Products page link">Products</a>
                                            </li>
                                            <li>
                                                <a href="/" aria-label="Appointments page link">Appointments</a>
                                            </li>
                                            <li>
                                                <a href="/" aria-label="Contact page link">Contact</a>
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col span={12}>
                                        <ul>
                                            <li>
                                                <a href="/" aria-label="About page link">About</a>
                                            </li>
                                            <li>
                                                <a href="/" aria-label="Team page link">Team</a>
                                            </li>
                                            <li>
                                                <a href="/" aria-label="Testimonials page link">Testimonials</a>
                                            </li>
                                            <li>
                                                <a href="/" aria-label="FAQs page link">FAQs</a>
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid-x bottom-footer">
                    <div className="social medium-3 small-12 small-order-1 medium-order-1 text-left">
                        <a href="/" rel="noopener noreferrer" target="_blank" className="icon-facebook" aria-label="facebook link"><i className="fa fa-facebook"></i></a>
                        <a href="/" rel="noopener noreferrer" target="_blank" className="icon-twiter" aria-label="twitter link"><i className="fa fa-twitter"></i></a>
                        <a href="/" rel="noopener noreferrer" target="_blank" className="icon-instagram" aria-label="instagram link"><i className="fa fa-instagram"></i></a>
                        <a href="/" rel="noopener noreferrer" target="_blank" className="icon-tiktok" aria-label="tiktok link"><i className=""></i></a>
                    </div>
                    <div className="legal medium-9 small-12 small-order-2 medium-order-2 text-right">
                        <ul className="footer-minor-links">
                            <li>
                                <a href="/" aria-label="Privacy Policy link">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/" aria-label="Terms of Service link">Terms of Service</a>
                            </li>
                            <li>
                                <a href="/" aria-label="Refund Policy link">Refund Policy</a>
                            </li>
                            <li>
                                <a href="/" aria-label="Accessibility link">Accessibility</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default DemoBarberFooter;
