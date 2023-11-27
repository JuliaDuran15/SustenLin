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
        <div className="info-main">
       <div className="info-details">
       <h1 className="About2-recicle"> O que NÃO pode ser descartado sem cuidados proprios:  </h1>

       <li className="about2-extra-info">Pilhas e baterias: Esses dispositivos muitas vezes contêm metais pesados, como mercúrio, chumbo e cádmio, que são prejudiciais ao meio ambiente. Pilhas e baterias devem ser descartadas em pontos de coleta específicos para reciclagem.</li>
       <li className="about2-extra-info">Produtos eletrônicos: Equipamentos eletrônicos, como computadores, telefones celulares e televisores, frequentemente contêm substâncias tóxicas, incluindo metais pesados e produtos químicos. Eles devem ser encaminhados para reciclagem adequada.</li>
       <li className="about2-extra-info">Medicamentos vencidos: Não devem ser jogados no lixo comum ou no esgoto, pois podem contaminar a água. Muitas farmácias e postos de saúde oferecem locais para devolução segura de medicamentos.</li>
       <li className="about2-extra-info">Óleos e gorduras: Não devem ser despejados na pia, pois podem entupir encanamentos e causar poluição da água. O descarte adequado envolve a coleta em recipientes apropriados para reciclagem.</li>
       <li className="about2-extra-info">Pneus: Pneus descartados de forma inadequada podem ser criadouros de mosquitos e causar impactos ambientais. Muitos centros de reciclagem aceitam pneus para processamento adequado.</li>
       <li className="about2-extra-info">Agulhas e seringas: Devem ser descartadas em recipientes próprios, conhecidos como "pontocentros" ou "pontos de coleta". Isso evita riscos de acidentes e contaminação.</li>

       </div>
       </div>
        
      </> 
       );
      };
    

  


export default ModalRecycleComponent;