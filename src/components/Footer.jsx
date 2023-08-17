import React from 'react'

export default function Footer() {
    return (

        <footer class="bg-white   dark:bg-black p-5">
            <div class=" m-10 text-ligthGrey text-center dark:text-white">
                <a href="https://dribbble.com/shots/18149106-Balenciaga-Ecommerce-website-redesign-concept/attachments/13346720?mode=media" class="mr-4 hover:underline md:mr-6 ">Original Design By Alexander Kontsevoy </a>

            </div>
            <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span class="text-sm text-ligthGrey sm:text-center dark:text-ligthGrey">© 2023 <a href="#" class="hover:underline">Balenciaga™</a>. All Rights Reserved.
                </span>
                <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-ligthGrey dark:text-ligthGrey sm:mt-0">
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>

    )
}
