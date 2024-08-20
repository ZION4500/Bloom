import floral from '../assets/flower.png'
import land from '../assets/land.png'
import tokyo from '../assets/tokyo.png'
import name from '../assets/name.png'

export default function Body() {
    return (
        <main className="mr-auto ml-auto  my-20 ">
            <div className='hidden md:block'>
                <div className=' text-white font-sans p-5 mx-20'>
                    <img src={floral} alt="" />
                    <div className='relative bg-white shadow-2xl  w-[25rem] h-60 z-10 bottom-[200px] left-[100px] rounded-lg dark:bg-[#060F2E] p-2'>
                        <p className='bg-[#A655D7] p-2 rounded w-fit text-center px-10 m-5'>Floral</p>
                        <p className='text-black font-bold text-1xl text-left m-5 dark:text-white'>The Subtle Beauty of Purple Hyacinths : How Flowers are Art</p>
                        <div className="flex justify-around">
                            <p className='text-slate-500 m-5 text-[12px] dark:text-black'>Lena Walkins </p>
                            <p className='text-slate-500 m-5 text-[12px] dark:text-black'>23rd August 2024</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className='font-bold text-2xl mx-20 text-center dark:text-white mb-5'>Latest posts</p>
            <div className="inline-flex flex-row gap-5 flex-wrap justify-center mx-20 mb-10 items-center">
                <div className='bg-white rounded w-[300px] h-[350px] text-left shadow-xl border-gray-300 border-[2px] flex flex-col dark:bg-[#111746] dark:border-none'>
                    <img src={tokyo} alt="" className='p-5' />
                    <p className='text-left text-base px-3 py-2 text-[#52B539]'>Landscape</p>
                    <p className='text-left text-xl px-3  font-bold dark:text-white'>The Intricate View of Tokyo : The Wonders of the Nation</p>
                    <div className="flex justify-around">
                        <p className='text-slate-500 m-5 text-[12px] dark:text-black'>Lena Walkins </p>
                        <p className='text-slate-500 m-5 text-[12px] dark:text-black'>23rd August 2024</p>
                    </div>
                </div>
                <div className='bg-white rounded w-[300px] h-[350px] text-left shadow-xl border-gray-300 border-[2px] flex flex-col dark:bg-[#111746] dark:border-none'>
                    <img src={land} alt="" className='p-5' />
                    <p className='text-left text-base px-3 py-2 text-[#52B539]'>Landscape</p>
                    <p className='text-left text-xl px-3  font-bold dark:text-white'>The Intricate View of Tokyo : The Wonders of the Nation</p>
                    <div className="flex justify-around">
                        <p className='text-slate-500 m-5 text-[12px] dark:text-black'>Lena Walkins </p>
                        <p className='text-slate-500 m-5 text-[12px] dark:text-black'>23rd August 2024</p>
                    </div>
                </div>
                <div className='bg-white rounded w-[300px] h-[350px] text-left shadow-xl border-gray-300 border-[2px] flex flex-col dark:bg-[#111746] dark:border-none'>
                    <img src={name} alt="" className='p-5' />
                    <p className='text-left text-base px-3 py-2 text-[#52B539]'>Landscape</p>
                    <p className='text-left text-xl px-3  font-bold dark:text-white'>The Intricate View of Tokyo : The Wonders of the Nation</p>
                    <div className="flex justify-around">
                        <p className='text-slate-500 m-5 text-[12px] dark:text-black'>Lena Walkins </p>
                        <p className='text-slate-500 m-5 text-[12px] dark:text-black'>23rd August 2024</p>
                    </div>
                </div>
                <div className='bg-white rounded w-[300px] h-[350px] text-left shadow-xl  border-gray-300 border-[2px] flex flex-col dark:bg-[#111746] dark:border-none'>
                    <img src={tokyo} alt="" className='p-5' />
                    <p className='text-left text-base px-3 py-2 text-[#52B539]'>Landscape</p>
                    <p className='text-left text-xl px-3  font-bold dark:text-white'>The Intricate View of Tokyo : The Wonders of the Nation</p>
                    <div className="flex justify-around">
                        <p className='text-slate-500 m-5 text-[12px] dark:text-black'>Lena Walkins </p>
                        <p className='text-slate-500 m-5 text-[12px] dark:text-black'>23rd August 2024</p>
                    </div>
                </div>
                <div className='bg-white rounded w-[300px] h-[350px] text-left shadow-xl  border-gray-300 border-[2px] flex flex-col dark:bg-[#111746] dark:border-none'>
                    <img src={land} alt="" className='p-5' />
                    <p className='text-left text-base px-3 py-2 text-[#52B539]'>Landscape</p>
                    <p className='text-left text-xl px-3  font-bold dark:text-white'>The Intricate View of Tokyo : The Wonders of the Nation</p>
                    <div className="flex justify-around">
                        <p className='text-slate-500 m-5 text-[12px] dark:text-black'>Lena Walkins </p>
                        <p className='text-slate-500 m-5 text-[12px] dark:text-black'>23rd August 2024</p>
                    </div>
                </div>
                <div className='bg-white rounded w-[300px] h-[350px] text-left shadow-xl  border-gray-300 border-[2px] flex flex-col dark:bg-[#111746] dark:border-none'>
                    <img src={name} alt="" className='p-5' />
                    <p className='text-left text-base px-3 py-2 text-[#52B539]'>Landscape</p>
                    <p className='text-left text-xl px-3  font-bold dark:text-white'>The Intricate View of Tokyo : The Wonders of the Nation</p>
                    <div className="flex justify-around">
                        <p className='text-slate-500 m-5 text-[12px] dark:text-black'>Lena Walkins </p>
                        <p className='text-slate-500 m-5 text-[12px] dark:text-black'>23rd August 2024</p>
                    </div>
                </div>
                <div className='bg-white rounded w-[300px] h-[350px] text-left shadow-xl  border-gray-300 border-[2px] flex flex-col dark:bg-[#111746] dark:border-none'>
                    <img src={tokyo} alt="" className='p-5' />
                    <p className='text-left text-base px-3 py-2 text-[#52B539]'>Landscape</p>
                    <p className='text-left text-xl px-3  font-bold dark:text-white'>The Intricate View of Tokyo : The Wonders of the Nation</p>
                    <div className="flex justify-around">
                        <p className='text-slate-500 m-5 text-[12px] dark:text-black'>Lena Walkins </p>
                        <p className='text-slate-500 m-5 text-[12px] dark:text-black'>23rd August 2024</p>
                    </div>
                </div>
                <div className='bg-white rounded w-[300px] h-[350px] text-left shadow-xl  border-gray-300 border-[2px] flex flex-col dark:bg-[#111746] dark:border-none'>
                    <img src={land} alt="" className='p-5' />
                    <p className='text-left text-base px-3 py-2 text-[#52B539]'>Landscape</p>
                    <p className='text-left text-xl px-3  font-bold dark:text-white'>The Intricate View of Tokyo : The Wonders of the Nation</p>
                    <div className="flex justify-around">
                        <p className='text-slate-500 m-5 text-[12px] dark:text-black'>Lena Walkins </p>
                        <p className='text-slate-500 m-5 text-[12px] dark:text-black'>23rd August 2024</p>
                    </div>
                </div>
                <div className='bg-white rounded w-[300px] h-[350px] text-left shadow-xl  border-gray-300 border-[2px] flex flex-col dark:bg-[#111746] dark:border-none'>
                    <img src={name} alt="" className='p-5' />
                    <p className='text-left text-base px-3 py-2 text-[#52B539]'>Landscape</p>
                    <p className='text-left text-xl px-3  font-bold dark:text-white'>The Intricate View of Tokyo : The Wonders of the Nation</p>
                    <div className="flex justify-around">
                        <p className='text-slate-500 m-5 text-[12px] dark:text-black'>Lena Walkins </p>
                        <p className='text-slate-500 m-5 text-[12px] dark:text-black'>23rd August 2024</p>
                    </div>
                </div>

            </div>
            <div className="flex justify-center">
                <button className='bg-white rounded-xl py-2 px-5 border-[#6B6666] border-2 text-center hover:bg-[#111746] hover:text-white dark:bg-[#111746] dark:hover:bg-white dark:text-white dark:hover:text-black'>View All Posts</button>
            </div>
        </main>
    )
}