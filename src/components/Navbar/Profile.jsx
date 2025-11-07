import { useState } from 'react';
import Ava from '../../assets/Avatar.png';
import ListMenuProfile from './ListMenuProfile';

function Profile() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='relative'>
            <button onClick={() => setIsOpen(!isOpen)}
                className="flex items-center focus:outline-none">
                <img
                    src={Ava}
                    alt="Profile Ava"
                    className='' />
            </button>

            {isOpen && (
                <ListMenuProfile />
            )}
        </div>
    )
}

export default Profile