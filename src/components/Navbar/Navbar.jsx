import Logo from '../../assets/Logo.png'
import Profile from '../Navbar/Profile'

function Navbar() {
  return (
    <header>
        <nav className="p-5 bg-light-primary  border-b border-other-border md:flex md:items-center md:justify-between sm:px-[120px]">
            <div className="flex justify-between items-center">
                <div className="inline">
                    <img src={Logo} alt="Logo" className="rounded-[10px] object-cover w-48 h-[30px]"/>
                </div>

                <span className="text-3xl cursor-pointer md:hidden block mx-2">
                    <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 10.5V12.5H20V10.5H0ZM0 5.5V7.5H20V5.5H0ZM0 0.5V2.5H20V0.5H0Z" fill="#4A505C" />
                    </svg>
                </span>
            </div>

            <ul className="md:flex md:items-center md:justify-between
                       z-[-1] md:z-auto md:static absolute bg-light-primary w-full left-0  md:w-auto md:py-0
                       py-4 md:pl-0 pl-5 md:opacity-100 opacity-0 top-[400px]">
                <li className="mx-4 my-6 md:my-0 ">
                    <a href="">Kategori</a>
                </li>
                <Profile/>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar