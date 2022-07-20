import React, { useState } from 'react'
import NavContainer from './NavContainer'
import {ReactComponent as Logo} from '../asset/cardtonicLogo.svg'
import { Turn as Hamburger } from 'hamburger-react'
import MobileMenu from './MobileMenu'
import {motion , AnimatePresence} from 'framer-motion'

function Header() {
    const [isOpened , setIsOpened] = useState(false)
  return (
    <div className='navigation'>
      {isOpened && <MobileMenu />}
      {isOpened && <AnimatePresence> <motion.div initial={{scale:0}} animate={{scale:100}} className='bgContainer'></motion.div> </AnimatePresence> }
        <Logo/>
        <Hamburger toggled={isOpened} toggle={setIsOpened} easing='ease-in' size={20} direction='left'/>
       
        <NavContainer />
       
    </div>
  )
}

export default Header