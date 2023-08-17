import React from 'react'
import mainImage from '../assets/mainImage.jpg'

export default function Product({product}) {
    return (
        <div className='sm:w-96  '>
            <div class="aspect-square  bg-slate-300 border border-black overflow-hidden ">
                <img class="w-full h-full object-cover transition-transform transform-gpu hover:scale-150 duration-500 ease-in-out" src={product.image} />
            </div>
            <div className='pt-5 text-lg'>
                <p className='font-semibold'>{product.name}</p>
                <span className='mt-5 font-light'>$ {product.price}</span>
            </div>

        </div>

    )
}
