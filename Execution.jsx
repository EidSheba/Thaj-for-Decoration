import React from "react";
import "./Execution.css";
import img2 from "../assets/images/one.PNG";
import img3 from "../assets/images/IMG_8469.PNG";
import img4 from "../assets/images/IMG_8474.PNG";
import img5 from "../assets/images/IMG_8471.PNG";
import img6 from "../assets/images/IMG_8472.PNG";
import img7 from "../assets/images/IMG_8473.PNG";

const Execution = () => {
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    document.querySelectorAll('.execution [class^="div"]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="execution">
      <div className="parent-execution">
        <div className="div1-execution">
          <div className="content-execution">
            <h3>تنفيذنا</h3>
            <p>نَفِّذْ بِكُلِّ إِتْقانٍ. </p>
          </div>
        </div>
        <div
          className="div2-execution"
          style={{ backgroundImage: `url(${img2})` }}
        ></div>
        <div
          className="div3-execution"
          style={{ backgroundImage: `url(${img3})` }}
        ></div>
        <div className="div4-execution">
          <p>نحن نؤمن بأن التنفيذ المتقن هو أساس النجاح في كل مشروع</p>
          <p>
            نلتزم بأعلى معايير الجودة وندقق في كل التفاصيل لنضمن رضاكم التام
          </p>
        </div>
        <div
          className="div5-execution"
          style={{ backgroundImage: `url(${img5})` }}
        ></div>
        <div
          className="div6-execution"
          style={{ backgroundImage: `url(${img6})` }}
        ></div>
        <div
          className="div7-execution"
          style={{ backgroundImage: `url(${img7})` }}
        ></div>
        <div
          className="div8-execution"
          style={{ backgroundImage: `url(${img4})` }}
        ></div>
      </div>
    </div>
  );
};

export default Execution;
