import React from "react";
import Sidebar from "./Sidebar";
import Video from "./Video";
import { useAuth } from "../contextapi/AuthProvider";

const Home = () => {
  const { data } = useAuth();
  return (
    <div className="flex">
      <Sidebar />
      <div>
        {data.map((item) => {
          if (item.type !== "video") return false;
          return <Video key={item.Id} video={item?.video} />;
        })}
      </div>
    </div>
  );
};

export default Home;
