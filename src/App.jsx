
import './App.css'
import Collection from './components/collections'
import AboutUs from './components/AboutUs'
import Companies from './components/Companies'
import Nav from './components/Nav'
import mainImage from './assets/mainImage.jpg'
import secondImage from './assets/second image.jpg'
import BannerTop from './components/bannerTop'
import Product from './components/Product'
import bolso from './assets/productos/bolso.jpg'
import pantalon from './assets/productos/pantalon.jpg'
import sudadera from './assets/productos/hoodie1.jpg'
import camiseta from './assets/productos/camiseta.jpg'
import Footer from './components/Footer'
import Nav2 from './components/Nav2'
function App() {
  const products = [
    {
      name: "Balenciaga Hoodie 2032",
      price: "1400",
      image: sudadera,
    },
    {
      name: "Balenciaga Hoodie",
      price: "1400",
      image: bolso,
    }
    ,
    {
      name: "Balenciaga Basic T-shirt ",
      price: "600",
      image: camiseta,
    }
    ,
    {
      name: "Pantalón Vaquero Con Bolsillos",
      price: "6,400",
      image: pantalon,
    }, {
      name: "Balenciaga Hoodie 2032",
      price: "1400",
      image: sudadera,
    },
    {
      name: "Balenciaga Hoodie",
      price: "1400",
      image: bolso,
    }
    ,

  ]

  return (
    <>
      <Nav2 />
      
      <BannerTop />
      <div className="flex justify-center bg-white  ">
        <div className=" flex   flex-col mt-10 mb-20 p-10">
          <h1 className="text-5xl lg:text-8xl font-extrabold  text-black ">Balenciaga Campaign</h1>
          <div className='flex pt-10 pb-10 justify-between w-full items-center flex-wrap gap-5 lg:gap-0'>
            <p className='max-15 font-bold text-xl'>BALENCIAGA NEW CAMPAING SPRING 2023</p>
            <p className='max-30 text-md  font-medium md:text-right'>A new installietn of Balenciaga multi-phase campaign photographed by Steef Michel will be released in several weeks.</p>
          </div>

          <div className='flex flex-col justify-between w-full items-center  lg:flex-row sm:gap-10'>

            <div className="w-full aspect-square  bg-slate-300 ">
              <img className="w-full h-full object-cover" src={mainImage} />
            </div>


            <div className='h-full lg:pl-10  text-center'>
              <div className="lg:w-80 sm:w-full mt-10 lg:mt-0  mb-10 bg-slate-300">
                <img className="w-full h-full object-cover" src={secondImage} />
              </div>
              <span className='font-bold text-xl '>ISABELLE FOR BALENCIAGA</span>
              <button href="#" className='flex mt-10 p-2 w-full justify-center border-2 border-black
              hover:bg-black hover:text-white text-md
              ease-in-out duration-300'>SHOP THE COLLECTION</button>
              <p className='mt-10 lg:w-80 sm:w-full text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque debitis accusantium. Consectetur dolore magnam esse?<span className='font-semibold px-2  mx-1 bg-green'>
                Isabelle Marcus</span> Eveniet libero sit cum amet fuga veniam iusto sed eos non officiis.</p>
            </div>


          </div>



        </div>

      </div >
      <section className="flex w-lg justify-center items-center flex-col bg-white p-10 mb-10 ">
        <h2 className="text-2xl lg:text-4xl font-semibold  text-black text-left mt-10 mb-10 ">/  SHOP THE COLLECTION</h2>
        <div className='flex max-w-screen-xl justify-center flex-wrap gap-10'>
          {
            products.map((product,index) => {
              return (
                <Product key={index} product={product} />
              )

            })
          }


        </div>
      </section>
        <Footer />
    </>
  )
}

export default App
