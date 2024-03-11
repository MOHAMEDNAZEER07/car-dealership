import React from 'react';
// eslint-disable-next-line no-unused-vars
import Styles from './Styles.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import Cars from './Components/Cars';
// import Service from './Components/S';
import SingleCar from './Components/SingleCar';
import { Route, Switch } from 'react-router-dom';
import Entry from './Components/Entry';
import LocationPage from './Components/Address';
import Team from './Components/Team';
import Ser from './Components/S';
import Mem from './Components/Member';

function App() {
  return (

    <>
      <Navbar />

      <Switch>
      <Route exact path='/' component={Entry} />

        <Route exact path='/Home' component={Home} />
        <Route exact path='/cars' component={Cars} />
        <Route exact path='/Address' component={LocationPage} />
        <Route exact path='/Team' component={Team} />
        <Route exact path='/S' component={Ser} />
        <Route exact path='/Member' component={Mem} />

        <Route exact path='/car/:slug' component={SingleCar} />

      </Switch>
      <br/>
       <br/>
      <section id="sec">
        <p>We are passionate about the cars</p>
      <p>&copy; 2024 Moto-Hub. All rights reserved.</p>
      </section>
    </>


  );
}

export default App;
