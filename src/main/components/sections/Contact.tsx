import { Row, Col } from "antd";


const Contact = () => {

    const isMobile = window.innerWidth < 768;

    return (
        <div className='contact-root-container'>
            <div className='contact-container'>
                <Row gutter={15} className="contact-row">
                    <Col span={12}>
                        <div className='contact-info-container'>
                            <h1 className='contact-title'>FOLLOW US</h1>
                            <a href="https://www.facebook.com/profile.php?id=61558051480602" target="_blank" rel="noopener noreferrer"
                            className='follow-info'>Facebook</a>
                            <a href="https://www.instagram.com/lucrumweb/" target="_blank" rel="noopener noreferrer"
                            className='follow-info'>Instagram</a>
                            <a href="https://twitter.com/LucrumWeb" target="_blank" rel="noopener noreferrer"
                            className='follow-info'>Twitter</a>
                        </div>
                    </Col>
                    <Col span={12}>
                    {isMobile ? (
                        <>
                        <Col span={24}>
                            <div className='contact-info-container'>
                                <h1 className='contact-title'>CONTACT</h1>
                                <p className='contact-info-subtitle'>Mario Renteria</p>
                                <a href="mailto:regal@lucrumweb.com" className='contact-info'>
                                    <p>regal@lucrumweb.com</p>
                                </a>
                                <p className='contact-info'>951-236-1315</p>
                            </div>
                        </Col>    
                        <Col span={24}>
                            <div className='contact-info-container'>
                                <p className='contact-info-subtitle'>Drew Foster</p>
                                <a href="mailto:regal@lucrumweb.com" className='contact-info'>
                                    <p>drew@lucrumweb.com</p>
                                </a>
                                <p className='contact-info'>909-358-5018</p>
                            </div>
                        </Col>
                        </>
                       ) : (
                        <div className='contact-info-container'>
                            <h1 className='contact-title'>CONTACT</h1>
                            <div className='contact-info-container-row'>
                                <Col span={12}>
                                    <div>
                                        <p className='contact-info-subtitle'>Mario Renteria</p>
                                        <a href="mailto:regal@lucrumweb.com" className='contact-info'>
                                            <p>regal@lucrumweb.com</p>
                                        </a>
                                        <p className='contact-info'>+1 951-236-1315</p>
                                    </div>
                                </Col>    
                                <Col span={12}>
                                    <div>
                                        <p className='contact-info-subtitle'>Drew Foster</p>
                                        <a href="mailto:regal@lucrumweb.com" className='contact-info'>
                                            <p>drew@lucrumweb.com</p>
                                        </a>
                                        <p className='contact-info'>+1 909-358-5018</p>
                                    </div>
                                </Col>
                            </div>
                        </div>
                       )}

                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Contact;