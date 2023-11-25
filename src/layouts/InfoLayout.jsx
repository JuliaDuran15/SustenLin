import React, { useMemo, useState } from "react";
import Info from "../Pages/Info";
import { getCurrentUser } from "../api/FirestoreAPI";
import Topbar from "../components/common/Topbar";

export default function InfoLayout(){
    const [currentUser, setCurrentUser] = useState({});

    useMemo(() => {
        getCurrentUser(setCurrentUser);
      }, []);
    return (
        <div>
            <Topbar currentUser={currentUser}/>
            <Info currentUser={currentUser}/>
        </div>
    )
}