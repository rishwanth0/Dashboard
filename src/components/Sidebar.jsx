import { BsGrid1X2Fill } from "react-icons/bs";
import { FaChalkboardTeacher, FaCog, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md min-h-screen p-6 fixed top-0 left-0 h-full z-index-10">
      <h2 className="text-2xl font-bold text-purple-700 mb-6">RISHWANTH</h2>
      <ul className="space-y-4">
        {[
          { to: "/", icon: <BsGrid1X2Fill />, label: "Dashboard" },
          { to: "/students", icon: <FaUserAlt />, label: "Students" },
          { to: "/tutors", icon: <FaChalkboardTeacher />, label: "Tutors" },
          { to: "/settings", icon: <FaCog />, label: "Settings" },
        ].map(({ to, icon, label }, index) => (
          <li key={index}>
            <Link to={to} className="flex items-center space-x-3 p-2 rounded-md group hover:bg-gray-100 transition">
              <div className="text-gray-500 transition-colors duration-200 group-hover:text-green-700">{icon}</div>
              <span className="text-gray-600 transition-colors duration-200 group-hover:text-black">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
