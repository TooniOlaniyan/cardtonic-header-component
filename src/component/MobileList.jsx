import React from 'react'

function MobileList({text1 , text2 , text3}) {
  return (
    <div className='mobileList'>
        <a href=""><p>{text1}</p></a>
        <a href=""><p>{text2}</p></a>
        <a href=""> <p>{text3}</p></a>
    </div>
  )
}

export default MobileList