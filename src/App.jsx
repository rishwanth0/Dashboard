import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatsCards from "./components/StatsCards";
import VisitorChart from "./components/VisitorChart";
import PerpetualStats from "./components/PerpetualStats";
import LessonsTable from "./components/LessonsTable";
import UsersList from "./components/UsersList";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col md:ml-64">
          <Header />

          <div className="p-5">
            <StatsCards />
          </div>

          <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <VisitorChart />
            </div>
            <div className="md:col-span-1">
              <PerpetualStats />
            </div>
          </div>

          <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <LessonsTable />
            </div>
            <div className="md:col-span-1">
              <UsersList />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;