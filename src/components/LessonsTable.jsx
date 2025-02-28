
const lessons = [
  { id: "CH10", topic: "Frontend Lesson1: HTML", duration: "56 mins", date: "01.01.2025" },
  { id: "CH10", topic: "Frontend Lesson1: CSS", duration: "1 hr 25 mins", date: "03.01.2025" },
  { id: "CH10", topic: "Frontend Lesson1: JavaScript", duration: "1 hr 52 mins", date: "11.01.2025" },
];

const LessonsTable = () => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      
      <div className="flex justify-between items-center mb-2 ">
        <h2 className="text-lg font-bold text-black">Lessons</h2>
        <span className="text-gray-500 text-sm cursor-pointer">Sort by date</span>
      </div>

      
      <div className="border border-gray-300 rounded-lg overflow-hidden">
        {/* Table Header */}
        <div className="flex bg-gray-200 p-3 font-semibold text-gray-700">
          <div className="w-1/5 px-4">Lesson ID</div>
          <div className="w-2/5 px-4">Topics</div>
          <div className="w-1/6 px-4">Duration</div>
          <div className="w-1/6 px-4">Date</div>
        </div>

        {/* Table Rows */}
        <div className="flex flex-col">
          {lessons.map((lesson, index) => (
            <div
              key={index}
              className={`flex items-center p-3 ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}
            >
              <div className="w-1/5 px-4 font-medium text-gray-800">{lesson.id}</div>
              <div className="w-2/5 px-4 text-gray-700 truncate">{lesson.topic}</div>
              <div className="w-1/6 px-4 text-gray-500">{lesson.duration}</div>
              <div className="w-1/6 px-4 text-gray-500">{lesson.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LessonsTable;
