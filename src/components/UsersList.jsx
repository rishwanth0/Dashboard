import { RxAvatar } from "react-icons/rx";

const users = [
  {
    name: "John ",
    role: "Software Engineer",
    status: "Active",
    statusColor: "text-green-500",
  },
  {
    name: "David",
    role: "Full-stack Developer",
    status: "Deactivated", 
    statusColor: "text-red-500",
  },
  {
    name: "Sam",
    role: "Frontend Developer",
    status: "Active",
    statusColor: "text-green-500",
  },
];

const UsersList = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Users</h2>
      <div className="space-y-4">
        {users.map((user, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Avatar Icon */}
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <RxAvatar className="w-10 h-10 text-purple-400 text-3xl" />
              </div>
              {/* User Info */}
              <div>
                <p className="font-medium text-gray-800">{user.name}</p>
                <p className="text-gray-500 text-sm">{user.role}</p>
              </div>
            </div>
            {/* Status Indicator */}
            <span className={`font-semibold ${user.statusColor}`}>
              {user.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;