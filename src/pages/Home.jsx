import React from 'react'
import carWash from "../images/car-wash.png"
import carWas1 from "../images/car-wash1.jpg"
import exteriorWash from "../images/exterior-wash.jpg"
import interiorCleaning from "../images/interior-cleaning.jpg"
import interiorwash from "../images/car-wash3.jpg"

import cleaningBottle from "../images/cleaning.png"
import doorstep from "../images/doorstep-delivery.png"
import clock from "../images/stopwatch.png"
import location from "../images/location.png"
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <article className='bg-white '>

      {/* Hero section start */}
      <section className='w-full flex flex-col lg:flex-row px-8 lg:px-20 py-10'>
        <div className='w-full lg:w-1/2  flex flex-col gap-8 justify-center'>
          <h6 className='font-bold text-lime-800'>ESSENTIAL CAR WASH</h6>
          <h1 className='font-bold text-5xl'>Book a premium 60-min <br />car wash at your doorstep</h1>
          <h6 className='text-xl text-gray-500'>Pressure wash with powerful equipments, starting at ₹349.</h6>
        </div>
        <div className='w-full lg:w-1/2  flex justify-center lg:justify-end'>
          <img src={carWash} alt="carWash" className='w-[90%] lg:w-[60%] h-auto' />
        </div>
      </section>
      {/* hero section end */}

      {/* Precision sectio start */}
      <section className='px-8 lg:px-20'>
        <h2 className='text-3xl font-bold py-5'>Precision Car Cleaning</h2>
        <h5 className='text-xl  text-gray-500'>Car Cleaning trusted by 7,50,000+ Car Owners</h5>
        <div className='flex w-full py-10 flex-col lg:flex-row gap-y-5'>

          <div className='w-full lg:w-1/4 flex justify-center flex-col items-center'>
            <img src={cleaningBottle} alt="cleaningBottle" className='h-30' />
            <p className='pt-5 text-s font-bold'>Premium Materials</p>
          </div>

          <div className='w-full lg:w-1/4 flex justify-center flex-col items-center'>
            <img src={doorstep} alt="doorstep" className='h-30' />
            <p className='pt-5 text-s font-bold'>Doorstep Convenience</p>
          </div>

          <div className='w-full lg:w-1/4 flex justify-center flex-col items-center'>
            <img src={clock} alt="clock" className='h-30' />
            <p className='pt-5 text-s font-bold'>60-Min Service</p>
          </div>

          <div className='w-full lg:w-1/4 flex justify-center flex-col items-center'>
            <img src={location} alt="location" className='h-30' />
            <p className='pt-5 font-bold text-s'>Now in 3 Cities</p>
          </div>

        </div>
      </section>
      {/* Precision sectio end */}

      {/* Customise sectio start */}
      <section className='px-8 lg:px-20' id="service">
        <h2 className='text-3xl font-bold py-5'>Customise your car wash</h2>
        <h5 className='text-xl  text-gray-500'>Explore and choose what you need</h5>
        <div className='flex justify-center gap-5 py-5 flex-col lg:flex-row'>

          <div className="relative  border border-solid border-gray-200 rounded-2xl transition-all duration-500 bg-white w-full lg:w-1/4 overflow-hidden">
            <div className="block overflow-hidden ">
              <img src={carWas1} alt="carWas1" />
            </div>
            <div className="p-4">
              <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500 ">Recommended</h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mb-5">Popular 60-min car wash picks by our customers</p>
              <Link to="/book-now" className="bg-sky-500 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold">Book Now</Link>
            </div>
          </div>

          <div className="relative  border border-solid border-gray-200 rounded-2xl transition-all duration-500 bg-white w-full lg:w-1/4 overflow-hidden">
            <div className="block overflow-hidden">
              <img src={interiorCleaning} alt="interiorCleaning " />
            </div>
            <div className="p-4">
              <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500 ">Interior Cleaning</h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mb-5"> For turning ignored headliners & ducts to immaculate interiors starting at ₹249 </p>
              <Link to="/book-now" className="bg-sky-500 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold">Book Now</Link>
            </div>
          </div>

          <div className="relative  border border-solid border-gray-200 rounded-2xl transition-all duration-500 bg-white w-full lg:w-1/4 overflow-hidden">
            <div className="block overflow-hidden">
              <img src={exteriorWash} alt="exteriorWash" />
            </div>
            <div className="p-4">
              <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500 ">Exterior Wash</h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mb-5"> For spick & span exteriors, tyres & more starting at ₹299
              </p>
              <Link to="/book-now" className="bg-sky-500 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold">Book Now</Link>
            </div>
          </div>

          <div className="relative border border-solid border-gray-200 rounded-2xl transition-all duration-500 bg-white w-full lg:w-1/4 overflow-hidden">
            <div className="block overflow-hidden">
              <img src={interiorwash} alt="interiorwash" />
            </div>
            <div className="p-4">
              <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500 ">Combo Packages
              </h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mb-5"> Budget friendly comprehensive car care combos starting at ₹598
              </p>
              <Link to="/book-now" className="bg-sky-500 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold">Book Now</Link>
            </div>
          </div>

        </div>
      </section>
      {/* customization end */}

      {/* price start */}
      <section className='pt-18 px-8 lg:px-20 pb-20' id="pricing">
        <h6 className='text-lime-800 font-bold'>PRICING</h6>
        <h2 className='text-3xl font-bold py-5'>Choose your plan</h2>
          <p className='text-l text-gray-500'>We offer three types of subscriptionas we understand that not all cars are used similarly.please choose your car type and frequency for <br /> exterior cleaning .Wevclean the car from inside only once a week for all subcription </p>

          <div className='flex justify-center gap-10 pt-10 flex-col lg:flex-row'>

          <div class="flex flex-col w-full lg:max-w-sm text-gray-900 rounded-2xl bg-white p-6 xl:py-9 xl:px-12 transition-all duration-500 shadow-xl">
            <h3 class="font-manrope text-xl font-bold mb-3">Daily Cleaning</h3>
            <div class="flex items-center mb-6">
              <span class="font-manrope mr-2 text-4xl lg:text-6xl font-semibold">₹1399</span>
              <span class="text-xl text-gray-500 ">/ month</span>
            </div>
            <ul class="mb-12 space-y-6 text-left text-lg text-gray-500">
              <li class="flex items-center space-x-4">
                <svg class="flex-shrink-0 w-6 h-6 text-lime-600" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <span>Waterless exterior cleaning - 6 days per week</span>
              </li>
              <li class="flex items-center space-x-4">
                <svg class="flex-shrink-0 w-6 h-6 text-lime-600" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <span>Vaccum interior cleaning - once a week </span>
              </li>
              <li class="flex items-center space-x-4">
                <svg class="flex-shrink-0 w-6 h-6 text-lime-600" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <span>Everything on the app </span>
              </li>
              <li class="flex items-center space-x-4">
                <svg class="flex-shrink-0 w-6 h-6 text-lime-600" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <span>Above price is for 1 month subscription and includes GST</span>
              </li>
            </ul>
            <a href="javascript:;" class="py-4 px-8 bg-sky-500 shadow-sm rounded-full transition-all duration-500 text-lg text-white font-semibold text-center w-fit mx-auto ">Purchase Plan</a>
          </div>


          <div class="flex flex-col w-full lg:max-w-sm text-gray-900 rounded-2xl bg-white p-6 xl:py-9 xl:px-12 transition-all duration-500 shadow-xl">
            <h3 class="font-manrope text-xl font-bold mb-3">Alternative Days Cleaning</h3>
            <div class="flex items-center mb-6">
              <span class="font-manrope mr-2 text-4xl lg:text-6xl font-semibold">₹999</span>
              <span class="text-xl text-gray-500 ">/ month</span>
            </div>
            <ul class="mb-12 space-y-6 text-left text-lg text-gray-500">
              <li class="flex items-center space-x-4">
                <svg class="flex-shrink-0 w-6 h-6 text-lime-600" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <span>Waterless exterior cleaning - 3 days per week</span>
              </li>
              <li class="flex items-center space-x-4">
                <svg class="flex-shrink-0 w-6 h-6 text-lime-600" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <span>Vaccum interior cleaning - once a week </span>
              </li>
              <li class="flex items-center space-x-4">
                <svg class="flex-shrink-0 w-6 h-6 text-lime-600" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <span>Everything on the app</span>
              </li>
              <li class="flex items-center space-x-4">
                <svg class="flex-shrink-0 w-6 h-6 text-lime-600" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <span>Above price is for 1 month subscription and includes GST</span>
              </li>
            </ul>
            <a href="javascript:;" class="py-4 px-8 bg-sky-500 shadow-sm rounded-full transition-all duration-500 text-lg text-white font-semibold text-center w-fit mx-auto ">Purchase Plan</a>
          </div>


          <div class="flex flex-col w-full lg:max-w-sm text-gray-900 rounded-2xl  p-6 xl:py-9 xl:px-12 transition-all duration-500 shadow-xl">
            <h3 class="font-manrope text-xl font-bold mb-3">Weekly Cleaning</h3>
            <div class="flex items-center mb-6">
              <span class="font-manrope mr-2 text-4xl lg:text-6xl font-semibold">₹699</span>
              <span class="text-xl text-gray-500 ">/ month</span>
            </div>
            <ul class="mb-12 space-y-6 text-left text-lg text-gray-500">
              <li class="flex items-center space-x-4">
                <svg class="flex-shrink-0 w-6 h-6 text-lime-600" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <span>Waterless exterior cleaning - 3 days per week</span>
              </li>
              <li class="flex items-center space-x-4">
                <svg class="flex-shrink-0 w-6 h-6 text-lime-600" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <span>Vaccum interior cleaning - once a week</span>
              </li>
              <li class="flex items-center space-x-4">
                <svg class="flex-shrink-0 w-6 h-6 text-lime-600" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <span>Everything on the app </span>
              </li>
              <li class="flex items-center space-x-4">
                <svg class="flex-shrink-0 w-6 h-6 text-lime-6000" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <span>Above price is for 1 month subscription and includes GST</span>
              </li>
            </ul>
            <a href="javascript:;" class="py-4 px-8 bg-sky-500 shadow-sm rounded-full transition-all duration-500 text-lg text-white font-semibold text-center w-fit mx-auto ">Purchase Plan</a>
          </div>
        </div>
      </section>
      {/* price end */}
    </article>
  )
}
