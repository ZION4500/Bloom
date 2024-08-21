import us from '../assets/us.png'
import vec from '../assets/Vector.png'
import darkVec from '../assets/darkVec.png'



export default function Team() {
    let theme = localStorage.getItem('theme')
    return (
        <main>
            <img src={theme === 'light' ? us : darkVec} alt="woman taking picture grey scale black and white" className='z-[1] absolute top-[5.5rem] left-0 w-max h-max' />
            <div className='md:w-96  w-52 md:mb-56 sm:mb-30 mb-10 md:mx-16 mx-5'>
                <p className='md:mt-24  md:mb-9 font-serif md:text-7xl text-white drop-shadow-2xl z-10 relative text-3xl'>About Us</p>
                <p className='md:text-2xl font-semibold z-10 relative text-sm'>Lorem ipsum odor amet, consectetuer adipiscing elit. Felis congue ultricies purus ullamcorper nullam hac justo. Sodales maecenas lacus facilisis efficitur; ad rhoncus primis erat.</p>
            </div>
            <p className='text-[#3D7993] md:text-5xl md:py-10 pb-3 pt-10 md:mx-16 text-2xl mx-2'>We are The team of Bloom</p>
            <p className='font-[400] md:text-3xl w-full md:mx-16 dark:text-white text-sm mx-2'>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Mi natoque <br />habitasse felis turpis ipsum nec. Blandit eu taciti litora primis et <br /> accumsan nibh sodales?
                <br /><br />
                Est ornare in risus lectus praesent montes imperdiet turpis. Vivamus <br /> dictum duis volutpat fusce mus ullamcorper vehicula dictumst. Aad <br /> risus habitasse class conubia a. Consequat vel curabitur phasellus <br /> parturient quis suscipit massa sem?

            </p>
            <div className='bg-[#E4E6F6] w-full mb-5'>
                <div className='flex justify-center gap-5 p-5 mt-5 dark:bg-[#000634]'>
                    <div className='bg-[#D9D9D9] rounded-full p-4'>
                        <img src={vec} alt="menu" className=' drop-shadow-2xl w-5 h-5 md:w-full md:h-full' />
                    </div>
                    <p className='text-[#3D7993] font-thin md:text-2xl text-lg  drop-shadow-2xl my-auto'>Our mission</p>
                </div>

                <p className='text-center md:text-3xl mx-auto dark:text-white dark:bg-[#000634] w-full px-10'>Our mission is to ignite passion for photography by sharing captivating images, expert advice, and inspiring stories that empower photographers of all levels to capture the world through their unique lens.</p>
            </div>
            <div className='text-right p-10'>
                <p className='text-[#3D7993] m:dtext-3xl text-xl font-semibold'>A Welcoming Statement</p>
                <p className='text-[#3D7993]'>By Veronica Woods</p>
                <p className='py-5 font-semibold md:text-3xl md:w-[700px]  ml-auto dark:text-white'>Welcome to my photography blog! Here, you&apos;ll find a mix of technical tips, creative inspiration, and behind-the-scenes glimpses into my work. Let&apos;s learn and grow together.</p>
                <p className='py-5 font-semibold md:text-3xl md:w-[700px] ml-auto dark:text-white'>My goal is to inspire you to see the world through a new lens. Whether you&apos;re a seasoned photographer or just starting out, I hope you find something valuable here.</p>
            </div>

            <div className='bg-[#E7E7E7] w-[450px] rounded mx-auto p-5 my-10 px-20 flex flex-col dark:bg-[#000634]'>
                <p className='text-center pt-7 font-semibold text-xl dark:text-white'>Weekly Newsletter</p>
                <p className='text-center font-semibold opacity-50 pb-5 dark:text-white'>Get Blog Offers and Emails via Email</p>
                <input type="email" placeholder='Your Email' className='text-left rounded-md border-black border-opacity-50 border-[1px]  w-72 p-2 '/>
                <br />
                <button className='text-center p-2 bg-[#3D7993] text-white rounded-md my-2 w-72'>Subscribe</button>
            </div>

            <p className='text-center p-5 opacity-50 font-light text-sm'>Terms and Conditions | Cookie Policy | Privacy Policy</p>
        </main>
    )
}