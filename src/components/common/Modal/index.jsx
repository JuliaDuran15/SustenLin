import React from "react";
import {Modal,Button} from "antd";
import "./index.scss";
import { AiOutlinePicture } from "react-icons/ai";


const ModalComponent = ({
    modalOpen,
    setModalOpen,
    setStatus,
    status,
    sendStatus}) => {
    
    
  
    return (
      <>
    
        <Modal
          title="Create post"
          centered
          open={modalOpen}
          onOk={() => {
            setModalOpen(false);
        }}
          onCancel={() => setModalOpen(false)}
          footer={[
            <Button 
            key="submit" 
            type="primary" 
            disabled={status.length >0? false: true}
            onClick={sendStatus}>
              Post
            </Button>,
          ]}
        >
          <input 
          className="modal-input"
          placeholder="Share some of your new share some of your new recycling efforts"
          onChange={(event) => setStatus(event.target.value)}
          vaLue={status}
          />
          
        
        </Modal>
      </>
    );
  };
  


export default ModalComponent;