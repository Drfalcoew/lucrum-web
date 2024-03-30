import React from 'react';
import './Sections.css';
import { Col, Row } from 'antd';
import CustomCard from '../../reusable-components/Card';
import { DesktopOutlined, SearchOutlined, RiseOutlined, OpenAIOutlined, CustomerServiceOutlined, DollarOutlined } from '@ant-design/icons';


const Services = () => {

    const services = [
        {
            title: 'Web Development',
            description: 'Our team of developers will create a website that will help you achieve your business goals.',
            icon: <DesktopOutlined />
        },
        {
            title: 'SEO',
            description: 'Our SEO experts will help you rank higher on search engines.',
            icon: <SearchOutlined />
        },
        {
            title: 'Increased Visibility',
            description: 'We will help you increase your online visibility.',
            icon:  <RiseOutlined />
        },
        {
            title: 'Artificial Intelligence',
            description: 'We will help you implement AI in your business.',
            icon: <OpenAIOutlined />
        },
        {
            title: 'Customer Service',
            description: 'Our team will help you provide excellent customer service.',
            icon: <CustomerServiceOutlined />
        },
        {
            title: 'Affordable Prices',
            description: 'Our services are packaged into one affordable price.',
            icon: <DollarOutlined />
        }
    ]


    return (
        <div className='services-root-container'>
            <div className='services-container'>
                <Row gutter={15}>
                    {services.map((service, index) => {
                        return (
                            <Col span={8} key={index}>
                                <CustomCard title={service.title} description={service.description} icon={service.icon} index={index} />
                            </Col>
                        )}
                    )}
                </Row>
            </div>
        </div>
    );
}

export default Services;