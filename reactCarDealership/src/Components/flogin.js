import React, { useState } from 'react';
import axios from 'axios';
import '../login.css';


const Container=()=> {
    
    const [formData, setFormData] = useState({
        name : '',
      email: '',
      password: '',
      mail:'',
      pass :''
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // const handleChange1 = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    //   };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:5000/flogin', formData);
        alert(response.data.message);
        window.location.href('http://localhost:3000/Home');
      } catch (error) {
        console.error('Error signing in:', error);
        alert('Failed to sign in');
      }
    };
    const handleSubmit1 = async (e) => {
        e.preventDefault();
        try {
          await axios.post('http://localhost:5000/sup', formData);
          alert('User signed up successfully');
        } catch (error) {
          console.error('Error signing up:', error);
          alert('Failed to sign up');
        }
      };


  const signup = () => {
    document.querySelector(".login-form-container").style.cssText = "display: none;";
    document.querySelector(".signup-form-container").style.cssText = "display: block;";
    document.querySelector(".container").style.cssText = "background: linear-gradient(to bottom, rgb(56, 189, 149),  rgb(28, 139, 106));";
    document.querySelector(".button-1").style.cssText = "display: none";
    document.querySelector(".button-2").style.cssText = "display: block";
  };

  const login = () => {
    document.querySelector(".signup-form-container").style.cssText = "display: none;";
    document.querySelector(".login-form-container").style.cssText = "display: block;";
    document.querySelector(".container").style.cssText = "background: linear-gradient(to bottom, rgb(6, 108, 224),  rgb(14, 48, 122));";
    document.querySelector(".button-2").style.cssText = "display: none";
    document.querySelector(".button-1").style.cssText = "display: block";
  };
  

  return (
    <div className="container">
    

      {/* Data or Content */}
      <div className="box-1">
        <div className="content-holder">
          <h2>Hello!</h2>
          <button className="button-1" onClick={signup}>Sign up</button>
          <button className="button-2" onClick={login}>Login</button>
        </div>
      </div>

      {/* Forms */}
      <div className="box-2">
        <div className="login-form-container">
        <form>

          <h1>Login Form</h1>
          <input type="email" placeholder="Email" name="email" className="input-field"  value={formData.email} onChange={handleChange} />
          <br /><br />
          <input type="password"
            name="password"
             placeholder="Password"
              value={formData.password}
               onChange={handleChange}
             className="input-field" />
          <br /><br />
          <button onClick={handleSubmit} className="login-button" type="button">Login</button>
          </form>

        </div>

        {/* Create Container for Signup form */}
        <div className="signup-form-container" style={{ display: 'none' }}>
        <form>

          <h1>Sign Up Form</h1>
          <input type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
           className="input-field" />
          <br /><br />
          <input type="email"
            name="mail"
           placeholder="email"
          value={formData.mail}
          onChange={handleChange}

          className="input-field" />
          <br /><br />
          <input type="password"
          name="pass"
          value={formData.pass}
          onChange={handleChange}
          placeholder="Password" 
          className="input-field" />
          <br /><br />
          <button onClick={handleSubmit1} className="signup-button" type="button">Sign Up</button>
          </form>
        </div>
      </div>
     

    </div>
  );
}

export default Container;
