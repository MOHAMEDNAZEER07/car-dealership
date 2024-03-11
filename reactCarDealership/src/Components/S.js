import React from 'react';
import './service.css'; 
import carwash from './image/carwash.jpg';
import enginetuning from './image/enginetuning.jpg';
import mechanic from './image/mechanic.jpg';
import modification from './image/modification.jpg';
import painting from './image/painting.jpg';
import stickering from './image/stickering.jpg';
import detailing from './image/detailing.jpg';
import tireService from './image/tireService.jpg';

const services = [
  { 
    name: 'Car Wash', 
    image: carwash, 
    description: 'Get your car washed and cleaned professionally.'
  },
  { 
    name: 'Mechanic Service', 
    image: mechanic, 
    description: 'Professional mechanical service for your vehicle.'
  },
  { 
    name: 'Engine Tuning', 
    image: enginetuning, 
    description: 'Optimize your engine performance and efficiency.'
  },
  { 
    name: 'Painting', 
    image: painting, 
    description: 'Custom painting and color enhancement for your vehicle.'
  },
  { 
    name: 'Stickering', 
    image: stickering, 
    description: 'Custom stickering and graphics for your vehicle.'
  },
  { 
    name: 'Modification', 
    image: modification, 
    description: 'Vehicle modification services as per your requirements.'
  },
  { 
    name: 'Detailing', 
    image: detailing, 
    description: 'Detailed interior and exterior cleaning for your vehicle.'
  },
  { 
    name: 'Tire Service', 
    image: tireService, 
    description: 'Professional tire maintenance and replacement services.'
  },
];

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <img src={service.image} alt={service.name} />
      <div className="service-name">{service.name}</div>
      <div className="service-description">{service.description}</div>
    </div>
  );
};

const ServiceList = () => {
  return (
    <div className="service-list">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  );
};

const Ser = () => {
  return (
    <div className="app">
      <br/>
      <br/>
      
      <h1>Our Services</h1>
      <br/>
      <br/>
      <ServiceList />
    </div>
  );
};

export default Ser;
