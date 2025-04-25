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
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
        <Sidebar />
        
        <main className="flex-1 flex flex-col md:ml-16 lg:ml-64">
          <Header />
          
          <div className="p-4 space-y-6">
            <StatsCards />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <VisitorChart />
              </div>
              <div className="lg:col-span-1">
                <PerpetualStats />
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <LessonsTable />
              </div>
              <div className="lg:col-span-1">
                <UsersList />
              </div>
            </div>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;