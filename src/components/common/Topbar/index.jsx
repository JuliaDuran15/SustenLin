import React, { useEffect, useState } from "react"; 
import"./index.scss";
import { useNavigate } from "react-router-dom";
import SustenLinIcon from "../../../assets/sustenlinIcon.png";
import {
  AiFillHome,
  AiOutlineUserSwitch,
  AiOutlineSearch,
  AiOutlineMessage,
  AiOutlineBell,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import User from "../../../assets/user.png";
import ProfilePopup from "../ProfilePopup";
import Button from "../Button";



export default function Topbar() {
  let navigate = useNavigate();
  const [popupVisible, setPopupVisible] = useState(false);

  const goToRoute = (route) => {
    navigate(route);
  };

  const displayPopup = () => {
    setPopupVisible(!popupVisible);
  };
    return (
        <div className="topbar-main">
           {popupVisible ? (
            <div className="popup-position">
              <ProfilePopup />
            </div>
          ) : (
            <></>
          )} 
    
          <img className="sustenlin-logo" src={SustenLinIcon} alt="SustenLinIcon" />
          {/* {isSearch ? (
            <SearchUsers
              setIsSearch={setIsSearch}
              setSearchInput={setSearchInput}
            />
          ) : ( */}
            <div className="react-icons">
              <AiOutlineSearch
                size={30}
                className="react-icon"
                onClick={() => setIsSearch(true)}
              />
              <AiFillHome
                size={30}
                className="react-icon"
                onClick={() => goToRoute("/home")}
              />
              <AiOutlineUserSwitch
                size={30}
                className="react-icon"
                onClick={() => goToRoute("/connections")}
              />
              <AiOutlineInfoCircle 
              size={30} 
              className="react-icon"
              onClick={() => goToRoute("/info")} />
              <AiOutlineMessage size={30} className="react-icon" />
              <AiOutlineBell size={30} className="react-icon" />
            </div>
          {/* )} */}
          <img
            className="user-logo"
           // src={currentUser?.imageLink}
           src={User}
            alt="user"
            onClick={displayPopup}
          />
    
         {/*  {searchInput.length === 0 ? (
            <></>
          ) : (
            <div className="search-results">
              {filteredUsers.length === 0 ? (
                <div className="search-inner">No Results Found..</div>
              ) : (
                filteredUsers.map((user) => (
                  <div className="search-inner" onClick={() => openUser(user)}>
                    <img src={user.imageLink} />
                    <p className="name">{user.name}</p>
                  </div>
                ))
              )}
            </div>
          )} */}
        </div>
      );
    };