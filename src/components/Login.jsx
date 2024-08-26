import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    function handleChange(e) {
        setUser({ ...user, [e.target.id]: e.target.value });
    }
    function Submit(event) {
        axios({
            method: "POST",
            url: "https://finaki-backend.onrender.com/api/v1/auth/login",
            data: user,
        }).then((res) => {
            localStorage.setItem("authtoken", res.data.user.token);
            if (res.data.success) {
                toast.success(res.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",

                });
            }
        })
        event.preventDefault();
    }
    return (
        <>
            <main className="m-20 flex justify-center">
                <form
                    method="post"
                    id="login"
                    className="flex flex-col bg-white shadow-2xl px-10 py-5 border-black border-[1px] border-opacity-20 rounded-xl w-[450px] h-fit"
                    onSubmit={(event) => { Submit(event) }}
                >
                    <p className="mx-2 my-1 mb-5 font-semibold text-3xl">Login</p>
                    <label htmlFor="email" className="mx-2 my-1 font-semibold">
                        Email Address
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="p-2 border-black border-[1px] border-opacity-70 rounded-md text-lg focus:outline-none focus:border-opacity-50 mx-2 my-1"
                        placeholder="Email Address"
                        required
                        onChange={(event) => {
                            handleChange(event);
                        }}
                    />

                    <label htmlFor="password" className="mx-2 my-1 font-semibold">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="p-2 border-black border-[1px] border-opacity-70 rounded-md text-lg focus:outline-none focus:border-opacity-50 mx-2 my-1"
                        placeholder="Enter your password"
                        required
                        onChange={(event) => {
                            handleChange(event);
                        }}
                    />
                    <p className="mx-2 my-1 font-semibold text-[#3D7993]">
                        <a href="/forgot">Forgot Password?</a>
                    </p>
                    <button className="mx-2 my-1 px-3 py-2 bg-[#3D7993] text-white text-lg font-semibold rounded-full">
                        Sign In
                    </button>
                    <p className="text-center opacity-60">or</p>
                    <button
                        className="mx-2 my-1 px-3 py-2 bg-[#3D7993] text-white text-lg font-semibold rounded-full"
                        onClick={(event) => {
                            event.preventDefault();
                            window.location.href = "/register";
                        }}
                    >
                        <a href="/register">Sign Up</a>
                    </button>
                </form>
            </main>
            <ToastContainer />
        </>
    );
}
