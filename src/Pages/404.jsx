import Header from "../components/Header";
import bg4 from "../assets/4bg.jpg";

export default function Error() {
  return (
    <>
      <Header />
      <img src={bg4} className="absolute w-full h-full" />
      <div className="bg-[#9F9999] opacity-70  border-opacity- border-white border-[20px] absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/16 top-1/8 w-[500px] h-[500px] mt-10">
        <p className="text-9xl text-center font-semibold mt-9 mb-4 font-mono">
          404
        </p>
        <p className="text-3xl text-center">OOPS! PAGE NOT FOUND.</p>
      </div>
    </>
  );
}
