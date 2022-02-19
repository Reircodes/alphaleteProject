import React from 'react'
import './Button.css'

const Button = ({text , leftPosition , bgColor}) => {
  return (
    <button className={`${leftPosition ? 'text-left' : 'text-right right'} ${bgColor == 'blue' ? 'bg-[#00bfc3]' : '' } hover:translate-y-[-0.25rem]  duration-300 mt-3 hover:bg-[#26272B] transition-all  mt-2 text-2xs tracking-wide font-black bg-[#F9724D] py-2 px-4 w-auto inline-block bg-opacity-70 rounded-full xs:text-sm`}>
    {text}
 </button>
  )
}

export default Button