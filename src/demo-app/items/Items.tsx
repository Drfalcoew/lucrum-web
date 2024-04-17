import React, { useState } from 'react';
import './Items.css';
import { Button, Modal } from 'antd';

export interface ItemProps {
    image: string;
    title: string;
    description: string;
    price?: number;
    category?: string;
}

const Item: React.FC<ItemProps> = ({ image, title, description, price }) => {
    const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(!open);
    };

    return (
        <div className='demo-item-container' onClick={showModal}>
            <ItemDetails image={image} title={title} description={description} price={price} setOpen={setOpen} open={open}/>
            <img className='demo-item-img' src={'https://www.elpolloloco.com/content/img/menu/M3-DblChickenTostada-761x561.webp'}
             alt={title} />
            <div className='demo-item-name-container'>
                <div className='demo-item-name'>{title}</div>
            </div>
        </div>
    );
};

const ItemDetails: React.FC<ItemProps & { open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>> }> = ({
    image,
    title,
    description,
    price,
    open,
    setOpen,
}) => {
    const hideModal = () => {
        setOpen(false);
    };

    return (
        <Modal
            title={title}
            open={open}
            onCancel={hideModal}
            footer={[
                <Button key='back' onClick={hideModal}>
                    Close
                </Button>,
            ]}
        >
            <div className='demo-item-details-description'>{description}</div>
            <div className='demo-item-details-price'>Price: ${price}</div>
        </Modal>
    );
};

const Items: React.FC<{ items: ItemProps[] }> = ({ items }) => {
    return (
        <div className='items-root-container'>
            <img className='items-top-ribbon' src='https://www.elpolloloco.com/content/img/hero/Tiles_2.png' alt='' />
            <h1 className='items-category-title'>{items[0]?.category}</h1>
            <div className='items-container'>
                {items.map((item) => (
                    <Item
                        key={item.title}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default Items;
