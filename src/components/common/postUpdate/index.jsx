import React, { useState, useMemo } from "react";
import { postStatus , getStatus} from "../../../api/FirestoreAPI"; 
import { getCurrentTimeStamp } from "../../../helpers/useMoment";
import ModalComponent from "../Modal";
//import { uploadPostImage } from "../../../api/ImageUpload";
import { getUniqueID } from "../../../helpers/getUniqueId";
import PostsCard from "../PostsCard";
import "./index.scss";

export default function PostStatus({ currentUser }) {
    
    const [modalOpen, setModalOpen] = useState(false);
    const [status,setStatus] = useState("");
    const [allStatuses,setAllStatus] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const sendStatus = async ( ) => {
        let object = {
            status:status,
            timeStamp: getCurrentTimeStamp('LLL'),
            userEmail: currentUser.email,
            userName: currentUser.name,
            postID:getUniqueID(),
            userID: currentUser.id,
        }
      await postStatus(object);
      await setModalOpen(false);
      await setStatus("");
      setIsEdit(false);
    };


    useMemo(()=>{
        getStatus(setAllStatus);
    },[]);
    console.log(allStatuses);

    return (
        <div className="post-status-main">
             <div className="user-details">
             <p className="name">{currentUser?.name}</p>
        <p className="headline">{currentUser?.headline}</p>
             </div>
            <div className="post-status">
                <button className="open-post-modal" onClick={() => setModalOpen(true)}>
                    Start a Post
                </button>
            </div>

            <ModalComponent 
            setStatus={setStatus}
            modalOpen={modalOpen} 
            setModalOpen={setModalOpen}
            status={status}
            sendStatus={sendStatus}
            />

                {allStatuses.map((posts) => {
                return (
                    <>
                    <div  key={posts.id} >
                    <PostsCard  posts={posts}/* getEditData={getEditData} */ />
                    </div>
                    </>
                );
                })}
        </div>
        
    



        
);}