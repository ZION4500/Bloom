import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function ResetPassword() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { token } = useParams();


    function submit(event) {
        console.log(token)
        if (password === confirmPassword) {
            axios({
                method: 'put',
                url: `https://finaki-backend.onrender.com/api/v1/auth/password/reset/${token}`,
                data: {
                    password: password
                }
            })
            event.preventDefault()
        } else {
            alert("Passwords do not match");
            event.preventDefault();
        }
        event.preventDefault()
    }
    return (
        <main className="m-20 flex justify-center">
            <form
                method="post"
                id="login"
                className="flex flex-col bg-white shadow-2xl px-10 py-5 border-black border-[1px] border-opacity-20 rounded-xl w-[450px] h-fit"
                onSubmit={(e) => submit(e)}
            >
                <p className="mx-2 mb-5 font-semibold text-3xl">Reset Password</p>
                <label htmlFor="password" className="m-2 font-semibold">
                    New Password
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="p-2 border-black border-[1px] border-opacity-70 rounded-md text-lg focus:outline-none focus:border-opacity-50 m-2"
                    placeholder="Enter your password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password" className="m-2 font-semibold">
                    Confirm Password
                </label>
                <input
                    type="password"
                    name="password"
                    id="confirmPassword"
                    className="p-2 border-black border-[1px] border-opacity-70 rounded-md text-lg focus:outline-none focus:border-opacity-50 m-2"
                    placeholder="Enter your password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <input type="submit" value="Submit" className="mt-5  bg-[#3D7993] p-3  text-center text-2xl text-white rounded-full cursor-pointer" />
            </form>
        </main>
    );
}
