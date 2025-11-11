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
  }, [setIsOpen]);

  return (
    <div ref={dropdownRef} className='relative'>
      <button onClick={() => setIsOpen(!isOpen)}
        className="flex items-center focus:outline-none">

        <span className='text-3xl md:hidden  mx-2'>
          <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10.5V12.5H20V10.5H0ZM0 5.5V7.5H20V5.5H0ZM0 0.5V2.5H20V0.5H0Z" fill="#4A505C" />
          </svg>
        </span>
      </button>

      <div className='hidden md:block'>
        <div className='flex justify-between items-center gap-9'>
          <nav>
            <a href="" className="text-base text-black-secondary">Kategori</a>
          </nav>
          <img
            src={Ava}
            alt="Profile Ava"
            className='' onClick={() => setIsOpen(!isOpen)} />
        </div>
      </div>

      {isOpen && (
        <ListMenuProfile />
      )}
    </div>
  )
}

export default Profile