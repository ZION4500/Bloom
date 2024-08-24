
export default function Login() {

    return (
        <main className="m-20 flex justify-center">
            <form method="post" id="login" className="flex flex-col bg-white shadow-2xl px-10 py-5 border-black border-[1px] border-opacity-20 rounded-xl w-96 h-[500px]">
                <p className="mx-2 mb-5 font-semibold text-3xl">Login</p>
                <input type="email" name="" id="" className="p-4 border-black border-[1px] border-opacity-70 rounded-md text-xl focus:outline-none focus:border-opacity-50 m-2" placeholder="Email Address" />
                <input type="password" name="" id="" className="p-4 border-black border-[1px] border-opacity-70 rounded-md text-xl focus:outline-none focus:border-opacity-50 m-2" placeholder="Enter your password" />
                <p className="m-2 font-semibold text-[#3D7993]"><a href="#">Forgot Password?</a></p>
                <button className="m-2 p-3 bg-[#3D7993] text-white text-lg font-semibold rounded-full">Sign In</button>
                <p className="text-center opacity-60">or</p>
                <button className="m-2 p-3 bg-[#3D7993] text-white text-lg font-semibold rounded-full" onClick={
                    (event) => {
                        event.preventDefault();
                        window.location.href = "/register";
                    }}><a href="/register">Sign Up</a></button>
            </form>
        </main>
    )
}