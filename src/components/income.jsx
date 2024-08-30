import { useState } from "react";
import axios from "axios";


export default function Income() {
    const BASE_URL = import.meta.env.REACT_APP_API_BASE_URL
    const [user, setUser] = useState({
        title: "",
        amount: "",
        type: "",
        category: "",
        date: "",
        description: "",
    });

    function handleChange(e) {
        setUser({ ...user, [e.target.id]: e.target.value });
    }
    // Rest of the component code...

    function submit(e) {
        e.preventDefault();
        axios({
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('authtoken')
            },
            url: `${BASE_URL}income/create`,
            data: user,
        })
    }

    return (
        <>
            <main className=" flex justify-center bg-gradient-to-r from-green-400 to-green-600 h-screen">
                <form
                    method="post"
                    id="login"
                    className="flex flex-col bg-white shadow-2xl px-10 py-5 border-black border-[1px] border-opacity-20 rounded-xl h-fit my-auto"
                    onSubmit={submit}
                >
                    <p className="mx-2  mb-5 font-semibold text-3xl">Create Income</p>
                    <label htmlFor="title" className="mx-2  font-semibold">
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        className="p-2 border-black border-[1px] border-opacity-70 rounded-md text-lg focus:outline-none focus:border-opacity-50 m-2"
                        placeholder="Enter the title"
                        required
                        onChange={handleChange}
                    />
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <label htmlFor="userName" className="mx-2  font-semibold ">
                                Amount
                            </label>
                            <input
                                type="number"
                                name="amount"
                                id="amount"
                                className="p-2 border-black border-[1px] border-opacity-70 rounded-md text-lg focus:outline-none focus:border-opacity-50 m-2"
                                placeholder="Amount"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="type" className="mx-2  font-semibold ">
                                Type
                            </label>
                            <input
                                type="text"
                                name="type"
                                id="type"
                                className="p-2 border-black border-[1px] border-opacity-70 rounded-md text-lg focus:outline-none focus:border-opacity-50 m-2"
                                placeholder="Type"
                                required
                                onChange={handleChange}

                            />
                        </div>
                    </div>
                    <div className="flex justify-between flex-col">
                        <div className="flex flex-col">
                            <label htmlFor="category" className="mx-2  font-semibold ">
                                Category
                            </label>
                            <input
                                type="text"
                                name="category"
                                id="category"
                                className="p-2 border-black border-[1px] border-opacity-70 rounded-md text-lg focus:outline-none focus:border-opacity-50 m-2"
                                placeholder="Category"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="type" className="mx-2  font-semibold ">
                                Date
                            </label>
                            <input
                                type="date"
                                name="date"
                                id="date"
                                className="p-2 border-black border-[1px] border-opacity-70 rounded-md text-lg focus:outline-none focus:border-opacity-50 m-2"
                                placeholder="Date"
                                required
                                onChange={handleChange}

                            />
                        </div>
                    </div>


                    <label htmlFor="description" className="mx-2  font-semibold">
                        Desciption
                    </label>
                    <textarea name="description" id="description" className="p-2 border-black border-[1px] border-opacity-70 rounded-md text-lg focus:outline-none focus:border-opacity-50 m-2 resize-none"
                        onChange={handleChange}
                    ></textarea>
                    <input
                        type="submit"
                        value="Create Income"
                        className="mx-2 my-1 px-3 py-2 bg-green-900 text-white text-lg font-semibold rounded-full cursor-pointer"
                    />
                </form>
            </main>
        </>
    );
}
