import { FaBookReader, FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";

import {  PiBookOpenTextFill } from "react-icons/pi";


const stats = [
    {icon:<FaUserGraduate size={24} className="text-purple-600"/>,count:224,label:"Students",bgColor: "bg-purple-200"},
    {icon:<FaChalkboardTeacher size={24} className="text-pink-600"/>,count:94,label:"Tutors",bgColor: "bg-pink-200"},
    {icon:<FaBookReader size={24} className="text-green-600"/>,count:12,label:"Lessons",bgColor: "bg-green-200"},
    {icon:<PiBookOpenTextFill size={24} className="text-orange-600"/>,count:0,label:"Lessons today",bgColor: "bg-orange-200"},
    {icon:<HiMiniUserGroup size={24} className="text-pink-600"/>,count:20,label:"Guests today",bgColor: "bg-pink-200"},   
]

const StatsCards = ()=>{
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {stats.map((stat, index)=>(
                <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-md flex items-center space-x-3 md:space-x-4 hover:scale-[1.02] transition-transform">
                    <div className={`p-2 md:p-3 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center ${stat.bgColor}`}>{stat.icon}</div>
                    <div>
                        <h2 className="text-xl  font-bold">{stat.count}</h2>
                        <p className="text-sm  text-gray-500">{stat.label}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default StatsCards;
