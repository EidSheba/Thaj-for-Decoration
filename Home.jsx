import React from 'react';
import './Home.css';
import logo2 from '../assets/images/logo2.png';

const Home = () => {
  return (
    <section id="home" className="home hero-center">
      <div className="container">
        <div className="hero">
          <img src={logo2} alt="Logo" className="hero-logo" />
          <h1 className="hero-title">نُصمّم بإتقان ونقدّم ما يُلهمك</h1>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">تواصل</a>
            <a href="#services" className="btn btn-ghost">اعمالنا</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
