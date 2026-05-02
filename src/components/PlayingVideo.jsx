import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/rapidapi";
import ReactPlayer from "react-player";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";
import SuggestedVideo from "./SuggestedVideo";
import { BsFillCheckCircleFill } from "react-icons/bs";

function PlayingVideo() {
  const [video, setVideo] = useState();
  const [realatedVideo, setRelativeVideo] = useState();
  const { id } = useParams();

  const fetchVideoDetails = () => {
    fetchData(`video/details/?id=${id}`).then((res) => {
      console.log(res);
      setVideo(res);
    }).catch(e => console.error(e));
  };
  const fetchRelatedVideo = () => {
    fetchData(`video/related-contents/?id=${id}`).then((res) => {
      console.log("Related response:", res);
      if (!res.contents || res.contents.length === 0) {
        fetchData(`search/?q=trending`).then((fallbackRes) => {
          setRelativeVideo(fallbackRes);
        });
      } else {
        setRelativeVideo(res);
      }
    }).catch(e => console.error(e));
  };

  useEffect(() => {
    fetchVideoDetails();
    fetchRelatedVideo();
  }, [id]);

  return (
    <div className=" flex justify-center flex-row h-[calc(100%-56px)] mt-16">
      <div className="w-full max-w-395 flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[100%-400px] px-4 py-3 lg:py-6">
          <div className="h-52 md:h-[700px] ml-[-16px] mr-[-16px] lg:ml-0 lg:mr-0 ">
            <ReactPlayer key={id}
              url={`https://www.youtube.com/watch?v=${id}`}
              height="100%"
              width="100%"
              controls
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />
          </div>
          <div className="font-bold text-sm md:text-xl mt-4 line-clamp-2">
            {video?.title}
          </div>
          <div className="flex justify-between flex-col md:flex-row mt-4">
            <div className="flex ">
              <div className="flex items-start">
                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={video?.author?.avatar?.[0]?.url}
                  />
                </div>
              </div>
              <div className="flex space-x-5">
                <div className="flex flex-col ml-3">
                  <div className="text-md font-semibold flex items-center">
                    {video?.author?.title}
                    {video?.author?.badges?.[0]?.type === "VERIFIED_CHANNEL" && (
                      <BsFillCheckCircleFill className="text-white/50 text-[12px] ml-1" />
                    )}
                  </div>
                  <div className=" text-sm">
                    {video?.author?.stats?.subscribersText}
                  </div>
                </div>
                <span className="mt-1 text-center bg-red-500 px-3 pt-2 rounded-full text-white cursor-pointer hover:bg-red-700 duration-200 ">
                  Subscribe
                </span>
              </div>
            </div>
            <div className="flex mt-4 md:mt-0">
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/16">
                <AiOutlineLike className="text-xl mr-2" />
                {`${abbreviateNumber(video?.stats?.likes || 0, 2)} Likes`}
              </div>
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/16 ml-4">
                {`${abbreviateNumber(video?.stats?.views || 0, 2)} Views`}
              </div>
            </div>
          </div>
          <div className="p-4 bg-gray-100 rounded-xl mt-4 text-sm">
            {video?.description}
          </div>
          <div className="flex gap-x-6 font-semibold rounded-xl mt-4 text-xl">
            {video?.stats?.comments} <p>Comments</p>
          </div>
        </div>
        <div className="flex flex-col px-4 py-6 h-[calc(100vh-4.625rem)] overflow-y-scroll overflow-x-hidden lg:w-88 xl:w-100">
          {realatedVideo?.contents?.map((item, index) => {
            if (item?.type !== "video") return false;
            return <SuggestedVideo key={index} video={item?.video} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default PlayingVideo;
