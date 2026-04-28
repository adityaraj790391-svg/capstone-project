import React from "react";
import Sidebar from "./Sidebar";
import Video from "./Video";
import { useAuth } from "../contextapi/AuthProvider";

const Home = () => {
  const { data } = useAuth();
  return (
    <div className="flex">
      <Sidebar />
      <div className='overflow-y-scroll overflow-x-hidden h-[calc(100vh-2rem)]'>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mt-33'>
        {data.map((item) => {
          if (item.type !== "video") return false;
          return <Video key={item.Id} video={item?.video} />;
        })}
        </div>
      </div>
    </div>
  );
};

export default Home;
