import React, { useEffect, useRef } from 'react';
import './Decoration.css';

const Decoration = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = [sectionRef.current, titleRef.current, subtitleRef.current];
    elements.forEach(el => el && observer.observe(el));

    return () => {
      elements.forEach(el => el && observer.unobserve(el));
    };
  }, []);

  return (
    <section id="decoration" className="decoration-section" ref={sectionRef}>
      <div className="decoration-bg"></div>
      <div className="floating-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      <div className="container">
             
                  <h2 className='decoration-title'>الديكور كما تحب</h2>
         
        <p className="decoration-subtitle" ref={subtitleRef}>
          لنصنع معاً مساحات تعكس ذوقك وأسلوبك
        </p>
      </div>
    </section>
  );
};

export default Decoration;
