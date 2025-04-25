import { useState } from "react";
import { BsGrid1X2Fill, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaChalkboardTeacher, FaCog, FaUserAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);
  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);

  const navItems = [
    { to: "/", icon: <BsGrid1X2Fill />, label: "Dashboard" },
    { to: "/students", icon: <FaUserAlt />, label: "Students" },
    { to: "/tutors", icon: <FaChalkboardTeacher />, label: "Tutors" },
    { to: "/settings", icon: <FaCog />, label: "Settings" },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow" onClick={toggleMobileMenu} aria-label="Toggle menu">
        {isMobileOpen ? <BsChevronLeft size={20} /> : <BsChevronRight size={20} />}
      </button>

      <aside className={`bg-white shadow-md min-h-screen p-4 fixed top-0 ${
          isCollapsed ? "w-16" : "w-64"
        } h-full z-40 transition-all duration-300 ${
          isMobileOpen ? "left-0" : "-left-full"
        } md:left-0`}
      >
        {/* Collapse Button (Desktop) */}
        <button className="hidden md:block absolute -right-3 top-6 bg-white p-1 rounded-full shadow border border-gray-200 hover:bg-gray-100" 
          onClick={toggleSidebar}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <BsChevronRight size={16} /> : <BsChevronLeft size={16} />}
        </button>

        <h2
          className={`text-xl font-bold text-purple-700 mb-6 ${
            isCollapsed ? "text-center" : "px-2"
          }`}
        >
          {isCollapsed ? "D" : "DASHBOARD"}
        </h2>
        
        <nav>
          <ul className="space-y-2">
            {navItems.map(({ to, icon, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`flex items-center gap-3 p-2 rounded-md transition ${
                    location.pathname === to 
                      ? "bg-gray-100 font-medium text-gray-900" 
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                  title={isCollapsed ? label : ""}
                >
                  <span className="text-lg">{icon}</span>
                  {!isCollapsed && <span>{label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;