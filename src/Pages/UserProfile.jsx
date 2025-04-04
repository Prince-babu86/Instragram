import React from "react";
import { Link, NavLink, Route, Routes, useNavigate, useParams } from "react-router-dom";
import ProfilePost from "../Components/ProfilePost";
import ProfileReels from "../Components/ProfileReels";
import { users } from "../Data/UsersData";


const UserProfile = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  let user = users.find((user) => user.username === username);
  

  return (
    <div className="h-[84vh] w-full overflow-y-auto ">
      <div className="top h-12 w-full bg-r  flex items-center px-2 justify-between">
        <div className="left flex items-center gap-5">
        <i onClick={(()=>{navigate("/")})} className="ri-arrow-left-line text-3xl"></i>
        <h2 className="text-xl">{user.username}</h2>
        </div>
        <div className="right"> <i className="ri-more-2-fill text-2xl"></i></div>
      </div>

      <div className="center  py-2">
        <div className="flex px-3 items-start ">
          <div  className="h-20 w-20 rounded-full border-[2.5px] border-transparent bg-gradient-to-r  from-orange-600 via-pink-500 to-orange-600 bg-clip-border">
            <img
              className="h-full w-full rounded-full"
              src={user.profilePicture}
              alt=""
            />
          </div>
          <div className="flex items-start flex-col ml-6 mt-1">
            <h4 className="text-sm">{user.username}</h4>
            <div className="flex w-full b gap-10 mt-1">
              <div className="prf-mn flex items-center flex-col justify-center">
                <h4 className="text-md">{user.reels.length + user.posts.length}</h4>
                <h4 className="text-[12px]">posts</h4>
              </div>

              <div className="prf-mn flex items-center flex-col justify-center">
                <h4 className="text-md">{user.followers}</h4>
                <h4 className="text-[12px]">followers</h4>
              </div>

              <div className="prf-mn flex items-center flex-col justify-center">
                <h4 className="text-md">{user.following}</h4>
                <h4 className="text-[12px]">following</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="user-bio px-3 mt-2 max-h-[100px] max-w-[70%] ">
          <p className="text-[11.3px]">
           {user.bio}
          </p>
        </div>
        <div className="flex px-3 items-center mt-3 ">
          <button className=" text-[14px] bg-[#1877F2] py-1 px-12  rounded-md">
            Follow
          </button>
          <button className=" text-[14px] border-1 py-1 px-10 ml-2 rounded-md">
            Message
          </button>
          <button className="py-1.5 ml-2 border-1 px-3 rounded-md">
            <svg
              aria-label="Similar accounts"
              class="x1lliihq x1n2onr6 x5n08af"
              fill="currentColor"
              height="16"
              role="img"
              viewBox="0 0 24 24"
              width="16"
            >
              <title>Similar accounts</title>
              <path
                d="M19.006 8.252a3.5 3.5 0 1 1-3.499-3.5 3.5 3.5 0 0 1 3.5 3.5Z"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
                stroke-width="2"
              ></path>
              <path
                d="M22 19.5v-.447a4.05 4.05 0 0 0-4.05-4.049h-4.906a4.05 4.05 0 0 0-4.049 4.049v.447"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="2"
                x1="5.001"
                x2="5.001"
                y1="7.998"
                y2="14.003"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="2"
                x1="8.004"
                x2="2.003"
                y1="11"
                y2="11"
              ></line>
            </svg>
          </button>
        </div>

        
        <div className="highlights h-26 mt-2 flex overflow-x-auto   ">
        {user.stories.map((elem , id)=>{
            return   <div className="story h-[90%] w-[100px]  flex items-center justify-center flex-col">
            <div className="h-[70%] w-[70%] bg-gray-600/50 p-1 rounded-full ">
              <img
                className="h-full w-full rounded-full object-top object-cover"
                src={`/images/${elem}.jpg`}
                alt=""
              />
            </div>
            <h4 className="text-[11.5px] mt-0.5">highlights</h4>
          </div>
        })}
        </div>


      </div>

      <div className="bottom mt-1">
        <div className="flex w-full justify-around items-center">
          <NavLink
            to={`/${username}`}
            end // Ensures it's only active on exact "/:username"
            className={(e) => (e.isActive ? "border-b-2 p-1" : "p-1")}
          >
            <svg
              aria-label="Posts"
              class="x1lliihq x1n2onr6 x173jzuc"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>Posts</title>
              <rect
                fill="none"
                height="18"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                width="18"
                x="3"
                y="3"
              ></rect>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="9.015"
                x2="9.015"
                y1="3"
                y2="21"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="14.985"
                x2="14.985"
                y1="3"
                y2="21"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="21"
                x2="3"
                y1="9.015"
                y2="9.015"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="21"
                x2="3"
                y1="14.985"
                y2="14.985"
              ></line>
            </svg>
          </NavLink>

          <NavLink
            to={`/${username}/reels`}
            className={(e) => (e.isActive ? "border-b-2 p-1" : "p-1")}
          >
            <svg
              aria-label="Reels"
              class="x1lliihq x1n2onr6 x1roi4f4"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>Reels</title>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
                x1="2.049"
                x2="21.95"
                y1="7.002"
                y2="7.002"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="13.504"
                x2="16.362"
                y1="2.001"
                y2="7.002"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="7.207"
                x2="10.002"
                y1="2.11"
                y2="7.002"
              ></line>
              <path
                d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
              <path
                d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </NavLink>

          <div className="prf-st">
            <svg
              aria-label="Tagged"
              class="x1lliihq x1n2onr6 x1roi4f4"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>Tagged</title>
              <path
                d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
              <path
                d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
              <circle
                cx="12.072"
                cy="11.075"
                fill="none"
                r="3.556"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></circle>
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-4">
      <Routes>
        <Route path={`/`} element={<ProfilePost  user={user}  />} />
        <Route path={`/reels`} element={<ProfileReels user={user} />} />

      </Routes>
      </div>
      
    </div>
  );
};

export default UserProfile;
