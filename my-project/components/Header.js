import Image from "next/image";
import { LockClosedIcon, SearchIcon, UserCircleIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-1 grid grid-cols-3 bg-white shadow-md py-3  md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer ">
        <Image
          src="https://www.collegedisha.com/assets/images/college-dishalogo.svg"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <h2>Why Disha</h2>
        <h2>College By Stream</h2>
        <h2>Admission 2021</h2>
        <h2>Explore</h2>
        <h2>Plans</h2>
      </div>

      <div className="flex items-center space-x-2 justify-end text-gray-500">
        <SearchIcon className="h-4 bg-white-100" />
        <LockClosedIcon className="h-5" />
        <h2>Login /</h2>
        <UserCircleIcon className ="h-5"/>
        <h2>Register</h2>
      </div>
    </header>
    
  );
}

export default Header;
