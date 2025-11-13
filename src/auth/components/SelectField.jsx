import React from 'react'

function SelectField({
  label,
  name,
  required = false,
  ...props
}) {
  return (
    <div class="mb-4">
                <label 
                htmlFor={name} 
                class="block pb-1 font-medium text-black-secondary">
                  {label}<span class="text-red-700"> * </span></label>
                <div class="w-full mx-auto">
                    <select 
                        name={name}
                        id={name}
                        required={required}
                        class="p-4 border border-other-border text-black-secondary text-base rounded-[10px]  block w-full sm:w-full">
                        <option value="" disabled selected>Pilih Jenis Kelamin</option>
                        <option value="wanita">Wanita</option>
                        <option value="pria">Pria</option>
                    </select>
                </div>
            </div>
  )
}

export default SelectField