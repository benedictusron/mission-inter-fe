import flagIndo from '../../assets/Indonesia (ID).png'

function PhoneField({
  label,
  name,
  type = 'text',
  required = false,
  ...props
}) {
  return (
    <div className="mb-4">
      <label
        htmlFor={name} className="text-black-secondary pb-1 pt-4 sm:pb-4 ">
        {label}<span className="text-red-700"> * </span></label>
      <div className="relative flex gap-3 ">
        <select
          {...props}
          className="text-black-secondary border  border-gray-200 py-4 text-sm block pl-15 pr-8 bg-white rounded-[10px]">
          <option>+62</option>
          <option>+01</option>
        </select>
        <div
          className="absolute left-0 top-0 bottom-0 bg-gray-100 border-r border-gray-200 rounded-l-[10px] flex items-center px-3 pointer-events-none border ">
          <img src={flagIndo} alt="Indonesia Flag" className="w-5 h-3" />
        </div>
        <div className="flex-1">
          <input
            name={name}
            id={name}
            type={type}

            className="w-full border border-other-border py-4 rounded-[7px] px-4 " />
        </div>
      </div>
    </div>
  )
}

export default PhoneField