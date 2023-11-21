import React, { useEffect, useState } from "react"; 
import { useNavigate } from "react-router-dom";
import CarrouselComponent from "./common/Carrosel";
import ModalRecycleComponent from "./common/ModalRecycle";

export default function InfoComponent() {
    return (
    <div className="home-component">
       <CarrouselComponent/> 
        <ModalRecycleComponent/>
    </div>
    );
}