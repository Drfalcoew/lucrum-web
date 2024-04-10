import { Row, Col } from "antd";


const Contact = () => {

    return (
        <div className='contact-root-container'>
            <div className='contact-container'>
                <Row gutter={15} className="contact-row">
                    <Col span={12}>
                        <div className='contact-info-container'>
                            <h1 className='contact-title'>FOLLOW US</h1>
                            <a href="https://www.facebook.com/profile.php?id=61558051480602" className='follow-info'>Facebook</a>
                            <a href="https://www.instagram.com/lucrumweb/" className='follow-info'>Instagram</a>
                            <a href="https://twitter.com/LucrumWeb" className='follow-info'>Twitter</a>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className='contact-info-container'>
                            <h1 className='contact-title'>CONTACT</h1>
                            <p className='contact-info-subtitle'>California</p>
                            <p className='contact-info'>Beaumont, 92223</p>
                            <p className='contact-info'>drew@lucrumweb.com</p>
                            <p className='contact-info'>909-358-5018</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Contact;