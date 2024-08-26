export default function UpdatePassword() {
    return (
        <main className="m-20 flex justify-center">
            <form
                method="post"
                id="login"
                className="flex flex-col bg-white shadow-2xl px-10 py-5 border-black border-[1px] border-opacity-20 rounded-xl w-[450px] h-fit"
            >
                <p className="mx-2 mb-5 font-semibold text-3xl">Update Password</p>
                <label htmlFor="password" className="m-2 font-semibold">
                    Old Password
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="p-2 border-black border-[1px] border-opacity-70 rounded-md text-lg focus:outline-none focus:border-opacity-50 m-2"
                    placeholder="Enter your password"
                    required
                />
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
                />
                <label htmlFor="password" className="m-2 font-semibold">
                    Confirm Password
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="p-2 border-black border-[1px] border-opacity-70 rounded-md text-lg focus:outline-none focus:border-opacity-50 m-2"
                    placeholder="Enter your password"
                    required
                />
            </form>
        </main>
    );
}
