import React, { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LikeButton from "../LikeButton";
import "./index.scss";
import { getCurrentUser,
    getAllUsers,

} from "../../../api/FirestoreAPI";

export default function PostsCard({posts,id}){
    let navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState({});
    const [allUsers, setAllUsers] = useState([]);


    useMemo(() => {
        getCurrentUser(setCurrentUser);
        getAllUsers(setAllUsers);
    }, []);

    return (
        <div className="posts-card" key={id}> 
         
            <p className="name" onClick={()=>navigate('/profile',{
                    state: { id: posts?.userID, email: posts.userEmail },
                  })
            }>
                 {allUsers.filter((user) => user.id === posts.userID)[0]?.name}
            </p>
            <p className="headline">
            {allUsers.filter((user) => user.id === posts.userID)[0]?.headline}
          </p>
            <p className="timestamp">{posts.timeStamp}</p>
            
            <p className="status">{posts.status}</p>

            <LikeButton  
                userId={currentUser?.id}
                postId={posts.id}
                currentUser={currentUser}
            />
        </div>
    );
}