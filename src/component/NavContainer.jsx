import React, { useState , useRef , useEffect } from 'react'
import {RiArrowDownSLine} from 'react-icons/ri'
import {DropdownMenu, DropdownMenuOne , DropdownMenuTwo} from './DropdownMenu'

function NavContainer() {
  const btnRef = useRef()
  const btnRefOne = useRef()
  const btnRefTwo = useRef()
 
 

  useEffect(()=>{
    const closeDropdown = (e) => {
      if(!btnRef.current.contains(e.target) && !btnRefOne.current.contains(e.target) && !btnRefTwo.current.contains(e.target) ){
        setOpen(false)
        setOpenSecond(false)
        setOpenThird(false)
        
       

      }
  
    }
    document.body.addEventListener('mousedown' ,closeDropdown )

    return ()=> {
      document.body.removeEventListener('mousedown' , closeDropdown)
    }

  } , [])
  const [open , setOpen] = useState(false)
  const [openSecond , setOpenSecond] = useState(false)
  const [openThird , setOpenThird] = useState(false)

  const handleClick = () => {
    setOpen(!open)
    setOpenSecond(false)
    setOpenThird(false)
  }
  const handleClickOne = () => {
    setOpenSecond(!openSecond)
    setOpen(false)
    setOpenThird(false)
  }

  const handleClickTwo = () => {
    setOpenThird(!openThird)
    setOpenSecond(false)
    setOpen(false)
  }

  
  return (
    <div className='nav-items'>
      <div className="navItem">
       <a href="#"><p>Upskill</p></a>
       <div className="drop-down">
       <div ref={btnRef} onClick={handleClick} className="drop">
        <p>Customer</p>
        <RiArrowDownSLine className='menuIcon' size={24}/>
        {open && <DropdownMenu/>}

       </div>
       <div ref={btnRefOne} onClick={handleClickOne} className="drop">
        <p>Business</p>
        <RiArrowDownSLine className='menuIcon' size={24}/>
        {openSecond && <DropdownMenuOne/>}
       </div>
       <div ref={btnRefTwo} onClick={handleClickTwo} className="drop btn">
        <p>Get started</p>
        <RiArrowDownSLine className='menuIcon' size={24}/>
        {openThird && <DropdownMenuTwo/>}

       </div>
       </div>
      </div>

    </div>
  )
}



export default NavContainer