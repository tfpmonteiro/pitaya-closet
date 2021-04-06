import React from 'react';

import t001 from './../../images/tshits/t001.jpg';
import t002 from './../../images/tshits/t002.jpg';
import t003 from './../../images/tshits/t003.jpg';
import t004 from './../../images/tshits/t004.jpg';
import t005 from './../../images/tshits/t005.jpg';
import t006 from './../../images/tshits/t006.jpg';

import './../../css/clothes.css';

const Clothes: React.FC<{}> = () => {
  return <>
    <div className="clothes-content">
      <div className="clothes-image">
        <img src={t001} alt="T-SHIRT REF001" />
        <div className="clothers-descriptions">
          <small>REF.: T001</small>
          <h3>Descrição T-shirt</h3>
          <span>Textinho com informações da tshirt, como tecido, tipo da estampa ou combinações de looks.</span>
          <h3 className="price-outlet">R$89,90</h3>
          <h3 className="price">R$119,90</h3>
          <button> Comprar </button>
        </div>
      </div>
      <div className="clothes-image">
        <img src={t002} alt="T-SHIRT REF002" />
        <div className="clothers-descriptions">
          <small>REF.: T002</small>
          <h3>Descrição T-shirt</h3>
          <span>Textinho com informações da tshirt, como tecido, tipo da estampa ou combinações de looks.</span>
          <h3 className="price-outlet">R$89,90</h3>
          <h3 className="price">R$119,90</h3>
          <button> Comprar </button>
        </div>
      </div>

       <div className="clothes-image">
        <img src={t003} alt="T-SHIRT REF001" />
        <div className="clothers-descriptions">
          <small>REF.: T003</small>
          <h3>Descrição T-shirt</h3>
          <span>Textinho com informações da tshirt, como tecido, tipo da estampa ou combinações de looks.</span>
          <h3 className="price-outlet">R$89,90</h3>
          <h3 className="price">R$119,90</h3>
          <button> Comprar </button>
        </div>
      </div>
      <div className="clothes-image">
        <img src={t004} alt="T-SHIRT REF002" />
        <div className="clothers-descriptions">
          <small>REF.: T004</small>
          <h3>Descrição T-shirt</h3>
          <span>Textinho com informações da tshirt, como tecido, tipo da estampa ou combinações de looks.</span>
          <h3 className="price-outlet">R$89,90</h3>
          <h3 className="price">R$119,90</h3>
          <button> Comprar </button>
        </div>
      </div>
       <div className="clothes-image">
        <img src={t005} alt="T-SHIRT REF001" />
        <div className="clothers-descriptions">
          <small>REF.: T005</small>
          <h3>Descrição T-shirt</h3>
          <span>Textinho com informações da tshirt, como tecido, tipo da estampa ou combinações de looks.</span>
          <h3 className="price-outlet">R$89,90</h3>
          <h3 className="price">R$119,90</h3>
          <button> Comprar </button>
        </div>
      </div>
      <div className="clothes-image">
        <img src={t006} alt="T-SHIRT REF002" />
        <div className="clothers-descriptions">
          <small>REF.: T006</small>
          <h3>Descrição T-shirt</h3>
          <span>Textinho com informações da tshirt, como tecido, tipo da estampa ou combinações de looks.</span>
          <h3 className="price-outlet">R$89,90</h3>
          <h3 className="price">R$119,90</h3>
          <button> Comprar </button>
        </div>
      </div>
    </div>
  </>
}

export default Clothes;