import { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
function PasswordField({
    label,
    name,
    required = 'false',
    ...props
}) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='mb-4'>
            <label
                htmlFor={name}
                className='text-black-secondary pb-1'>
                {label} <span className='text-red-700'>*</span>
            </label>
            <div className='relative'>
                <button
                    type='button'
                    className='absolute inset-y-0 end-3 flex items-center ps-3.5 '
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <FaRegEyeSlash className='text-black-secondary hover:text-black-primary' size={18} /> : <FaRegEye className='text-black-secondary hover:text-black-primary' size={18} />}
                </button>
                <div>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name={name}
                        id={name}
                        required={required}
                        className='w-full border border-other-border py-3 rounded-[10px] ps-4 placeholder:text-black-secondary'
                        {...props}
                    />
                </div>
            </div>
        </div>
    )
}

export default PasswordField