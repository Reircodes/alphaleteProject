import React from 'react'
import CTA from '../../Components/CTA/CTA'
import { useSelector } from 'react-redux'



const Header = () => {
    const {callToAction} = useSelector(state => state)
    console.log(callToAction) 
  return (
    <div className='grid xs: grid-cols-2 xs:grid-rows-3 grid-rows-2 gap-4 xs:grid-cols-1 '>
        {
               callToAction.map((cta)=> (
               <div className={`xs:row-span-1  ${cta.colStart == 1 ? 'col-start-1 xs:col-span-full' : 'col-start-2 xs:col-span-full'} ${cta.colEnd == 2 ? 'col-end-2 xs:col-span-full' : 'col-end-3 xs:col-span-full'} ${cta.rowStart == 1 ? 'row-start-1' : 'row-start-2'} ${cta.rowEnd == 3 ? 'row-end-3' : 'row-end-2'} ${cta.center ? 'items-center self-center' : ''}  ` } > 
               <CTA
                heading = {cta.heading}
                src = {cta.img}
                paragraphText = {cta.paragraphText}
                key = {cta.id}
                video = {cta.video}
                leftPosition = {cta.leftPosition}
                color = {cta.color}
                />
                </div>
            ))
        }
    </div>
  )
}

export default Header