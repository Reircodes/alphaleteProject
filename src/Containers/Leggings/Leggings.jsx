import React from 'react'
import { useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ProductCard } from '../../Components/index'
import './Legging.css'

const Leggings = () => {
    const {products} = useSelector(state => state)
    
  return ( 
    <section>
    <div className="flex justify-between  legging__header">
        <h2 className='text-2xl text-white font-extrabold tracking-wider hover:cursor-pointer hover:text-slate-300'>
            LEGGINGS
        </h2>
        <button className = 'text-[#f4f4f4] text-xs font-black shadow-slate-700 tracking-widest  rounded-full bg-[#26272b] px-3 py-2'>
            VIEW ALL
        </button>
    </div>
    <div className="">
  
        {
            products.map(product => (
                <ProductCard
                src={product.src}
                key = {product.id}
                productName = {product.productName}
                price = {product.price}
                colorNum = {product.colors}
                type= {product.type}
                newSales = {product.newSales}

              />
            ))
        }
         
    </div>
    </section>
  )
}

export default Leggings