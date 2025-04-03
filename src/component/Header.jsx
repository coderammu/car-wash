import React, { useState } from 'react'
import Logo from './Logo'
import Menu from './Menu'
import HeaderIcons from './HeaderIcons'
// import Menu from './Menu'

export default function Header() {

  const [showMenu, setShowMenu] = useState('');

  const handleMenu = () => {
    if(showMenu){
      setShowMenu('')
    } else {
      setShowMenu('show')
    }
  };

  return (
    <header className='flex flex-row h-15 lg:px-10 px-5'>
      <div className='w-1/2 h-full py-1 lg:w-1/4 flex items-center'>
        <Logo />
      </div>
      <div id="header-menu" className={`${showMenu} hidden lg:flex lg:w-2/4 items-center justify-center`}>
        <Menu/>
      </div>
      <div className='flex w-1/2 lg:w-1/4 flex items-center justify-end'>
        <HeaderIcons handleMenu={handleMenu} />
      </div>
    </header>
  )
}
