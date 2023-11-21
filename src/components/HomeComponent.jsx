import React from "react";
import PostStatus from "./common/postUpdate";
import ProfilePopup from "./common/ProfilePopup";

export default function HomeComponent({currentUser}) {
    return (
    <div className="home-component">
        <PostStatus currentUser={currentUser}/>
        
    </div>
    );
}