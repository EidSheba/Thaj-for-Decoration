import React, { useEffect, useRef } from 'react';
import { FaCubes,FaRegEdit, FaChair, FaChartLine, FaPencilRuler,  } from 'react-icons/fa';
// import { } from "react-icons/fa";
import { MdChair } from "react-icons/md";
import './Services.css';

const Services = () => {
  const serviceRefs = useRef([]);
  const observer = useRef(null);

  useEffect(() => {
    // Create intersection observer
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.2 }
    );

    // Observe each service card
    const currentRefs = serviceRefs.current;
    currentRefs.forEach((ref) => observer.current.observe(ref));

    // Cleanup
    return () => {
      if (observer.current) {
        currentRefs.forEach((ref) => observer.current.unobserve(ref));
      }
    };
  }, []);

  // Add ref to each service card
  const addToRefs = (el) => {
    if (el && !serviceRefs.current.includes(el)) {
      serviceRefs.current.push(el);
    }
  };
  const services = [
    {
      icon: <MdChair className="service-icon" />,
      title: 'مخططات توزيع الأثاث ',
      // description: 'تصميم وتطوير مواقع ويب احترافية متجاوبة مع أحدث التقنيات' 
    },
    {
      icon: <FaPencilRuler className="service-icon" />,
      title: ' رسومات تنفيذية مفصلة',
      description: 'تصميم تطبيقات الجوال لنظامي iOS و Android بجودة عالية'
    },
    {
      icon: <FaRegEdit className="service-icon" />,
      title: '  جداول الكميات(BOQ)',
      description: 'حلول استضافة آمنة وسريعة بمواصفات عالية الجودة'
    },
    {
      icon: <FaCubes className="service-icon" />,
      title: 'لقطات ثلاثية الابعاد ',
      description: 'تصميم وإدارة قواعد البيانات باحترافية عالية'
    },
    {
      icon: <FaChair  className="service-icon" />,
      title: 'جداول الأثاث (FF&E) ',
      description: 'تحليل البيانات واستخراج التقارير لاتخاذ القرارات الصحيحة'
    },
    {
      icon: <FaChartLine className="service-icon" />,
      title: ' تنفيذ بأدق التفاصيل ',
      description: 'حلول أمنية متكاملة لحماية بياناتك ومواقعك الإلكترونية'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">خدماتنا</h2>
          <p className="section-description">نقدم لكم أفضل الحلول التقنية المتكاملة</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => {
            // Determine animation class based on position
            let animationClass = '';
            if (index % 3 === 0) {
              animationClass = 'slide-from-right';
            } else if (index % 3 === 1) {
              animationClass = 'scale-up';
            } else {
              animationClass = 'slide-from-left';
            }
            
            return (
              <div 
                key={index} 
                ref={addToRefs}
                className={`service-card ${animationClass}`}
              >
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-hover"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
