import React, { useState } from 'react'
import {RiArrowDownSLine} from 'react-icons/ri'
import MobileList from './MobileList'
import {motion , AnimatePresence} from 'framer-motion'

function MobileMenu() {
    const [open , setOpen] = useState(false)
    const [openOne , setOpenOne] = useState(false)
    const [openTwo , setOpenTwo] = useState(false)

    const handleCLickOne = () => {
        setOpen(!open)
        setOpenOne(false)
        setOpenTwo(false)
    }
    const handleCLickTwo = () => {
        setOpen(false)
        setOpenOne(!openOne)
        setOpenTwo(false)
    }
    const handleCLickThree = () => {
        setOpen(false)
        setOpenOne(false)
        setOpenTwo(!openTwo)
    }
  return (
    <div className='mobileMenuContainer'>
        <a href="">
            <p>Upskill</p>
          
        </a>
        <div className='mobileDropdown'>
            <div className="mobileFlex">
            <p>Customer</p>
            <RiArrowDownSLine onClick={handleCLickOne} className='menuIconMobile'/>
            </div>
            <AnimatePresence>
            { open && <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }} className="mobileListTest">
                <p>User Rewards</p>
                <p>Gift cards Rates</p>
                <p>Contact Us</p>
            </motion.div>}
            </AnimatePresence>
        </div>
        <div className='mobileDropdown'>
        <div className="mobileFlex">
            <p>Business</p>
            <RiArrowDownSLine onClick={handleCLickTwo} className='menuIconMobile'/>
            </div>
            { openOne && <div className="mobileListTest">
                <p>Become A partner</p>
                <p>#CTGivesBack</p>
                <p>Work With Us</p>
            </div>}
        </div>


        <div className='mobileDropdown'>
        <div className="mobileFlex">
            <p>Customer</p>
            <RiArrowDownSLine onClick={handleCLickThree} className='menuIconMobile'/>
            </div>
            { openTwo && <div className="mobileListTest">
                <p>User Rewards</p>
                <p>Gift cards Rates</p>
                <p>Contact Us</p>
            </div>}
        </div>

    </div>
  )
}

export default MobileMenu