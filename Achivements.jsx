import React, { useEffect, useRef } from 'react';
import './Achivements.css';

const Achivements = () => {
  const sectionRef = useRef(null);
  const numRefs = useRef([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const animateCount = (el, to) => {
      const duration = 1200; // ms
      const start = 0;
      const startTime = performance.now();

      const step = (now) => {
        const t = Math.min(1, (now - startTime) / duration);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - t, 3);
        const val = Math.floor(start + (to - start) * eased);
        el.textContent = val.toString();
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const startAnimation = () => {
      // Add in-view class for CSS-driven label animations
      if (sectionRef.current) {
        sectionRef.current.classList.add('in-view');
      }
      const targets = [54, 38, 103];
      const delays = [0, 200, 400]; // مشروع, مصمم, عميل
      numRefs.current.forEach((el, idx) => {
        if (!el) return;
        // If reduced motion, set immediately
        if (prefersReduced) {
          el.textContent = targets[idx].toString();
          return;
        }
        setTimeout(() => animateCount(el, targets[idx]), delays[idx]);
      });
    };

    // If reduced motion, show immediately without observer
    if (prefersReduced) {
      startAnimation();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="achievements" className="achievements" ref={sectionRef}>
      <div className="container">
        <p className="intro">
          
بدأنا من التنفيذ قبل التصميم، وهذا عطانا رؤية واقعية. نصمم لك اليوم تصاميم جميلة وقابلة للتنفيذ وتراعي ميزانيتك
        </p>

        <div className="stats" role="list">
          <div className="stat" role="listitem">
            <div className="value"><span ref={(el) => (numRefs.current[0] = el)}>0</span><span>+</span></div>
            <div className="label">مشروع</div>
          </div>
          <div className="stat" role="listitem">
            <div className="value"><span ref={(el) => (numRefs.current[1] = el)}>0</span><span>+</span></div>
            <div className="label">تنفيذ</div>
          </div>
          <div className="stat" role="listitem">
            <div className="value"><span ref={(el) => (numRefs.current[2] = el)}>0</span><span>+</span></div>
            <div className="label">عميل</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achivements;
