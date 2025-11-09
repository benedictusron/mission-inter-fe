import { useState, useEffect } from 'react';
import Logo from '../../assets/Logo.png';
import Profile from '../Navbar/Profile';
import ListMenuProfile from './ListMenuProfile';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    return (
        <header className='bg-light-primary shadow-sm'>
            <div className='flex justify-between items-center container mx-auto max-w-[1200px] px-6 md:px-6   py-4 md:flex md:justify-between md:items-center' >
                    <div className="inline">
                        <img src={Logo} alt="Logo" className="rounded-[10px] object-coverh-[30px]" />
                    </div>
                <Profile isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </header >

    );


}

export default Navbar