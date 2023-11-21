import React, { useState } from "react";
import { AiOutlineClose  } from "react-icons/ai";
import { editProfile } from "../../../api/FirestoreAPI";

import "./index.scss";

export default function ProfileEdit({ onEdit,currentUser }) {
    const [editInputs, setEditInputs] = useState(currentUser);
    
     const getInput = (event) => {
        let { name, value } = event.target;
        let input = { [name]: value };
        setEditInputs({ ...editInputs,...input });
     
      }; 
      const updateProfileData = async () =>{
        await editProfile(currentUser?.id,editInputs);
        await onEdit();
      }

    return(
    <div className="profile-card">
        <div className="edit-btn">
            <AiOutlineClose  className="edit-icon"  onClick={onEdit} size={25}  />
        </div>
        <div className="profile-edit-inputs">
        <label>Nome</label>
        <input
          onChange={getInput}
          className="common-input"
          placeholder="Name"
          name="name"
          value={editInputs.name}
        />
        <label>Status</label>
        <input
          onChange={getInput}
          className="common-input"
          placeholder="Headline"
          value={editInputs.headline}
          name="headline"
        />
        <label>Pais</label>
        <input
          onChange={getInput}
          className="common-input"
          placeholder="Country"
          name="country"
          value={editInputs.country}
        />
        <label>Cidade</label>
        <input
          onChange={getInput}
          className="common-input"
          placeholder="City"
          name="city"
          value={editInputs.city}
        />
        <label>Empresa</label>
        <input
          onChange={getInput}
          className="common-input"
          placeholder="Company"
          value={editInputs.company}
          name="company"
        />

        <label>Website</label>
        <input
         onChange={getInput}
          className="common-input"
          placeholder="Website"
          name="website"
          value={editInputs.website}
        />
        <label>Sobre</label>
        <textarea
          placeholder="About Me"
          className="common-textArea"
          onChange={getInput}
          rows={5}
          
          name="aboutMe"
          value={editInputs.aboutMe}
        />

      </div>
      <div className="save-container">
        <button className="save-btn"  onClick={updateProfileData} >
          Save
        </button>
        </div>
    </div>
    )

}
