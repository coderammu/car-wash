import React from 'react'
import cart from "../images/cart.png"
import profile from "../images/user.png"
import burger from "../images/burger-bar.png"
export default function HeaderIcons({ handleMenu }) {
  return (
    <>
      <div className='flex justify-end gap-5 items-center'>
        <img src={cart} alt="cart" className='w-6 ' />
        <img src={profile} alt="profile" className='w-6' />
        <img onClick={handleMenu} src={burger} alt="burger" className='w-[20%]  lg:hidden' />
      </div>
    </>
  )
}
