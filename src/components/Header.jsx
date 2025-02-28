import { FaUserCircle } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";

const Header = ()=>{
    return(
        <div className="flex justify-between items-center bg-white p-4 shadow-md">
            <h1 className="text-xl font-bold text-gray-700">Admin</h1>
            <div className="flex items-center space-x-4">
                <MdLightMode className="text-gray-500 bg-gray-200 rounded-full hover:text-gray-700 cursor-pointer p-1" size={30}/>
                <FaUserCircle className="text-gray-500 hover:text-gray-700 cursor-pointer" size={30}/>
            </div>
        </div>
    )
}

export default Header;