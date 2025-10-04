import { useEffect, useRef } from 'react';
import './Desgin.css';
import oneImage from '../assets/images/desgin/one.JPG';
import twoImage from '../assets/images/desgin/two.JPG';
import threeImage from '../assets/images/desgin/three.JPG';
import fourImage from '../assets/images/desgin/four.JPG';
import fiveImage from '../assets/images/desgin/five.JPG';
import sexImage from '../assets/images/desgin/sex.JPG';
import logo2Image from '../assets/images/logo2.png';

function Desgin() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const animatedElements = sectionRef.current.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="parent" ref={sectionRef}>
      <div className="div1 animate-on-scroll slide-in-right">
        <div className="logo-container">
          <img src={logo2Image} alt="Logo" className="logo-image" />
          <div className="works-text">اعمالنا</div>
        </div>
        <div className="love-text">صُمِّمْتُ بِكُلِّ حُبٍّ  </div>
      </div>
      <div className="div2 animate-on-scroll zoom-in">
        <img src={oneImage} alt="Design 1" />
      </div>
      <div className="div3 animate-on-scroll slide-in-left">
        <img src={threeImage} alt="Design 2" />
      </div>
      <div className="div4 animate-on-scroll slide-in-left">
        <h4> ❞ مساحة تنبض بالحياة، حيث تلتقي الخطوط العصرية مع التفاصيل الدقيقة لتصنع أجواء راقية ومميزة. تتناغم المواد الطبيعية مع الألوان الهادئة لتمنح المكان روحًا دافئة وهوية فريدة.❝</h4>
        <h4>❞ تصميم ديكور يوازن بين الجمال والوظيفة؛ لمسات أنيقة، ألوان متناغمة، وإضاءة مدروسة تمنح كل زاوية شخصية خاصة بها.❝ </h4>
      </div>
      <div className="div5 animate-on-scroll slide-in-bottom">
        <img src={sexImage} alt="Design 4" />
      </div>
      <div className="div6 animate-on-scroll slide-in-bottom">
        <img src={fiveImage} alt="Design 5" />
      </div>
      <div className="div7 animate-on-scroll slide-in-right">
        <img src={fourImage} alt="Design 6" />
      </div>
      <div className="div8 animate-on-scroll slide-in-left">
        <img src={sexImage} alt="Design 7" />
      </div>
    </div>
  );
}


    

export default Desgin;