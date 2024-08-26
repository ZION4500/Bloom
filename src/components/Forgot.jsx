export default function Forgot() {

    return (
        <main className="m-20 flex justify-center">
            <form method="post" id="login" className="flex flex-col bg-white shadow-2xl px-10 py-5 border-black border-[1px] border-opacity-20 rounded-xl w-[450px] h-fit">
                <p className="mx-2 mb-5 font-semibold text-3xl">Forgot Password</p>
                <label htmlFor="email" className="mx-2 my-1 font-semibold">Email Address</label>
                <input type="email" name="email" id="email" className="p-2 border-black border-[1px] border-opacity-70 rounded-md text-lg focus:outline-none focus:border-opacity-50 m-2" placeholder="Email Address" required />
            </form>
        </main>
    )
}