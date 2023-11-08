import React from 'react'
import Product from './../components/Product'
import bolso from './../assets/productos/bolso.jpg'
import pantalon from './../assets/productos/pantalon.jpg'
import sudadera from './../assets/productos/hoodie1.jpg'
import camiseta from './../assets/productos/camiseta.jpg'
import BannerTop from '../components/BannerTop'
export const ProductsPage = () => {
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
    return (
        <>
            <BannerTop />

            <section className="flex w-lg justify-center items-center flex-col bg-white p-10 mb-10  " id='products'>
                <h2 className="text-2xl lg:text-4xl font-semibold  text-black text-left mt-10 mb-10 ">/  SHOP THE COLLECTION</h2>
                <div className='flex max-w-screen-xl justify-center flex-wrap gap-10'>
                    {
                        products.map((product, index) => {
                            return (
                                <Product key={index} product={product} />
                            )

                        })
                    }
                </div>
            </section>
        </>
    )
}
