import React, { useState } from 'react'

export default function BookNow() {

    const [detail, setDetail] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        typeOfCar: "",
        packages: ""
    })
    const [formError, setFormError] = useState({})

    const handleChange = (event) => {
        const { value, name } = event.target
        setDetail((prevState) => ({ ...prevState, [name]: value }))
    }

    const handleClick = () => {

        const errors = {}

        Object.keys(detail).forEach((key) => {
            if (!detail[key]) {
                errors[key] = 'this is a required field';
            }
        })

        setFormError(errors)

    }
    return (
        <article>
            <h1 className='text-center font-bold text-4xl py-10 text-sky-500'>Book Now</h1>
            <div className='lg:px-20 px-10 max-w-4xl mx-auto'>
                <div class="flex gap-x-6 mb-6 flex-col lg:flex-row">
                    <div class="w-full relative">
                        <label class="flex  items-center mb-2 text-gray-600 text-sm font-medium">First Name <svg width="7" height="7" class="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444" />
                        </svg>
                        </label>
                        <input type="text" id="default-search" class="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none " placeholder="" required="" value={detail.firstName} name="firstName" onChange={handleChange} />
                        <p className='text-red-400 text-xs px-5'>{formError.firstName}</p>
                    </div>
                    <div class="w-full relative">
                        <label class="flex  items-center mb-2 text-gray-600 text-sm font-medium">Last Name <svg width="7" height="7" class="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444" />
                        </svg>
                        </label>
                        <input type="text" id="default-search" class="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none " placeholder="" required="" value={detail.lastName} name="lastName" onChange={handleChange} />
                        <p className='text-red-400 text-xs px-5'>{formError.lastName}</p>
                    </div>
                </div>
                <div class="relative mb-6">
                    <label class="flex  items-center mb-2 text-gray-600 text-sm font-medium">Email Address <svg width="7" height="7" class="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444" />
                    </svg>
                    </label>
                    <input type="text" id="default-search" class="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none " placeholder="" required="" value={detail.email} name="email" onChange={handleChange} />
                    <p className='text-red-400 text-xs px-5'>{formError.email}</p>
                </div>
                <div class="relative mb-6">
                    <label class="flex  items-center mb-2 text-gray-600 text-sm font-medium">Phone Number <svg width="7" height="7" class="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444" />
                    </svg>
                    </label>
                    <input type="text" id="default-search" class="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none " placeholder="" required="" value={detail.phoneNumber} name="phoneNumber" onChange={handleChange} />
                    <p className='text-red-400 text-xs px-5'>{formError.phoneNumber}</p>
                </div>
                <div class="flex gap-x-6 mb-6 flex-col lg:flex-row">
                    <div class="w-full relative">
                        <label class="flex  items-center mb-2 text-gray-600 text-sm font-medium">Type Of Car <svg width="7" height="7" class="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444" />
                        </svg>
                        </label>
                        <select id="default-search" class="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none" onChange={handleChange} value={detail.typeOfCar} name="typeOfCar">
                            <option value="Hatchback">Hatchback</option>
                            <option value="Sedan">Sedan</option>
                            <option value="SUV">SUV</option>
                            <option value="Convertible">Convertible</option>
                            <option value="Coupe">Coupe</option>
                        </select>
                        <p className='text-red-400 text-xs px-5'>{formError.typeOfCar}</p>
                    </div>
                    <div class="w-full relative">
                        <label class="flex  items-center mb-2 text-gray-600 text-sm font-medium">Packages <svg width="7" height="7" class="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444" />
                        </svg>
                        </label>
                        <select id="default-search" class="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none" onChange={handleChange} value={detail.packages} name="packages">
                            <option value="nterior Cleaning">Interior Cleaning</option>
                            <option value="Exterior Wash">Exterior Wash</option>
                            <option value="Compo Package">Compo Package</option>
                            <option value="Recommended">Recommended</option>
                        </select>
                        <p className='text-red-400 text-xs px-5'>{formError.packages}</p>
                    </div>
                </div>

                <button class="w-52 h-12 shadow-sm rounded-full bg-sky-500 hover:bg-sky-800 transition-all duration-700 text-white text-base font-semibold leading-7" onClick={handleClick}>Book</button>
            </div>
        </article>
    )
}
