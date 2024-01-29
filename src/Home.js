import React from 'react'
import "./Home.css";
import banner from './assets/images/banner.jpg';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className="home_container">
      <img className='home__image' src={banner} alt="bannerImg" />
      <div className="home__row">
        {/* Product */}
        <Product
        id='002'
        title='The Lean Startup' 
        price={299} 
        image={'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'} 
        rating={4}/>
 
        <Product
          id='002'
          title="iPhone 14 Pro, 128GB, Silver"
          price={129999}
          rating={5}
          image="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg?q=70&crop=false" />
          <Product
          id='003'
          title="Home Blackout Curtains 7 Feet Long Set of 1 Room Darkening Door Curtain Plain | Maroon"
          price={1249}
          rating={5}
          image="https://m.media-amazon.com/images/I/41kXz-P2e2L._SX300_SY300_QL70_FMwebp_.jpg" />
      </div>
      <div className="home__row">
      <Product
          id='004'
          title="HyperX Cloud Core On-Ear Wired Gaming Headset with Mic for PC, DTS Headpone:X (Black)"
          price={4999}
          rating={4}
          image="https://m.media-amazon.com/images/I/712CzUClvjL._SL1500_.jpg" />
          <Product
          id='005'
          title="The Mahabharata Secret Paperback"
          price={2012}
          rating={4}
          image="https://m.media-amazon.com/images/P/9383202319.01._SCLZZZZZZZ_SX500_.jpg" />
          <Product
          id='006'
          title="Cloth Fusion 100% Room Darkening Blackout Door Curtain 7 feet Set of 2 | Thermal Insulated Heavy Polyester Solid Curtain | Grey"
          price={1549}
          rating={5}
          image="https://m.media-amazon.com/images/I/61R31xgOA8L._SL1500_.jpg" />
      
      </div>
      <div className="home__row">
        {/* Product */}
        <Product
          id='007'
          title="LG UltraWide 73. 66 cm (29 Inch) WFHD (2560 x 1080) IPS Display - HDR 10, Radeon FreeSync, sRGB 99%, Slim Bezel, Multitasking Monitor - 29WL500 (Black)_29WL500-B"
          price={17480}
          rating={2}
          image="https://m.media-amazon.com/images/I/71PP5CrY9GL._SL1500_.jpg" /> 
      </div>
      </div>
    </div>
  )
}

export default Home
