import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaRegEye , FaRegEyeSlash } from "react-icons/fa";

function Forms() {
  return (
        <div className=" items-center content-center ">
            <div className="mb-4">
                <label className="text-black-secondary pb-1">E-Mail <span className="text-red-700">*</span></label>
                <input type="text" className="w-full border border-other-border py-3 rounded-[10px] ps-4"/>
            </div>

            <div className="mb-4">
                <label className="text-black-secondary">Kata Sandi <span className="text-red-700">*</span></label>
                <div className="relative">
                    <div className="absolute inset-y-0 end-3 flex items-center ps-3.5 pointer-events-none">
                        <button>
                            <img src="/images/eys.png" alt="" className="rounded-[10px] object-cover"/>
                        </button>
                    </div>
                    <input type="text" id="email-address-icon"
                        className="border border-other-border  rounded-[10px] block w-full py-4 ps-4 p-2.5 " placeholder=""/>
                </div>
            </div>

            
            <h5 className="text-right text-black-secondary pb-1"><a href="">Lupa Password?</a></h5>

            
            <a href="beranda.html">
                <button type="button"
                    className="bg-primary w-full rounded-[10px] text-light-primary py-3 mb-4 mt-6 hover:bg-primary-400 block text-center">Masuk</button>
            </a>

            <a href="register.html" >
            
            <button type="button" className="bg-primary-100 w-full rounded-[10px] text-primary py-3 mb-6 hover:bg-primary-200">Daftar</button>
            
            </a>  

            <div className="flex items-center pb-6">
                <div className="grow border-t-2 border-other-border my-2"></div>
                <span className="shrink mx-2 text-black-secondary"> atau </span>
                <div className="grow border-t-2 border-other-border my-2"></div>
            </div>

            <div>
                
                <button type="button"
                    className="flex w-full border border-other-border py-3 rounded-[10px] items-center justify-center gap-2">
                    <FcGoogle/>
                    <p className="text-black-secondary font-bold">Masuk dengan Google</p>
                </button>
            </div>

        </div>


  )
}

export default Forms