import React,{useState} from 'react'

const ProductCard = ({newSales , type ,src , productName , price ,colorNum }) => {
    const [hovered, setHover] = useState(false)
  return (
    <div className='mb-3'>
       <div className="">
       <img src={src} className="hover:-translate-y-0.5 transition-all rounded-3xl mb-3 w-full shadow-inner"/>
       </div>
                 <div className={`p-4 rounded-xl  ${hovered ? 'inner-shadow' : 'basic-drop-shadow cursor-pointer'} `} onMouseEnter= {()=> setHover(true)} onMouseLeave= {()=> setHover(false)}>
          
     {
          hovered ? <div className={`${hovered ? 'fade-in' : ''}`}>
        <h3 className="text-xxs mb-2 text-center text-white font-bold">
            QUICK ADD+
        </h3>
        <div className="flex text-xs justify-between">
            <p className='text-white rounded-xl transition-colors py-2 px-2 font-bold hover:bg-slate-400 cursor-pointer'>XXS</p>
            <p className='text-white rounded-xl transition-colors py-2 px-2 font-bold hover:bg-slate-400 cursor-pointer'>XS</p>
            <p className='text-white rounded-xl transition-colors py-2 px-2 font-bold hover:bg-slate-400 cursor-pointer'>S</p>
            <p className='text-white rounded-xl transition-colors py-2 px-2 font-bold hover:bg-slate-400 cursor-pointer'>M</p>
            <p className='text-white rounded-xl transition-colors py-2 px-2 font-bold hover:bg-slate-400 cursor-pointer'>L</p>
            <p className='text-white rounded-xl transition-colors py-2 px-2 font-bold hover:bg-slate-400 cursor-pointer'>XL</p>
            <p className='text-white rounded-xl transition-colors py-2 px-2 font-bold hover:bg-slate-400 cursor-pointer'>XXL</p>
            
        </div>
          </div> :  <div className={``}><h3 className='text-xs mb-2 text-white font-bold'>
          {productName}
      </h3>
      <div className="flex justify-between">
     
    
    <div className="">
    <p className='text-xxs text-slate-300 pb-2 font-bold'>
          {type}
      </p>
      <p className='text-xxs text-white font-bold'>
          ${price}
      </p>
    </div>
    <div className="text-right">
    <p className ='text-xxs text-white p-1 rounded-full bg-slate-500 font-bold'>
          +{colorNum} COLORS
      </p>
      {
          newSales ? <p className='text-xxs px-1 text-right shadow-black rounded-full p-1 inline font-medium bg-white'>NEW</p> : ''
      }
     </div>
      </div></div>
      }
        
  
      
          
          
        </div> 
        
           
    </div>
  )
}

export default ProductCard