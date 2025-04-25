import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Google.com Inc", value: 3124213, color: "#6b46c1" },
  { name: "Recommended flow", value: 1523151, color: "#48BB78" },
  { name: "Other", value: 948213, color: "#A0AEC0" },
];

const totalUsers = data.reduce((acc, item) => acc + item.value, 0);

const PerpetualStats = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Perpetual</h2>

      <div className="flex flex-col items-center">
        <div className="relative h-60 w-full max-w-xs">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={1}
                dataKey="value"
                // stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [value.toLocaleString(), 'Users']} />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-1 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-800">
              {totalUsers.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
      
      <div className="mt-6 w-full space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}>
                </div>
              <span className="text-gray-600">{item.name}</span>
            </div>
            <span className="text-gray-800 ">{item.value.toLocaleString()} users</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerpetualStats;
