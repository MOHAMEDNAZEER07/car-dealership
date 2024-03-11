// App.js
import React from 'react';
import './T.css';

import kavi from './image/kavi.jpg';
import dharnee from './image/dharnee.jpg'
import muke from './image/mukesh.jpg'
import nith from './image/nithish.jpg'

function Mem() {
  return (
    <div className="team-container">
      <h1>Our Team</h1>
      <div className="team-cards">
         <div className="team-card">
          <img src={kavi} alt="Engine Tuning Expert" />
          <h2>Kaviarasan</h2>
          <p>Email:Kaviarasan@gmail.com</p>
          <p>Ph:936214278</p>

        </div>
        <div className="team-card">
          <img src={dharnee} alt="Engine Tuning Expert" />
          <h2>Dharineesh</h2>
          <p>Email:dharineesh@gmail.com</p>
          <p>Ph:936214785</p>

        </div>
              
        <div className="team-card">
          <img src={nith} alt="Engine Tuning Expert" />
          <h2>Nithish</h2>
          <p>Email:nithish@gmail.com</p>
          <p>Ph:7021214785</p>

        </div>
        <div className="team-card">
          <img src={muke} alt="Engine Tuning Expert" />
          <h2>Mukesh</h2>
          <p>Email:mukesh@gmail.com</p>
          <p>Ph:7052647857</p>

        </div>
      </div>
    </div>
  );
}

export default Mem;
