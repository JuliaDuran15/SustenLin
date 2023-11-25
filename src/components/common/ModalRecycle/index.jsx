import React,{useState} from "react";
import {Modal,Button,Space} from "antd";
import "./index.scss";
import { AiOutlinePicture } from "react-icons/ai";




const ModalRecycleComponent = ()=>{
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);
  const [modal4Open, setModal4Open] = useState(false);
    
  
    

    return (
        
       <>
       <div className="info-main">
       <div className="info-details">
       <h1 className="About-recicle"> Aqui você encontra informações sobre Reciclagem e Descarte</h1>
       </div>
       </div>
       <div className="tenta">
        
      <button className="common-btn"type="primary" onClick={() => setModal1Open(true)}>
        Papel e Papelão
      </button>
        <Modal
          title="Saiba Mais sobre Reciclagem"
          centered
          open={modal1Open}
          onOk={() => {
            setModal1Open(false);
        }}
          onCancel={() => setModal1Open(false)}
          
        >
        <div className="info-modal">
        <h3>RECICLÁVEL</h3>
        <p>Caixas Longa Vida, jornais e revistas,
          páginas de caderno, formulários de computador, papel de fax,
          envelopes, fotocópias, caixas e embalagens
          em geral, restos de papel, rascunhos, provas,
          cartazes.</p>
        <h3>NÃO RECICLÁVEL</h3>
        <p>Papel carbono, etiquetas adesivas, mascaramento
          fita adesiva, guardanapos, fotografias, pontas de cigarro, sujeira
          papéis, papel sanitário.</p>
        
        
        </div>
        
        </Modal>

        <button className="common-btn"type="primary" onClick={() => setModal2Open(true)}>
        Vidro
      </button>
        <Modal
          title="Mais sobre reciclar vidros"
          centered
          open={modal2Open}
          onOk={() => {
            setModal2Open(false);
        }}
          onCancel={() => setModal2Open(false)}
          
        >
        <div className="info-modal">
        <h3>RECICLÁVEL</h3>
        <p>Recipientes em geral, garrafas
      de vários tamanhos, óculos.</p>
        <h3>NÃO RECICLÁVEL</h3>
        <p>Espelhos, vidros planos,
      lâmpadas, tubos de TV, cerâmica,
      porcelana.</p>
        
        
        </div>
        
        </Modal>
        <button className="common-btn"type="primary" onClick={() => setModal3Open(true)}>
        Plastico
      </button>
        <Modal
          title="Mais sobre reciclar Plastico"
          centered
          open={modal3Open}
          onOk={() => {
            setModal3Open(false);
        }}
          onCancel={() => setModal3Open(false)}
          
        >
        <div className="info-modal">
        <h3>RECICLÁVEL</h3>
        <p>Embalagens de refrigerantes, margarina e
        material de limpeza, café e
        copos de água, canos e tubos,
        sacolas plásticas em geral</p>
        <h3>NÃO RECICLÁVEL</h3>
        <p>Cabo de panela, tomadas</p>

        
        </div>
        
        </Modal>

        <button className="common-btn"type="primary" onClick={() => setModal4Open(true)}>
        Metal
      </button>
        <Modal
          title="Mais sobre reciclar Metal"
          centered
          open={modal4Open}
          onOk={() => {
            setModal4Open(false);
        }}
          onCancel={() => setModal4Open(false)}
          >

  
        <div className="info-modal">
          <h3>RECICLÁVEL</h3>
        <p>Lata de aço (lata de óleo, salsicha),
          lata de alumínio (refrigerantes)
          e outros restos de construção.</p>
        <h3>NÃO RECICLÁVEL</h3>
        <p>Clipes, pinças e esponjas de aço.
          Baterias/baterias comuns
          Eles devem ser enviados para
          fabricantes ou enviados para
          colecionadores especiais para colecionar
          materiais de gênero.</p>
        
        </div>
        
        </Modal>

        </div>
      </> 
       );
      };
    

  


export default ModalRecycleComponent;