import { Table } from 'antd';
import React from 'react';
import '../Page.css';
import './GetStarted.css';

const FeaturesTable = () => {
    const columns = [
        {
            title: 'Feature',
            dataIndex: 'feature',
            key: 'feature',
        },
        {
            title: 'Standard',
            dataIndex: 'standard',
            key: 'standard',
        },
        {
            title: 'Premium',
            dataIndex: 'premium',
            key: 'premium',
        },
        {
            title: 'Deluxe',
            dataIndex: 'deluxe',
            key: 'deluxe',
        },
    ];

    const data = [
        {
            key: '1',
            feature: 'Website landing page',
            standard: '✓',
            premium: '✓',
            deluxe: '✓',
        },
        {
            key: '2',
            feature: 'Video shorts/reels',
            standard: '✓',
            premium: '✓',
            deluxe: '✓',
        },
        {
            key: '3',
            feature: 'Traditional advertising (flyers, posters)',
            standard: '✓',
            premium: '✓',
            deluxe: '✓',
        },
        {
            key: '4',
            feature: 'Social media management',
            standard: '✓',
            premium: '✓',
            deluxe: '✓',
        },
        {
            key: '5',
            feature: 'Comprehensive website with SEO',
            standard: '',
            premium: '✓',
            deluxe: '✓',
        },
        {
            key: '6',
            feature: 'Engaging commercials and videos',
            standard: '',
            premium: '✓',
            deluxe: '✓',
        },
        {
            key: '7',
            feature: 'AI integration',
            standard: '',
            premium: '✓',
            deluxe: '✓',
        },
        {
            key: '8',
            feature: 'Advanced AI integration',
            standard: '',
            premium: '',
            deluxe: '✓',
        },
        {
            key: '9',
            feature: 'Extended social media management',
            standard: '',
            premium: '',
            deluxe: '✓',
        },
        {
            key: '10',
            feature: 'Advanced analytics',
            standard: '',
            premium: '',
            deluxe: '✓',
        },
        {
            key: '11',
            feature: 'Custom marketing solutions',
            standard: '',
            premium: '',
            deluxe: '✓',
        }
    ];

    return (
        <div className='page-container-root' style={{ background: '#fff' }}>
            <div className='page-container'>
                <Table id='services'
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                />
            </div>
        </div>
    );
}

export default FeaturesTable;