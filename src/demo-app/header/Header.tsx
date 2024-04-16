import './Header.css';
import { useNavigate } from 'react-router-dom';

const DemoHeader = () => {

    const navigate = useNavigate();

    const nav = (path: string) => {
        if (window.location.pathname === `/${path}/`) {
            return;
        }
        navigate(`/${path}/`);
    }

    return (
        <header className='demo-header'>
            <div className='demo-header-container'>
                <div className='demo-header-container-left' onClick={() => nav('demo')}>
                    <img src='https://media.istockphoto.com/id/981368726/vector/restaurant-food-drinks-logo-fork-knife-background-vector-image.jpg?s=612x612&w=0&k=20&c=9M26CBkCyEBqUPs3Ls5QCjYLZrB9sxwrSFmnAmNCopI='
                    className='demo-app-logo' alt='logo' />
                </div>
                <div className='demo-header-center'>
                    <h1 className='demo-header-title'>Demo Shop</h1>
                </div>
                <div className='demo-header-container-right'>
                    <button className='demo-header-button' onClick={() => nav('demo/menu')}>ORDER NOW</button>
                </div>
            </div>
        </header>
    );
}

export default DemoHeader;