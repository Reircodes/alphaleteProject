import React from 'react'
import Button from '../Button/Button'
import './CTA.css'

const CTA = ({heading , color, paragraphText , src ,video , leftPosition}) => {
 
  return (
    <div className='relative shadow-inner bg-[#26272B]'>
      {
        video ? <video className='rounded-3xl shadow-inner' playsInline autoPlay muted loop>
              <source src={src} type="video/mp4" />
        </video> :
        <img className='rounded-3xl shadow-inner' src={src}/>

      }
      
        <div className={`flex flex-col absolute text-white  bottom-6 ${leftPosition ? 'left-6' : 'right-6' }`}>
          <h2 className={`xs:text-xl text-4xl  font-black tracking-wide  mb-1 ${leftPosition ? 'text-left' : 'text-right'}  md:text-2xl sm:text-xl 2xl:my-3.5`}>
            {heading}
          </h2>
          <p className={` ${leftPosition ? 'text-left' : 'text-right'} text-xs font-medium  `}>
            {paragraphText}
          </p>
      <div className={`${leftPosition ? 'text-left' : 'text-right'}`}>
      <Button 
        text='SHOP WOMEN'
        leftPosition={leftPosition}
        bgColor={color}/>
        <Button text='SHOP MEN'
        leftPosition={leftPosition}
        bgColor={color}/>
      </div>
        </div>
    </div>
  )
}

export default CTA