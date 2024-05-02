import React from "react";
import NavBar from "../../components/NavBar";
import MainSide from "../../components/MainSide";
import AllUsers from "../../components/AllUsers";

const Home = () => {
  return (
    <div className="w-full">
      <NavBar />
      <div className="flex w-full h-full">
        <div className="sm:w-[65%] w-full overflow-auto h-full">
          <MainSide />
        </div>
        <div className="sm:w-[35%] hidden sm:block w-full h-full rounded">
          <AllUsers />
        </div>
      </div>
    </div>
  );
};

export default Home;
