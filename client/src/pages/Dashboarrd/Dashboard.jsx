import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar";

const Dashboard = () => {
  const [profile, setProfile] = useState([]);

  return (
    <div className="bg-zinc-900 flex w-full justify-between">
      <div className="w-[15%] mt-5 md:w-1/6 h-screen mr-2">
        {" "}
        <Sidebar data={profile} />{" "}
      </div>
      <div className=" w-[80%] mt-5 md:w-5/6 h-auto ml-2 mr-2">
        {" "}
        <Outlet />{" "}
      </div>
    </div>
  );
};

export default Dashboard;
