import React, { useEffect, useRef, useState } from "react";
import "../Stylesheets/Story.css";
import { users } from "../Data/User";
import { useNavigate } from "react-router-dom";

const Stories = () => {
  const [isloader, setisloader] = useState(true);
  const stref = useRef();
  const navigate = useNavigate()



  useEffect(() => {
    stref.current.style.display = "none";
    setTimeout(() => {
      stref.current.style.display = "flex";
      setisloader(false);
    }, 3000);
  }, [isloader]);


  const OnStory = (e) =>{
    // (e.target.classList.add("animate-spin"))
    setTimeout(() => {
        navigate(`/story/${e}`)
    }, 500);
  }


  return (
    <div>
      <div className="stories px-2 flex gap-0 overflow-x-auto">
        <div
          ref={stref}
          className="story h-[120px] w-[100px] flex items-center justify-center flex-col gap-1.5"
        >
          <div className="story-image relative h-[90px] w-[90px] border-[2.5px] border-transparent bg-gradient-to-r  from-orange-600 via-pink-500 to-orange-600 bg-clip-border rounded-full">
            <div className="absolute bottom-[-2px] font-semibold right-[-2px] z-10 bg-white h-7 w-7 rounded-full text-black flex items-center justify-center text-xl">
              +
            </div>
            <img
              className="h-full w-full absolute rounded-full object-top object-cover"
              src="src/assets/images/prince.jpg"
              alt=""
            />
          </div>
          <h4 className="text-[11px] text-gray-500">Your Story</h4>
        </div>

        {isloader
          ? users.map((elem, id) => {
              return (
                <div className="story h-[120px] w-[100px] flex items-center justify-center flex-col gap-1.5">
                  <div className="story-image relative h-[90px] w-[90px] bg-[#CACDD4] animate-pulse border-4 border-transparent rounded-full"></div>
                </div>
              );
            })
          : users.map((elem, id) => {
              return (
                <div onClick={(()=>{OnStory(elem.username)})} className="story h-[120px] w-[100px] flex items-center justify-center flex-col gap-1.5">
                  <div className="story-image relative h-[90px] w-[90px] border-[2.5px] border-transparent bg-gradient-to-r  from-orange-600 via-pink-500 to-orange-600 bg-clip-border rounded-full ">
                    <img
                      className="h-full w-full absolute rounded-full object-center object-cover"
                      src={elem.profilePicture}
                      alt=""
                    />
                  </div>
                  <h4 className="text-[11px]">{elem.username}</h4>
                </div>
              );
            })}
      </div>
     
    </div>
  );
};

export default Stories;
