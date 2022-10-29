import {FaHome, FaBookOpen} from "react-icons/fa";
import { MdSpeed, MdOutlineSubscriptions } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { HiPencil } from "react-icons/hi2";
import craft from "../Assets/craft.png";

function Home() {
  return (
    <>
    {/* profile with emal section */}

    <div className="w-80 lg:w-96 hidden md:flex flex-col border border-black-900 h-screen ">
    <div className="flex flex-col justify-center items-center mt-8 mb-6">
    <button className="w-44 border "><img src={craft} alt="" /></button>
    <h3 className="flex text-3xl font-semibold">John Doe <button className="ml-4 mt-4"><HiPencil size={18}/></button></h3>
    <p className="">johndoe123@mydomain.com</p>
    </div>

    {/* Profile options */}
    <div className="border border-black-900 ">
    <div className="flex flex-col  mt-1 p-2">
      <div className="flex mt-4 w-full border p-2 bg-violet-200 rounded">
        <FaHome className="mt-2"/>
        <button className="ml-8 mt-1 w-auto font-semibold">Home</button>
      </div>
      <div className="flex mt-2 p-2 hover:bg-violet-200 rounded">
        <FaBookOpen className="mt-4"/>
        <button className="ml-8 mt-2 w-auto font-semibold">Syllabus</button>
      </div>
      <div className="flex mt-2 p-2 hover:bg-violet-200 rounded">
        <MdSpeed className="mt-4"/>
        <button className="mt-2 ml-8 w-auto font-semibold">Test</button>
      </div>
      <div className="flex mt-2 p-2 hover:bg-violet-200 rounded">
        <MdOutlineSubscriptions className="mt-4"/>
        <button className="mt-2 ml-8 w-auto font-semibold">Subscribe</button>
      </div>
    </div>
    <CiLogin size={20}/>
    </div>
    </div>
    </>
  )
}

export default Home