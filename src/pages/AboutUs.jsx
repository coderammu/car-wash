import React from 'react'
import carwash from "../images/car-wash2.webp"
export default function AboutUs() {
  return (
    <article>
        <h1 className='text-center px-5 py-15 font-bold text-5xl text-sky-500'>About Us</h1>
        <section className="flex px-8 lg:px-20 flex-col lg:flex-row">
            <div className='w-full lg:w-1/2 text-justify flex gap-4 flex-col'>
            <p>Welcome to ABC Car Wash, where we believe that a clean car is a happy car! Founded with a passion for quality service and customer satisfaction, we are committed to providing your vehicle with the best care possible.</p>
            <p>At ABC Car Wash, we use state-of-the-art equipment, eco-friendly cleaning solutions, and a team of skilled professionals to ensure your car gets the best wash and protection. Whether you're looking for a quick exterior wash or a full-service detail, we offer a variety of packages tailored to your needs.</p>
            <p>We take pride in our work, and it shows. From the moment you drive in, we aim to make your experience smooth, convenient, and enjoyable. Our friendly staff is here to assist you with any questions or special requests, ensuring that you leave with a car that feels fresh and looks as good as new.</p>
            <p>Thank you for choosing ABC Car Wash. We look forward to keeping your car sparkling clean and shining bright, every time you visit!</p>
            </div>
            <div className='w-full lg:w-1/2 flex justify-center'>
                <img src={carwash} alt="carwash" className='w-full lg:w-[70%] h-auto'/>
            </div>
        </section>
    </article>
  )
}
