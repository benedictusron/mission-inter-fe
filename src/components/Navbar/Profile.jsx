import { useState, useRef, useEffect } from 'react';
import Ava from '../../assets/Avatar.png';
import ListMenuProfile from './ListMenuProfile';

function Profile() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
    return (
        <div ref={dropdownRef} className='relative'>
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