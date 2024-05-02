import React from 'react';
import { Avatar, Divider } from 'antd';
import './Profile.css';
import { useParams } from 'react-router-dom';
import { QRCode } from "antd";
import { InstagramOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';

type profileProps = {
    id: string;
    name: string;
    title: string;
    subTitle: string;
    avatar: string;
    email: string;
    phone: string;
    location: string;
}

const Profile = () => {

    // get id from url
    const { id } = useParams();

    const profiles: profileProps[] = [
        {
            id: 'mario',
            name: 'Mario Renteria',
            title: 'Marketing Manager, Video Producer',
            subTitle: 'Welcome to my digital business card. Feel free to reach out to me below.',
            avatar: '/headshots/mario.jpeg',
            email: 'regal@lucrumweb.com',
            phone: '951-236-1315',
            location: 'Beaumont, CA'
        },
        {
            id: 'drew',
            name: 'Drew Foster',
            title: 'Marketing Manager, Web Developer',
            subTitle: 'Welcome to my digital business card. Tap below to connect with me.',
            avatar: '/headshots/drew.jpg',
            email: 'drew@lucrumweb.com',
            phone: '909-358-5018',
            location: 'Beaumont, CA'
        }
    ];

    const profile = id ? profiles.find(profile => (profile.name.toLowerCase()).includes(id)) : profiles[0];


    return (
        <div className='profile-root-container'>
            <div className='profile-container'>
                <div className='profile-info-container'>
                    <div className='profile-banner' />
                    <Avatar className='profile-avatar'
                    size={{ xs: 150, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                    src={profile?.avatar} />
                    <div className='profile-title'>{profile?.name}</div>
                    <div className='profile-subtitle'>{profile?.title}</div>
                    <div className='profile-subtitle profile-location'>{profile?.location}</div>
                    <p className='profile-info'>Welcome to my digital business card.<br /> Tap below to connect with me.</p>
                    
                    <div className='profile-contact-container'>
                        <a href={`mailto:${profile?.email}`} className='profile-contact profile-email'>
                            <MailOutlined className='profile-contact-icon' />
                        </a>
                        <a href='tel:+1951-236-1315' className='profile-contact profile-phone'>
                            <PhoneOutlined className='profile-contact-icon' />
                        </a>
                        <a href='https://www.instagram.com/lucrumweb/' target="_blank" rel="noopener noreferrer" 
                        className='profile-contact profile-ig'>
                            <InstagramOutlined className='profile-contact-icon' />
                        </a>
                    </div>
                    <div className='profile-share-container'>
                        <Divider> 
                            <h3>Share my profile</h3>
                        </Divider>
                    </div>
                    <QRCode className='profile-qr-code' value={`https://lucrumweb.com/profile/${profile?.name.toLowerCase()}`} />
                </div>
            </div>
        </div>
    );
}

export default Profile;