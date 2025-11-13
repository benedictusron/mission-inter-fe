function InputField({
    label,
    name,
    type = 'text',
    required = false,
    ...props
}) {
    return (
        <div className='mb-4'>
            <label
                htmlFor={name}
                className='text-black-secondary pb-1'>
                {label} <span className='text-red-700'> * </span>
            </label>
            <input
                type={type}
                name={name}
                id={name}
                required={required}
                className='w-full border border-other-border py-3 rounded-[10px] ps-4 placeholder:text-black-secondary'
                {...props} />
        </div>
    )
}

export default InputField