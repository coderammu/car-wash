import React from 'react'
import logo from "../images/logo.webp"
import { Link } from 'react-router-dom'
export default function Logo() {
    return (
        <Link to="/" className='inline-block h-full'><img className='h-full w-auto' src={logo} alt="logo"/></Link>
    )
}
