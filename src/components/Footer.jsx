export default function Footer() {


    return (
        <footer className="bg-[#D9D9D9] text-black font-sans p-5 flex flex-row justify-around dark:bg-[#000634]">
            <ul className="w-80">
                <li className="text-xl font-bold pb-2 dark:text-white hidden md:block">About</li>
                <li className="text-[#6B6666] text-lg pb-5 hidden md:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li className="text-[#6B6666] text-lg dark:text-[#AEA0A0]"><span className="text-black font-bold dark:text-white">Email</span> : info@bloom.net <br />
                <span className="text-black font-bold dark:text-white">Phone No</span> : 09056748987</li>
            </ul>
            <ul>
                <li className="text-xl font-bold pb-2 dark:text-white">Quick Link</li>
                <li className="text-[#413B3B] text-lg dark:text-[#AEA0A0]">Home</li>
                <li className="text-[#413B3B] text-lg dark:text-[#AEA0A0]">About</li>
                <li className="text-[#413B3B] text-lg dark:text-[#AEA0A0]">Blog</li>
                <li className="text-[#413B3B] text-lg dark:text-[#AEA0A0]">Archived</li>
                <li className="text-[#413B3B] text-lg dark:text-[#AEA0A0]">Author</li>
                <li className="text-[#413B3B] text-lg dark:text-[#AEA0A0]">Contact</li>
            </ul>
            <ul>
                <li className="text-xl font-bold pb-2 dark:text-white">Category</li>
                <li className="text-[#413B3B] text-lg dark:text-[#AEA0A0]">Landscape</li>
                <li className="text-[#413B3B] text-lg dark:text-[#AEA0A0]">Floral</li>
                <li className="text-[#413B3B] text-lg dark:text-[#AEA0A0]">Seascape</li>
                <li className="text-[#413B3B] text-lg dark:text-[#AEA0A0]">Still Life</li>
                <li className="text-[#413B3B] text-lg dark:text-[#AEA0A0]">Cityscape</li>
                <li className="text-[#413B3B] text-lg dark:text-[#AEA0A0]">Horticulture</li>
                <li className="text-[#413B3B] text-lg dark:text-[#AEA0A0]">Lifestyle</li>
            </ul>
        </footer>
    )
}