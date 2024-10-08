// import tokyo from "../assets/tokyo.png";
import bg from "../assets/bg.png";
import forest from "../assets/forest.png";

export default function Post() {
  let posts = [
    { id: 1, img: forest, theme: "Landscape" },
    { id: 2, img: bg, theme: "Horticulture"},
    { id: 3, img: forest, theme: "Landscape"},
    { id: 4, img: forest, theme: "Landscape" },
    { id: 5, img: bg, theme: "Horticulture"},
    { id: 6, img: forest, theme: "Landscape"},
    { id: 7, img: forest, theme: "Landscape" },
    { id: 8, img: bg, theme: "Horticulture"},
    { id: 9, img: forest, theme: "Landscape"}
  ];

  return (
    <main  className="md:mx-52">
        {posts.map(post =>(
            <div className="md:flex-row flex-col  border-black border-opacity-30 border-[1px] md:h-72 md:max-w-5xl rounded-lg my-5 mx-5 flex md:p-10 py-10 px-5 dark:shadow-[13px_13px_4px_0px_#00000040] mb-10" key={post.id}>
                 <img src={post.img} alt="anime picture of tokyo" className="px-5" />
                 <p className="relative top-48 right-96 bg-[#52B539] p-1 h-fit text-white rounded px-2 hidden md:block">{post.theme}</p>
                 <div>
                   <p className="text-xl font-bold text-left p-5 dark:text-white">
                     The Intricate View of Tokyo : The Wonders of the Nation
                   </p>
                   <p className="px-5 font-[500] dark:text-white ">
                     At vero eos et accusamus et iusto odio dignissimos ducimus qui
                     blanditiis praesentium voluptatum deleniti atq...
                   </p>
                   <div className=" flex px-5 py-2 ">
                     <p className="pr-2 flex dark:text-white">
                       <svg
                         width="20"
                         height="20"
                         viewBox="0 0 42 42"
                         fill="none"
                         xmlns="http:www.w3.org/2000/svg"
                         className="pr-2 "
                       >
                         <path
                           d="M21 1C9.954 1 1 9.954 1 21C1 32.046 9.954 41 21 41C32.046 41 41 32.046 41 21C41 9.954 32.046 1 21 1Z"
                           stroke="black"
                         />
                         <path
                           d="M5.54199 33.692C5.54199 33.692 9.99999 28 21 28C32 28 36.46 33.692 36.46 33.692M21 21C22.5913 21 24.1174 20.3679 25.2426 19.2426C26.3679 18.1174 27 16.5913 27 15C27 13.4087 26.3679 11.8826 25.2426 10.7574C24.1174 9.63214 22.5913 9 21 9C19.4087 9 17.8826 9.63214 16.7574 10.7574C15.6321 11.8826 15 13.4087 15 15C15 16.5913 15.6321 18.1174 16.7574 19.2426C17.8826 20.3679 19.4087 21 21 21Z"
                           stroke="black"
                         />
                       </svg>
                       Mary Sherridan
                     </p>
                     <p className="dark:text-white">7 hours ago</p>
                   </div>
                 </div>
               </div>
        ))}
    </main>
    
  );
}
