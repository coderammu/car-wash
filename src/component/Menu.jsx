import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <>
    <div>
      <nav>
        <ul className='flex justify-center gap-5 lg:gap-10 items-center flex-col lg:flex-row' >
          <li><a href="/#pricing">Pricing</a></li>
          <li><a href="/#service">Services</a></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contact-us">Contacts</Link></li>
        </ul>
      </nav>
    </div>
    </>
)
}
