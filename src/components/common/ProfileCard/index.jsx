import React, { useState,useMemo } from "react";
import { HiOutlinePencil } from "react-icons/hi";
import ProfileEdit from "../ProfileEdit";
import { getSingleStatus, getSingleUser } from "../../../api/FirestoreAPI";
import { getUniqueID } from "../../../helpers/getUniqueId";
import PostsCard from "../PostsCard";
import { useLocation } from "react-router-dom";


import "./index.scss";

export default function ProfileCard({onEdit, currentUser }){
    let location = useLocation();
    const[isEdit,setisEdit] = useState(false);
    const [allStatuses,setAllStatus] = useState([]);
    const [currentProfile, setCurrentProfile] = useState({});
    console.log(currentProfile);
    useMemo(()=>{
        if (location?.state?.id) {
            getSingleStatus(setAllStatus, location?.state?.id);
          }
      
          if (location?.state?.email) {
            getSingleUser(setCurrentProfile, location?.state?.email);
          }
    },[]);

    return (
        <>
        <div className="profile-card">
        {currentUser.id === location?.state?.id ? (
          <div className="edit-btn">
            <HiOutlinePencil className="edit-icon" onClick={onEdit} />
          </div>
        ) : (
          <></>
        )}
            <div className="profile-info">
                <div>
                    <h3 className="userName">
                        {Object.values(currentProfile).length === 0
                            ? currentUser.name
                            : currentProfile?.name}
                    </h3>
                    <p className="heading">{currentUser.headline}</p>

                              {/*   {(currentUser.city || currentUser.country) &&
                 (currentProfile?.city || currentProfile?.country) ? ( */}
                <p className="location">
                  {Object.values(currentProfile).length === 0
                  ? `${currentUser.city}, ${currentUser.country} `
                  : `${currentProfile?.city}, ${currentUser.country}`}
              </p>
{/* /*             ) : (
              <></>
            )} */ }

                    {currentUser.website || currentProfile?.website ? (
                <a
                    className="website"
                    target="_blank"
                    href={
                    Object.values(currentProfile).length === 0
                        ? `${currentUser.website}`
                        : currentProfile?.website
                    }
                >

                {Object.values(currentProfile).length === 0
                  ? `${currentUser.website}`
                  : currentProfile?.website}
                 </a>
                ) : (
                <></>
                )}
            </div>
                <div className="right-info">
                    <p >{currentUser.company}</p>
                </div>
            </div>
        <p className="about-me">
          {Object.values(currentProfile).length === 0
            ? currentUser.aboutMe
            : currentProfile?.aboutMe}
        </p>
        </div>
        <div className="post-status-main">
            {allStatuses.filter((item)=>{
                return item.userEmail === localStorage.getItem("userEmail")
            }).map((posts) => {
                return (
                    <>
                    <div  key={posts.id} >
                    <PostsCard  posts={posts}/>
                    </div>
                    </>
                );
                })}
                </div>
        

        </>
    )
}