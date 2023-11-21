import React ,  { useState } from 'react';
import { Carousel, Radio  } from 'antd';
import "./index.scss";
import Banner1 from "../../../assets/Banner1.jpg"
import Banner2 from "../../../assets/Banner2.jpg"
import Banner3 from "../../../assets/Banner3.jpg"
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import ModalRecycleComponent from '../ModalRecycle';

const CarrouselComponent = () => {

  const [modalOpen, setModalOpen] = useState(false);
    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
      
      const carouselItems = [
        { img: Banner1 },
        { img: Banner2 },
        { img: Banner3 },
      ];

      

return (
  <div className='body-container'>

   <Carousel className='carrousel-body' /* afterChange={onChange} */ autoplay >
      {carouselItems.map((item, index) => (
        <div key={index}>
          <img src={item.img} className='carrousel-img'/>
      </div>
      ))}
      </Carousel>

      </div>
  );

};

export default CarrouselComponent;
