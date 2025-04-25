const lessons = [
  { id: "CH10", topic: "Frontend Lesson1: HTML", duration: "56 mins", date: "01.01.2025" },
  { id: "CH10", topic: "Frontend Lesson1: CSS", duration: "1 hr 25 mins", date: "03.01.2025" },
  { id: "CH10", topic: "Frontend Lesson1: JavaScript", duration: "1 hr 52 mins", date: "11.01.2025" },
];

const LessonsTable = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-800">Lessons</h2>
        <button className="text-sm text-gray-500 hover:text-gray-700">
          Sort by date
        </button>
      </div>

      <div className="overflow-x-auto">

        <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
          
          <thead className="bg-gray-100">
            <tr className="text-left text-gray-700 font-semibold">
              <th className="p-3 w-1/5">Lesson ID</th>
              <th className="p-3 w-2/5">Topics</th>
              <th className="p-3 w-1/5">Duration</th>
              <th className="p-3 w-1/5">Date</th>
            </tr>
          </thead>

          <tbody>
            {lessons.map((lesson, index) => (
              <tr 
                key={index}
                className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
              >
                <td className="p-3 text-gray-800 font-medium">{lesson.id}</td>
                <td className="p-3 text-gray-700 truncate">{lesson.topic}</td>
                <td className="p-3 text-gray-500">{lesson.duration}</td>
                <td className="p-3 text-gray-500">{lesson.date}</td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  );
};

export default LessonsTable;