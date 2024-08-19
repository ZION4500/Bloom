import light from '../assets/light.png'
import dark from '../assets/dark.png'
import { useState } from 'react';

export default function Header() {
    const [lightMode, setLightMode] = useState(localStorage.theme === 'light' ? true : false);

    localStorage.setItem('theme', lightMode? 'light' : 'dark');
    function toggleLightMode() {
        setLightMode(!lightMode);
    }
    if (lightMode) {
        document.body.classList.remove('dark');
    }
    else {
        document.body.classList.add('dark');
    }

    return (
        <header className='bg-[#3D7993] text-white font-sans p-5 dark:bg-[#042B50]'>
            <nav>
                <ul className='flex justify-around'>
                    <li className='text-4xl text-[#77BEB1] pr-5'><a href="/">Bloom</a></li>
                    <li className=' my-auto text-right text-2xl'><a href="/">Home</a></li>
                    <li className=' my-auto text-right text-2xl'><a href="/posts">Latest Posts</a></li>
                    <li className=' my-auto text-right text-2xl'><a href="/contact">Contact</a></li>
                    <li className=' my-auto text-right text-2xl'><a href="/about">About</a></li>
                    <li className=' my-auto text-right text-2xl'><input type="text" placeholder='Search' className='rounded-lg p-2 focus:outline-none focus:ring ring-[#77BEB1] ring-3 text-black shadow-lg dark:text-white dark:bg-[#242535]' /></li>
                    <li className=' my-auto text-right text-2xl'><button onClick={toggleLightMode}><img src={lightMode ? light : dark} alt={lightMode ? 'light mode' : 'dark mode'} /></button></li>
                </ul>
            </nav>
        </header>
    )
}