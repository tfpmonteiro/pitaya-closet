import React, { useState, useEffect } from 'react';
import PromoSmall, { IPromoSmallProps } from './promoSmall';

import banner from './../../images/bannerXL.jpg';
import './../../css/promo.css';
import './../../css/promoExtraLarge.css';


const BannerExtraLarge: React.FC<{}> = () => {
  const [banners, setBanners] = useState<IPromoSmallProps[]>([]);

  useEffect(() => {
    if (banners.length < 1) {
      setBanners([{
        className: "promo-higher",
        description: "bíquinis pague 1 leve 2"
      },
      {
        className: "promo-left",
        description: "collection's wonder &jeans &animalprint"
      }])
    }
  }, [banners])

  return <>
    <div className="banner-content">

      {
        banners.map((item, index) => {
          return <PromoSmall key={index}
            className={item.className}
            description={item.description}
            image={item.image}
          />
        })
      }
      <div className="promo-center">
        <p className="outlet"> GRANDES MARCAS</p>
        <div className="up">
          <p>up</p>
          <p>up</p>
        </div>
        <div className="sixty">
          <p className="first">60</p>
          <p className="second">60</p>
        </div>
        <div className="percent">
          <p className="first">%</p>
          <p className="second">%</p>
        </div>
      </div>

      <img src={banner} alt="Outlet" />

    </div>
  </>
}

export default BannerExtraLarge;