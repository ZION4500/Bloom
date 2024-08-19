import us from '../assets/us.png'
import vec from '../assets/Vector.png'

export default function Team() {
    return (
        <main>
            <img src={us} alt="woman taking picture grey scale black and white" className='z-[-1] absolute top-0 left-0' />
            <div className='w-96 mb-56 mx-16'>
                <p className='mt-24  mb-9 font-serif text-7xl text-white drop-shadow-2xl'>About Us</p>
                <p className='text-2xl font-semibold'>Lorem ipsum odor amet, consectetuer adipiscing elit. Felis congue ultricies purus ullamcorper nullam hac justo. Sodales maecenas lacus facilisis efficitur; ad rhoncus primis erat.</p>
            </div>
            <p className='text-[#3D7993] text-5xl py-10 mx-16'>We are The team of Bloom</p>
            <p className='font-[400] text-3xl w-full mx-16'>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Mi natoque <br />habitasse felis turpis ipsum nec. Blandit eu taciti litora primis et <br /> accumsan nibh sodales?
                <br /><br />
                Est ornare in risus lectus praesent montes imperdiet turpis. Vivamus <br /> dictum duis volutpat fusce mus ullamcorper vehicula dictumst. Aad <br /> risus habitasse class conubia a. Consequat vel curabitur phasellus <br /> parturient quis suscipit massa sem?

            </p>
            <div className='bg-[#E4E6F6] w-full'>
                <div className='flex justify-center gap-5 p-5 mt-5'>
                    <div className='bg-[#D9D9D9] rounded-full p-4'>
                    <img src={vec} alt="menu" className=' drop-shadow-2xl '/>
                    </div>
                    <p className='text-[#3D7993] font-thin text-2xl  drop-shadow-2xl my-auto'>Our mission</p>
                </div>
                <div className='w-[50]0 mx-auto'>
                    <p className='text-center text-3xl w-[1000px]'>Our mission is to ignite passion for photography by sharing captivating images, expert advice, and inspiring stories that empower photographers of all levels to capture the world through their unique lens.</p>
                </div>
            </div>
        </main>
    )
}