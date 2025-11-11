import Logo from '../assets/Logo.png';
import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
function Footer() {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section)
    };

    return (
        <footer className="bg-light-primary border-t border-other-border">
            <div className=" px-5 max-w-full  py-6  md:max-w-[1200px] md:mx-auto">
                <div className="sm:flex sm:justify-between">
                    <div className="mb-6 md:mb-0">
                        <div className="inline">
                            <img src={Logo} alt="" className="rounded-[10px] object-cover w-48 h-[30px]" />
                        </div>
                        <div className="grid row-span-3 pt-4 gap-3 sm:max-w-xs ">
                            <span className="text-lg font-bold text-black-primary ">Gali Potensi Anda Melalui Pembelajaran Video
                                di hariesok.id!</span>
                            <span className="text-base text-black-primary ">Jl. Usman Effendi No. 50 Lowokwaru, Malang</span>
                            <span className="text-base text-black-primary">+62-877-7123-1234</span>
                        </div>
                    </div>

                    <div className="hidden m-0 my-5 md:flex md:flex-row md:items-start md:justify-start gap-10">
                        <div className="flex justify-between sm:flex-col">
                            <h6 className="mb-[15px] text-black-primary text-base font-bold">Kategori</h6>
                            <div className="sm:sr-only">
                                <button type="button">
                                    <img src="/images/KeyboardArrowRight.png" alt="" className="" />
                                </button>
                            </div>
                            <ul className="sr-only sm:not-sr-only sm:space-y-3">
                                <li className="">
                                    <a href="" className="text-black-secondary hover:text-black-primary text-base">Digital & Teknologi</a>
                                </li>
                                <li className="">
                                    <a href="" className="text-black-secondary hover:text-black-primary text-base">Pemasaran</a>
                                </li>
                                <li className="">
                                    <a href="" className="text-black-secondary hover:text-black-primary text-base">Manajemen Bisnis</a>
                                </li>
                                <li className="">
                                    <a href="" className="text-black-secondary hover:text-black-primary text-base">Pengembangan Diri</a>
                                </li>
                                <li className="">
                                    <a href="" className="text-black-secondary hover:text-black-primary text-base">Desain</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex justify-between sm:flex-col">
                            <h6 className="mb-[15px] text-black-primary text-base font-bold">Perusahaan</h6>
                            <div className="sm:sr-only">
                                <button type="button">
                                    <img src="/images/KeyboardArrowRight.png" alt="" className="" />
                                </button>
                            </div>
                            <ul className="sr-only sm:not-sr-only sm:space-y-3">
                                <li className=" ">
                                    <a href="" className="text-black-secondary hover:text-black-primary text-base">Tentang Kami</a>
                                </li>
                                <li className="">
                                    <a href="" className="text-black-secondary hover:text-black-primary text-base">FAQ</a>
                                </li>
                                <li className="">
                                    <a href="" className="text-black-secondary hover:text-black-primary text-base">Kebijakan Privasi</a>
                                </li>
                                <li className="">
                                    <a href="" className="text-black-secondary hover:text-black-primary text-base">Ketentuan Layanan</a>
                                </li>
                                <li className="">
                                    <a href="" className="text-black-secondary hover:text-black-primary text-base">Bantuan</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex justify-between sm:flex-col sm:justify-start ">
                            <h6 className="mb-[15px] text-black-primary text-base font-bold">Komunitas</h6>
                            <div className="sm:sr-only">
                                <button type="button">
                                    <img src="/images/KeyboardArrowRight.png" alt="" className="" />
                                </button>
                            </div>
                            <ul className="sr-only sm:not-sr-only sm:space-y-3">
                                <li className="">
                                    <a href="" className="text-black-secondary hover:text-black-primary text-base">Tips Sukses</a>
                                </li>
                                <li className="">
                                    <a href="" className="text-black-secondary hover:text-black-primary text-base">Blog</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className='md:hidden px space-y-2'>
                    {["Kategori", "Perusahaan", "Komunitas"].map((section) => (
                        <div key={section} className="overflow-hidden">
                            <button
                                onClick={() => toggleSection(section)}
                                className='w-full flex justify-between items-center py-2 text-base/snug font-bold  text-black-primary'
                            >
                                {section}
                                <span
                                    className={`transform transition-transform duration-300 ${openSection === section ?
                                    'rotate-90' : 'rotate-0'}`}
                                >
                                    <IoIosArrowForward />
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden ${openSection === section ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'} transition-all duration-300 ease-in-out `}
                            >
                                <ul
                                    className='pb-3 text-base text-black-secondary  space-y-2'
                                >
                                    {section === 'Kategori' && (
                                        <>
                                            <li>
                                                 <a href="" className='hover:text-black-primary'>Digital & Teknologi</a>
                                            </li>
                                            <li>
                                                 <a href="" className='hover:text-black-primary'>Pemasaran</a>
                                            </li>
                                            <li>
                                                 <a href=""  className='hover:text-black-primary'>Manajemen Bisnis</a>
                                            </li>
                                            <li>
                                                 <a href="" className='hover:text-black-primary'>Pengembangan Diri</a>
                                            </li>
                                            <li>
                                                 <a href="" className='hover:text-black-primary'>Desain</a>
                                            </li>
                                        </>
                                    )}
                                    {section === 'Perusahaan' && (
                                        <>
                                            <li>
                                                 <a href="" className='hover:text-black-primary'>Tentang Kami</a>
                                            </li>
                                            <li>
                                                 <a href="" className='hover:text-black-primary'>FAQ</a>
                                            </li>
                                            <li>
                                                 <a href="" className='hover:text-black-primary'>Kebijakan Privasi</a>
                                            </li>
                                            <li>
                                                 <a href="" className='hover:text-black-primary'>Ketentuan Layanan</a>
                                            </li>
                                            <li>
                                                 <a href="" className='hover:text-black-primary'>Bantuan</a>
                                            </li>
                                        </>
                                    )}
                                    {section === 'Komunitas' && (
                                        <>
                                            <li>
                                                 <a href="" className='hover:text-black-primary'>Tips Sukses</a>
                                            </li>
                                            <li>
                                                 <a href="" className='hover:text-black-primary'>Blog</a>
                                            </li>
                                        </>
                                    )}

                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <hr className="grow border-t-2 border-other-border my-4 sm:mt-8 w-full">
                </hr>

                <div className="md:flex md:justify-between md:flex-row-reverse pb-5 sm:pb-[60px]">
                    <div className="flex items-center space-x-5 sm:flex">
                        <a href="#" className="text-black-secondary hover:text-gray-900 hover:bg-background-body transition-colors border-2 border-black-secondary hover:border-black-primary rounded-full px-2 py-2">
                            <FaLinkedinIn /></a>
                        <a href="#" className="text-black-secondary hover:text-gray-900 hover:bg-background-body transition-colors border-2 border-black-secondary hover:border-black-primary rounded-full px-2 py-2">
                            <FaFacebookF /></a>
                        <a href="#" className="text-black-secondary hover:text-gray-900 hover:bg-background-body transition-colors border-2 border-black-secondary hover:border-black-primary rounded-full px-2 py-2">
                            <FaInstagram /></a>
                        <a href="#" className="text-black-secondary hover:text-gray-900 hover:bg-background-body transition-colors border-2 border-black-secondary hover:border-black-primary rounded-full px-2 py-2">
                            <FaTwitter /></a>
                    </div>

                    <div className="pt-3 md:pt-0 md:flex md:items-center">
                        <span className="text-base text-black-secondary tracking-[0.2px]">@2023 Gerobak Sayur All Rights
                            Reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

