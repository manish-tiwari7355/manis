
import Image from "next/image";
function Body() {
  return (
    <header className=" bg-white ">
      <div className="text-5xl  font-bold text-left p-48 ml-1">
        <h1>
          Find Top Colleges,<br></br>
          <span className="text-blue-700"> Coaching, Courses..! </span>
        </h1>
      </div>
      <div className=" flex  ml-56 border-solid border-4 border-light-blue-500   border-blue-100  w-5/12 rounded-full p-6">
        <input
          type="text"
          placeholder="Search College ,Coaching Course"
        ></input>
      </div>
      <div className="relative flex   mr-20 -mt-96 cursor-pointer h-96 ">
        <Image
          src=" https://www.collegedisha.com/_next/image?url=%2Fassets%2Fimages%2FcounsellingCard.webp&w=384&q=75"
          layout="fill"
          objectFit="contain"
          objectPosition="right"
        ></Image>
      </div>

      
    </header>
  );
}

export default Body;
