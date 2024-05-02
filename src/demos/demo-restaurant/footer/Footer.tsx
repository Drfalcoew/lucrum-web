import React from 'react';
import { Row, Col } from 'antd';
import './Footer.css';

const DemoFooter = () => {
    return (
        <footer className="demo-footer" role="contentinfo">
            <div className="grid-container">
                <div className="grid-x ">
                    <div className="cell medium-8 small-order-2 medium-order-1">
                        <div className="grid-x">
                            <div className="demo-footer-learn-more">
                                <h4><i>Join Our Rewards</i></h4>
                                <p>Earn points with every order, receive a birthday reward and other valuable offers throughout the year. Plus, special app features to order ahead, pay, and save your favorites.</p>
                                <a href="/rewards/" className="learn-more" aria-label="learn more about loco rewards">Learn More</a>
                                <div className="demo-footer-learn-more-app">
                                    <a className="store-anchor app-ios" href="https://itunes.apple.com/us/app/el-pollo-loco/id1138437085?mt=8" rel="noopener noreferrer" target="_blank" aria-label="appstore link">
                                        <img src="https://www.elpolloloco.com/content/img/download-button-app-store.webp" alt="app store badge" />
                                    </a>
                                    <a className="store-anchor app-google" href="https://play.google.com/store/apps/details?id=com.olo.elpolloloco&amp;hl=en" rel="noopener noreferrer" target="_blank" aria-label="google play link">
                                        <img src="https://www.elpolloloco.com/content/img/download-button-google.webp" alt="google play badge" />
                                    </a>
                                </div>
                            </div>
                            <div className="footer-nav-links-one">
                                <Row gutter={10} className='footer-nav-links-row'>
                                    <Col span={12}>
                                        <ul>
                                            <li>
                                                <a href="/demo/restaurant/menu/" aria-label="Menu page link">Menu</a>
                                            </li>
                                            <li>
                                                <a href="/demo/restaurant/menu/" aria-label="Catering page link">Catering</a>
                                            </li>
                                            <li>
                                                <a href="/demo/restaurant/menu/" aria-label="Gift Cards page link">Gift Cards</a>
                                            </li>
                                            <li>
                                                <a href="/demo/restaurant/menu/" aria-label="Fundraisers page link">Fundraisers</a>
                                            </li>
                                            <li>
                                                <a href="/demo/restaurant/menu/" aria-label="Gift Cards page link">Careers</a>
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col span={12}>
                                        <ul>
                                            <li>
                                                <a href="/demo/restaurant/menu/" aria-label="Menu page link">Franchising</a>
                                            </li>
                                            <li>
                                                <a href="/demo/restaurant/menu/" aria-label="Catering page link">Investors</a>
                                            </li>
                                            <li>
                                                <a href="/demo/restaurant/menu/" aria-label="Gift Cards page link">Press Releases</a>
                                            </li>
                                            <li>
                                                <a href="/demo/restaurant/menu/" aria-label="Fundraisers page link">Contact Us</a>
                                            </li>
                                            <li>
                                                <a href="/demo/restaurant/menu/" aria-label="Gift Cards page link">Feedback</a>
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
                        <a href="/demo/restaurant/menu/" rel="noopener noreferrer" target="_blank" className="icon-facebook" aria-label="facebook link"><i className="fa fa-facebook"></i></a>
                        <a href="/demo/restaurant/menu/" rel="noopener noreferrer" target="_blank" className="icon-twiter" aria-label="twitter link"><i className="fa fa-twitter"></i></a>
                        <a href="/demo/restaurant/menu/" rel="noopener noreferrer" target="_blank" className="icon-instagram" aria-label="instagram link"><i className="fa fa-instagram"></i></a>
                        <a href="/demo/restaurant/menu/" rel="noopener noreferrer" target="_blank" className="icon-tiktok" aria-label="tiktok link"><i className=""></i></a>
                    </div>
                    <div className="legal medium-9 small-12 small-order-2 medium-order-2 text-right">
                        <ul className="footer-minor-links">
                            <li>
                                <a href="/demo/restaurant/menu/" aria-label="Nutrition Guide PDF link">Nutrition Guide</a>
                            </li>
                            <li>
                                <a href="/demo/restaurant/menu/" aria-label="Terms of Use link">Terms of Use</a>
                            </li>
                            <li>
                                <a href="/demo/restaurant/menu/" aria-label="Privacy Policy link">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/demo/restaurant/menu/" aria-label="California Privacy Notice link">California Privacy Notice</a>
                            </li>
                            <li>
                                <a href="/demo/restaurant/menu/" aria-label="Coupon Policy link">Coupon Policy</a>
                            </li>
                            <li>
                                <a href="/demo/restaurant/menu/" aria-label="Site Map link">Site Map</a>
                            </li>
                            <li className="footer-copyright-epl_disabled">
                                © La Casita. All Rights Reserved
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};


export default DemoFooter;