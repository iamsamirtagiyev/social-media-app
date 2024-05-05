import React from "react";
import NavBar from "../../components/NavBar";
import MainSide from "../../components/MainSide";
import AllUsers from "../../components/AllUsers";

const Home = () => {
  return (
    <div className="w-full flex gap-[1px]">
      <div className="w-full sm:w-[65%] overflow-auto h-[90vh]">
        <NavBar/>
        <MainSide/>
      </div>
      <div className="sm:w-[35%] hidden sm:inline-block">
        <AllUsers/>
      </div>
    </div>
  );
};

export default Home;
