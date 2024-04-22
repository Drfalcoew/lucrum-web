import './Header.css';
import { useNavigate } from 'react-router-dom';

const DemoBarberHeader = () => {

    const navigate = useNavigate();
    const headerTitle = 'Barber Shop';

    const nav = (path: string) => {
        if (window.location.pathname === `/${path}/`) {
            return;
        }
        navigate(`/${path}/`);
    }

    return (
        <header className='demo-barber-header'>
            <div className='demo-barber-header-container'>
                <div className='demo-barber-header-container-left' onClick={() => nav('demo/barber')}>
                    <img src='https://media4.giphy.com/media/BA65A7kp4HIFmudLhc/200w.gif?cid=6c09b952gz2wocsnoyemgwaacyhwxndh4u8v5aeaumsfqs4n&ep=v1_gifs_search&rid=200w.gif&ct=g'
                    className='demo-barber-app-logo' alt='logo' />
                </div>
                <div className='demo-barber-header-center'>
                    <h1 className='demo-barber-header-title'>{headerTitle}</h1>
                </div>
                <div className='demo-barber-header-container-right'>
                    <button className='demo-barber-header-button' onClick={() => nav('demo/menu')}>BOOK NOW</button>
                </div>
            </div>
        </header>
    );
}

export default DemoBarberHeader;