
import { FaUserCircle } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";

const Header = ()=>{
    

    return(
        <div className="flex justify-between items-center bg-white p-4 shadow-md">
            <h1 className="text-xl font-bold text-gray-700">Admin</h1>
            <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700 transition-colors">
                <MdLightMode size={24} />
             </button>
            <button className="text-gray-500 hover:text-gray-700 transition-colors">
                <FaUserCircle size={24} />
            </button>
            </div>
        </div>
    )
}

export default Header;