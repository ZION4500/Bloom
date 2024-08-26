import { useState } from "react";
import axios from "axios";

export default function Register() {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        country: "",
        password: "",
    });
    // const [name, setName] = useState("");
    // const [userName, setUserName] = useState("");
    // const [email, setEmail] = useState("");
    // const [mobile, setMobile] = useState("");
    // const [address, setAddress] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
    function Submit(e) {
        e.preventDefault();

        axios({
            method: "POST",
            url: "https://finaki-backend.onrender.com/api/v1/auth/register",
            data: user,
        })
            .then((res) => {
                if (res.data.success) {
                    window.location.href = "/login";
                }
            })
            .catch((err) => console.error(err));

        e.preventDefault();
    }
    function handleChange(e) {
        setUser({ ...user, [e.target.id]: e.target.value });
    }

    return (
        <main className="m-20 flex justify-center">
            <form
                method="post"
                id="login"
                className="flex flex-col bg-white shadow-2xl px-10 py-5 border-black border-[1px] border-opacity-20 rounded-xl  h-fit"
                onSubmit={(e) => Submit(e)}
            >
                <p className="mx-2  mb-5 font-semibold text-3xl">Register</p>
                <label htmlFor="name" className="mx-2  font-semibold">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="p-2 border-black border-[1px] border-opacity-70 rounded-md text-lg focus:outline-none focus:border-opacity-50 m-2"
                    placeholder="Enter your Name"
                    required
                    onChange={(event) => handleChange(event)}
                />
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <label htmlFor="userName" className="mx-2  font-semibold ">
                            Username
                        </label>
                        <input
                            type="text"
                            name="userName"
                            id="username"
                            className="p-2 border-black border-[1px] border-opacity-70 rounded-md text-lg focus:outline-none focus:border-opacity-50 m-2"
                            placeholder="Username"
                            required
                            onChange={(event) => handleChange(event)}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="Phone" className="mx-2  font-semibold ">
                            Phone Number
                        </label>
                        <input
                            type="number"
                            name="Phone"
                            id="phone"
                            className="p-2 border-black border-[1px] border-opacity-70 rounded-md text-lg focus:outline-none focus:border-opacity-50 m-2"
                            placeholder="Phone Number"
                            required
                            onChange={(event) => handleChange(event)}
                        />
                    </div>
                </div>

                <label htmlFor="country" className="mx-2  font-semibold">
                    Country
                </label>
                <input
                    type="text"
                    name="country"
                    id="country"
                    className="p-2 border-black border-[1px] border-opacity-70 rounded-md text-lg focus:outline-none focus:border-opacity-50 m-2"
                    placeholder="Your country"
                    required
                    onChange={(event) => handleChange(event)}
                />

                <label htmlFor="email" className="mx-2  font-semibold">
                    Email Address
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="p-2 border-black border-[1px] border-opacity-70 rounded-md text-lg focus:outline-none focus:border-opacity-50 m-2"
                    placeholder="Email Address"
                    required
                    onChange={(event) => handleChange(event)}
                />

                <label htmlFor="password" className="mx-2  font-semibold">
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="p-2 border-black border-[1px] border-opacity-70 rounded-md text-lg focus:outline-none focus:border-opacity-50 m-2"
                    placeholder="Enter your password"
                    required
                    onChange={(event) => handleChange(event)}
                />

                <input
                    type="submit"
                    value="Sign Up"
                    className="mx-2 my-1 px-3 py-2 bg-[#3D7993] text-white text-lg font-semibold rounded-full cursor-pointer"
                />
                <p className="text-center opacity-60">or</p>
                <button
                    className="mx-2 my-1 px-3 py-2 bg-[#3D7993] text-white text-lg font-semibold rounded-full"
                    onClick={(event) => {
                        event.preventDefault();
                        window.location.href = "/login";
                    }}
                >
                    <a href="/register">Sign In</a>
                </button>
            </form>
        </main>
    );
}
