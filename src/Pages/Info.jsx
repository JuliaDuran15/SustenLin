import React, {useEffect , useState} from "react";
import InfoComponent from "../components/InfoComponent";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import Loader from "../components/common/Loader";

export default function Info({currentUser}) {
   const [loading, setLoading] = useState(true);
    let navigate = useNavigate();
    useEffect(()=> {
        onAuthStateChanged(auth, (res) =>{
            if (!res?.accessToken) {
                navigate("/");
              } else {
                setLoading(false);
              }
        });
    },[]);
    return loading ? <Loader /> : <InfoComponent currentUser={currentUser} />;
}