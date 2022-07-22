import React, { useState, useEffect } from 'react'
import NavContainer from './NavContainer'
import {ReactComponent as Logo} from '../asset/cardtonicLogo.svg'
import { Turn as Hamburger } from 'hamburger-react'
import MobileMenu from './MobileMenu'
import {motion , AnimatePresence} from 'framer-motion'

function Header() {
    const [isOpened , setIsOpened] = useState(false)
    const boxVarient = {
      open: {
        scale: 0,
        scale: 100
      },
      close:{
        scale:100,
        scale:0
      }
    }

  
  return (
    <div className='navigation'>
      <MobileMenu isOpened={isOpened} />
      {isOpened ?   <motion.div variants={boxVarient} animate = 'open' className='bgContainer'></motion.div> : <motion.div variants={boxVarient} animate = 'close' className='bgContainer'></motion.div> }
    
        <Logo/>
        <Hamburger  toggled={isOpened} toggle={setIsOpened} easing='ease-in' size={20} direction='left'/>
       
        <NavContainer />
       
    </div>
  )
}

export default Header