import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import bolso from './../assets/productos/bolso.jpg'
import pantalon from './../assets/productos/pantalon.jpg'
import sudadera from './../assets/productos/hoodie1.jpg'
import camiseta from './../assets/productos/camiseta.jpg'
import Footer from './../components/Footer'
export const ProductPage = () => {

  const { id } = useParams();
  const products = [
    {
      id: 1,
      name: "Balenciaga Hoodie 2032",
      price: "1400",
      image: sudadera,
    },
    {
      id: 2,
      name: "Balenciaga Hoodie",
      price: "1400",
      image: bolso,
    },
    {
      id: 3,
      name: "Balenciaga Basic T-shirt",
      price: "600",
      image: camiseta,
    },
    {
      id: 4,
      name: "Pantalón Vaquero Con Bolsillos",
      price: "6,400",
      image: pantalon,
    },
    {
      id: 5,
      name: "Balenciaga Hoodie 2032",
      price: "1400",
      image: sudadera,
    },
    {
      id: 6,
      name: "Balenciaga Hoodie",
      price: "1400",
      image: bolso,
    },

  ];
  const [product, setProduct] = useState()
  useEffect(() => {
    console.log(id)
    const product = products.find((product) => product.id == id)
    setProduct(product)
  }, [])


  if (product) {
    return (
      <div className="flex flex-col align-middle  items-center  justify-center bg-white pt-20 p-10 ">
        <section className=' flex flex-row align-middle  justify-center items-center gap-14 flex-wrap'>
          <div className="aspect-square w-full   md:w-2/5 bg-slate-300 border border-black overflow-hidden ">
            <img className="w-full h-full object-cover transition-transform transform-gpu hover:scale-150 duration-500 ease-in-out" src={product?.image} />
          </div>
          <div className='w-full md:w-2/5 gap'>
            <h2 className=" text-4xl font-semibold">{product.name}</h2>
            <h4 className=" text-2xl font-semibold">{product.price} $</h4>
            <p className='pt-8 max-w-prose'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum ut perferendis quis earum, natus veniam fuga dolorem optio cumque vero, ab ipsa aperiam sapiente nemo deserunt voluptate maxime alias magnam.</p>
            <section className='flex gap-6'>
              <button href="#" className='flex mt-10 py-3 px-9 justify-center border-2 border-black
                hover:bg-black hover:text-white text-md  
                ease-in-out duration-300  font-semibold  '>
                Add to cart
              </button>
              <button href="#" className='flex mt-10 py-3 px-9 justify-center border-2 border-black
                hover:bg-white hover:text-black text-md bg-black text-white  
                ease-in-out duration-300  font-semibold  '>
                Buy
              </button>
            </section>
          </div>
        </section>

      </div>
    )
  } else {
    <div className="flex flex-col align-middle  items-center  justify-center bg-white pt-20 p-10 ">
      <h1>Loading ...</h1>

    </div>
  }

}
