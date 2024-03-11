/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';
import Services from './Services';
import FeaturedCars from './FeaturedCars';

const Home = () => {
  return (
    <>
      <div style={{ position: 'relative' }}>
        <img
          src="https://backiee.com/static/wpdb/wallpapers/1000x563/136142.jpg"
          alt="Description of the image"
          style={{ width: '100%', height: 'auto' }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#fff',
            textAlign: 'center',
          }}
        >
          <h1 style={{ paddingBottom:'670px',color:'black' }}>MOTO HUB</h1>
        </div>
      </div>
      <FeaturedCars />
      <center>
        <button style={{ borderRadius: '10%' }}>
          
          <Link to="/cars">Our Cars</Link>
         
        </button>
        <br/>
        <br/>
      </center>
      <Services />
      
    </>
  );
};

export default Home;
