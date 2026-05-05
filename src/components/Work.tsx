import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  {
    number: "01",
    name: "EcoBazaarX",
    category: "Full-Stack / AgriTech Platform",
    tools: "React.js, Tailwind CSS, Spring Boot, Java, MySQL, JWT",
    description:
      "Carbon-aware e-commerce platform for farmers with multi-role authentication, analytics dashboard, and eco-points system.",
    image: "/images/ecobazaar.png",
    github: "https://github.com/manavendr09/ECO-BAZAAR-X",
    demo: "#",
  },
  {
    number: "02",
    name: "Secure Document Management System",
    category: "Backend / Security System",
    tools: "Java, Spring Boot, MySQL, JWT, RBAC",
    description:
      "Secure platform for managing sensitive documents with role-based access control and authentication.",
    image: "/images/document.png",
    github: "https://github.com/manavendr09/Secure-Document-Management-System",
    demo: "#",
  },
  {
    number: "03",
    name: "IQ Bot",
    category: "AI / Chatbot",
    tools: "Python, Streamlit, NLP",
    description:
      "AI-powered chatbot for automated Q&A with intelligent response generation and interactive UI.",
    image: "/images/iqbot.png",
    github: "https://github.com/manavendr09/IQBot",
    demo: "#",
  },
  {
    number: "04",
    name: "Women Safety App",
    category: "Web App / Social Impact",
    tools: "JavaScript, React, APIs",
    description:
      "Safety-focused web application offering features like emergency alerts, location tracking, and quick response tools.",
    image: "/images/women.png",
    github: "https://github.com/manavendr09/WomenSafetyApp",
    demo: "#",
  },
  {
    number: "05",
    name: "Heart Disease Detection",
    category: "Machine Learning",
    tools: "Python, Scikit-learn, Pandas",
    description:
      "Machine learning model to predict heart disease risk using medical data with preprocessing and evaluation metrics.",
    image: "/images/heart.png",
    github: "https://github.com/manavendr09/Heart-Disease-Detection-",
    demo: "#",
  },
  {
    number: "06",
    name: "CropIQ",
    category: "Web / Agriculture Platform",
    tools: "HTML, CSS, JavaScript",
    description:
      "Basic agriculture-focused platform providing resources and information for farmers and crop management.",
    image: "/images/cropiq.png",
    github: "https://github.com/manavendr09/Mini-Project-CropIQ-",
    demo: "#",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX = 0;

    const calculateWidth = () => {
      const boxes = document.querySelectorAll(".work-box");
      const container = document.querySelector(".work-container");

      if (!boxes.length || !container) return;

      const boxWidth = (boxes[0] as HTMLElement).offsetWidth;
      const totalWidth = boxWidth * boxes.length;

      const containerWidth = (container as HTMLElement).offsetWidth;

      translateX = totalWidth - containerWidth + 100;
    };

    calculateWidth();
    window.addEventListener("resize", calculateWidth);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${translateX}`,
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: () => -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      window.removeEventListener("resize", calculateWidth);
    };
  }, []);

  return (
    <section className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.number}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>

                <h4>Tech Stack</h4>
                <p>{project.tools}</p>

                <h4>Description</h4>
                <p className="work-desc">{project.description}</p>

                <div className="work-links">
                  <a href={project.github} target="_blank">
                    GitHub
                  </a>
                  <a href={project.demo} target="_blank">
                    Live Demo
                  </a>
                </div>
              </div>

              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;