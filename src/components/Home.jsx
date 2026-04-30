import React from "react";
import Sidebar from "./Sidebar";
import Video from "./Video";
import { useAuth } from "../contextapi/AuthProvider";
import ListItems from "./ListItems";

const Home = () => {
  const { data, loading } = useAuth();
  return (
    <div className="flex">
      <Sidebar />
      <div className='overflow-y-scroll overflow-x-hidden h-[calc(100vh-2rem)]'>
        <ListItems />
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4'>
        {!loading &&
        data?.map((item, index) => {
          if (item.type !== "video") return false;
          return <Video key={item?.video?.videoId || index} video={item?.video} />;
        })}
        </div>
      </div>
    </div>
  );
};

export default Home;
