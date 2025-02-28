import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Google.com Inc", value: 3124213, color: "#6b46c1" },
  { name: "Recommended flow", value: 1523151, color: "#48BB78" },
  { name: "Other", value: 948213, color: "#A0AEC0" },
];

const totalUsers = data.reduce((acc, item) => acc + item.value, 0);

const PerpetualStats = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-700 ">Perpetual</h2>
      <div className="flex items-center justify-center">
        <div className="relative">
          <ResponsiveContainer width={200} height={200}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-800">
              {totalUsers.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        {data.map((item, index) => (
          <div key={index} className="flex justify-between items-center mb-2">
            <div className="flex items-center space-x-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}>
                </div>
              <span className="text-gray-600">{item.name}</span>
            </div>
            <span className="text-gray-800">{item.value.toLocaleString()} users</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerpetualStats;
