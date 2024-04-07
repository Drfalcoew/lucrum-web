import React from 'react';
import './Sections.css';
import { Col, Row } from 'antd';
import CustomCard from '../../../reusable-components/Card';
import { DesktopOutlined, RiseOutlined, OpenAIOutlined, CustomerServiceOutlined, DollarOutlined, VideoCameraOutlined } from '@ant-design/icons';


const Services = () => {

    const isMobile = window.innerWidth < 520;
    const isTablet = window.innerWidth >= 520 && window.innerWidth < 820;

    const services = [
        {
            title: 'Web Development',
            description: 'Our skilled team specializes in crafting dynamic websites tailored to your business objectives.',
            icon: <DesktopOutlined />
        },
        {
            title: 'Artificial Intelligence Integration',
            description: 'Harness the power of AI with our expert guidance to optimize your business operations.',
            icon: <OpenAIOutlined />
        },
        {
            title: 'Video Production & Marketing',
            description: 'Captivate your audience with captivating video content and impactful marketing strategies.',
            icon: <VideoCameraOutlined />
        },
        {
            title: 'Enhanced Online Presence',
            description: 'Boost your visibility across digital platforms and stand out from the competition.',
            icon:  <RiseOutlined />
        },
        {
            title: 'Exceptional Customer Support',
            description: 'Deliver top-notch customer experiences with our dedicated support solutions.',
            icon: <CustomerServiceOutlined />
        },
        {
            title: 'Budget-Friendly Solutions',
            description: 'Unlock a comprehensive suite of services at competitive, affordable rates.',
            icon: <DollarOutlined />
        }
    ];

    return (
        <div className='services-root-container'>
            <div className='services-container'>
                <Row gutter={15}>
                    {services.map((service, index) => {
                        return (
                            <Col span={isMobile ? 24 : isTablet ? 12 : 8} key={index}>
                                <CustomCard title={service.title} description={service.description}
                                 icon={service.icon} index={index} link={'/getstarted#services'}/>
                            </Col>
                        )}
                    )}
                </Row>
            </div>
        </div>
    );
}

export default Services;