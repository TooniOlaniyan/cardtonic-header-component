import React from 'react'
import URewards from '../asset/URewards.svg'
import GCRates from '../asset/GCRates.svg'
import Cus from '../asset/Cus.svg'
import BAPartner from '../asset/BAPartner.svg'
import CTgiveback from '../asset/CTgiveback.svg'
import WWus from '../asset/WWus.svg'
import Oweb from '../asset/Oweb.svg'
import Oandroid from '../asset/Oandroid.svg'
import Oios from '../asset/Oios.svg'

function DropdownMenu() {
  return (
    <div className='dropdownContainer'>
        <div className="dropMenu">
            <img src={URewards} alt="" />
            <a href=""><p>User Reward</p></a>
        </div>
        <div className="dropMenu">
            <img src={GCRates} alt="" />
            <a href=""><p>Gift card Rates</p></a>
        </div>
        <div className="dropMenu">
            <img src={Cus} alt="" />
            <a href=""><p>Contact Us</p></a>
        </div>

    </div>
  )
}

function DropdownMenuOne() {
    return (
      <div className='dropdownContainerOne'>
          <div className="dropMenu">
              <img src={BAPartner} alt="" />
              <a href=""><p>Become A Partner</p></a>
          </div>
          <div className="dropMenu">
              <img src={CTgiveback} alt="" />
              <a href=""><p>#CTGivesBack</p></a>
          </div>
          <div className="dropMenu">
              <img src={WWus} alt="" />
              <a href=""><p>Work With Us</p></a>
          </div>
  
      </div>
    )
  }

  function DropdownMenuTwo() {
    return (
      <div className='dropdownContainerTwo'>
          <div className="dropMenu">
              <img src={Oweb} alt="" />
              <a href=""><p>On the Web</p></a>
          </div>
          <div className="dropMenu">
              <img src={Oandroid} alt="" />
              <a href=""><p>On Android</p></a>
          </div>
          <div className="dropMenu">
              <img src={Oios} alt="" />
              <a href=""><p>On iOS</p></a>
          </div>
  
      </div>
    )
  }

export {DropdownMenu, DropdownMenuOne , DropdownMenuTwo}