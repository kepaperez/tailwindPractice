import React from 'react'

export default function Nav() {
    return (
        <div className='flex  z-10 justify-between md:items-center pt-4 pb-4 pr-10 pl-10  flex-col md:flex-row sticky top-0 bg-white'>
            <span className='font-bold text-lg md:self-end self-center'>BALENCIAGA</span>
            <div className='flex  gap-10 text-sm  font-medium flex-col md:flex-row mt-10 md:mt-0'>
                <a className='text-md hover:underline underline-offset-8' href='#'>WOMEN</a>
                <a className='text-md hover:underline underline-offset-8'href='#'>MEN</a>
                <a className='text-md hover:underline underline-offset-8'href='#'>EXPLORE</a>
                <a className='text-md hover:underline underline-offset-8'href='#'>INTERNATIONAL VERSION</a>
            </div>
        </div>
    )
}
