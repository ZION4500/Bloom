

export default function Contact() {
    return (
        <main className="bg-contact h-screen">
            <div className="flex justify-around pt-28">
                <div className="mx-16">
                    <p className="font-mono text-5xl my-5">Want to <br />collaborate? <br />
                        Let&lsquo;s talk.</p>
                    <p className="text-lg mb-16">Share your photography passion with us.</p>
                    <div className="flex bg-white rounded-md p-2 gap-5 shadow-2xl dark:bg-[#000634] dark:text-white">
                        <div className="p-4 bg-[#3D7993] rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                            </svg>
                        </div>
                        <div>
                            <p>Mail me at</p>
                            <p>info@bloom.net</p>
                        </div>
                    </div>
                </div>
                <div>
                    <form className="bg-white shadow-2xl  border-black border-[1px] rounded-md dark:bg-[#000634] dark:text-white">
                        <p className="font-semibold text-2xl mx-5 mt-7">Send Us a messsage</p>
                        <input type="text" placeholder="Full name *" className="bg-[#D9D9D9] rounded-md p-2 w-80 text-left my-2 mx-5"/>
                        <br />
                        <input type="email" placeholder="Email Address *" className="bg-[#D9D9D9] rounded-md p-2  text-left my-2 mx-5 w-80"/>
                        <br />
                        <input type="tel" placeholder="Phone*" className="bg-[#D9D9D9] rounded-md p-2 w-80 text-left my-2 mx-5"/>
                        <p className="font-semibold text-normal mx-5 my-2 mt-5">Tell us about your aims and passions*</p>
                        <textarea  className="bg-[#D9D9D9] rounded-md p-2 w-80 text-left my-2 mx-5 resize-none h-24"></textarea>
                        <br />
                        <button onClick={(e) => e.preventDefault()} className="bg-[#3D7993] text-white p-3 rounded-lg mx-5 my-5">Send Message</button>
                    </form>
                </div>
            </div>
        </main>
    )
}