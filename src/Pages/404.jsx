export default function Error() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-9xl font-semibold text-[#3D7993] hover:text-[#111746]">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl hover:text-[#3D7993]  ">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-gray-600 hover:text-[#111746]">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-[#3D7993] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#111746]  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3D7993]"
            >
              Go back home
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
