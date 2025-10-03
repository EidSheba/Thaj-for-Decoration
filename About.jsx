import React, { useEffect, useRef } from 'react';
import './About.css';
import logo2 from '../assets/images/about.jpeg';
import logo from '../assets/images/logo.jpeg';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const el = sectionRef.current;
    if (!el) return;

    const addInView = () => el.classList.add('in-view');

    if (prefersReduced) {
      addInView();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            addInView();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="container about-grid">
       
        {/* Right content */}
        <div className="about-content">
          <h2 className="about-title">ثاج </h2>
          <p className="about-text">
            في “ثاج” ما دخلنا مجال التصميم على ورق…
بدايتنا كانت من أرض الواقع، من موقع التنفيذ نفسه. خبرتنا في تنفيذ المشاريع سبقت مرحلة التصميم، وهذا اللي يميزنا اليوم ،  نصمم بعيون المنفذ، ونفكر بتفاصيل المكان من أول مسمار لآخر لمسة.
نعرف وش ينجح وش يتعثر، ونعرف كيف نوازن بين الجمال والميزانية والعملية.
عشان كذا كل تصميم نقدمه لك ما هو مجرد شكل حلو، بل خطة واقعية تضمن لك نتيجة حقيقية على أرض الواقع
          </p>

          {/* <ul className="about-list">
            <li>تصاميم مخصصة تناسب ذوقك وميزانيتك</li>
            <li>تنفيذ احترافي ومتابعة دقيقة للمراحل</li>
            <li>التزام بالمواعيد ونتائج تفوق التوقعات</li>
          </ul> */}

          
        </div>
         {/* Left visuals */}
        <div className="about-visuals">
          <div className="stack">
            <img src={logo2} alt="عرض عمل 1" className="shot primary" />
            <img src={logo} alt="عرض عمل 2" className="shot floating" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
