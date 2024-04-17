import React from 'react';
import DemoMenuList from './MenuList';
import DemoMenuTableView from './MenuTableView';
import './Menu.css';

const DemoMenu = () => {

    const categories = [
        {
            id: 1,
            name: 'Digital Exclusives',
            image: 'https://olo-images-live.imgix.net/5e/5e2a1c09fca0464d80d23ed45c8203d0.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1800&h=1527&fit=crop&s=8b8cb3ed39647335b9fec7b5508b401d'
        },
        {
            id: 2,
            name: 'Double Tostadas',
            image: 'https://olo-images-live.imgix.net/dc/dc75b8ef03474a1e862a18551d9bc5d9.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1800&h=1527&fit=crop&s=0363437380d7cec9e19c97d2bc5ffd5d'
        },
        {
            id: 3,
            name: 'Baja Shrimp Tacos',
            image: 'https://olo-images-live.imgix.net/b1/b1180dad1af947c4be42448f657e5f44.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1800&h=1527&fit=crop&s=360b7d96d1ab1290c364c5e42add83f5'
        },
        {
            id: 4,
            name: 'Family Chicken Meals',
            image: 'https://olo-images-live.imgix.net/dc/dc75b8ef03474a1e862a18551d9bc5d9.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1800&h=1527&fit=crop&s=0363437380d7cec9e19c97d2bc5ffd5d'
        },
        {
            id: 5,
            name: 'Taco Salad',
            image: 'https://olo-images-live.imgix.net/5e/5e2a1c09fca0464d80d23ed45c8203d0.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1800&h=1527&fit=crop&s=8b8cb3ed39647335b9fec7b5508b401d'
        },
        {
            id: 6,
            name: 'Burritos',
            image: 'https://olo-images-live.imgix.net/b1/b1180dad1af947c4be42448f657e5f44.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1800&h=1527&fit=crop&s=360b7d96d1ab1290c364c5e42add83f5'
        },
        {
            id: 7,
            name: 'Quesadillas',
            image: 'https://olo-images-live.imgix.net/5e/5e2a1c09fca0464d80d23ed45c8203d0.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1800&h=1527&fit=crop&s=8b8cb3ed39647335b9fec7b5508b401d'
        },
        {
            id: 8,
            name: 'Nachos',
            image: 'https://olo-images-live.imgix.net/dc/dc75b8ef03474a1e862a18551d9bc5d9.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1800&h=1527&fit=crop&s=0363437380d7cec9e19c97d2bc5ffd5d'
        },
        {
            id: 9,
            name: 'Bowls',
            image: 'https://olo-images-live.imgix.net/5e/5e2a1c09fca0464d80d23ed45c8203d0.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1800&h=1527&fit=crop&s=8b8cb3ed39647335b9fec7b5508b401d'
        },
        {
            id: 10,
            name: 'Sweets',
            image: 'https://olo-images-live.imgix.net/dc/dc75b8ef03474a1e862a18551d9bc5d9.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1800&h=1527&fit=crop&s=0363437380d7cec9e19c97d2bc5ffd5d'
        }
    ];

    return (
        <div className='demo-menu-container-root'>
            <div className='demo-menu-container'>
                <DemoMenuList categories={categories} />
                <DemoMenuTableView categories={categories} />
            </div>
        </div>
  )
};

export default DemoMenu;