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
            premium: '✓',
            deluxe: '✓',
        },
        {
            key: '2',
            feature: 'Video shorts/reels',
            premium: '✓',
            deluxe: '✓',
        },
        {
            key: '3',
            feature: 'Traditional advertising (flyers, posters)',
            premium: '✓',
            deluxe: '✓',
        },
        {
            key: '4',
            feature: 'Social media management',
            premium: '✓',
            deluxe: '✓',
        },
        {
            key: '5',
            feature: 'Comprehensive website with SEO',
            premium: '✓',
            deluxe: '✓',
        },
        {
            key: '6',
            feature: 'Engaging commercials and videos',
            premium: '✓',
            deluxe: '✓',
        },
        {
            key: '7',
            feature: 'AI integration',
            premium: '',
            deluxe: '✓',
        },
        {
            key: '8',
            feature: 'Extended social media management',
            premium: '',
            deluxe: '✓',
        },
        {
            key: '9',
            feature: 'Stripe integration for payments',
            premium: '',
            deluxe: '✓',
        },
        {
            key: '10',
            feature: 'Advanced analytics',
            premium: '',
            deluxe: '✓',
        },
        {
            key: '11',
            feature: 'Custom marketing solutions',
            premium: '',
            deluxe: '✓',
        }
    ];

    return (
        <div className='page-container-root' style={{ background: '#fff' }}>
            <div className='page-container features-table'>
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