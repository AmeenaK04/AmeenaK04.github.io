import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./App.css";

function App() {
  const fullText = "Hi, I'm Ameena.";
  const [text, setText] = useState("");
  const [activeExperience, setActiveExperience] = useState("barclays");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 150); // typing speed 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className="container">

        {/* Navbar */}
        <nav className="navbar">
          <div className="left-nav">
            <div className="logo">Ameena Kamali</div>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>

          <div className="right-nav">
            <a href="https://github.com/AmeenaK04" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ameena-k-ba2920264/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:ameenakamali25@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="robot-container">
            <svg viewBox="0 0 120 120" width="200" height="200">
              {/* Head */}
              <rect x="30" y="20" width="60" height="40" rx="8" ry="8" fill="#20c997" />

              {/* Eyes */}
              <circle className="eye" cx="45" cy="40" r="5" fill="#ffffff" />
              <circle className="eye" cx="75" cy="40" r="5" fill="#ffffff" />

              {/* Pupils (animated) */}
              <circle className="pupil" cx="45" cy="40" r="2" fill="#000000" />
              <circle className="pupil" cx="75" cy="40" r="2" fill="#000000" />

              {/* Antennas */}
              <line className="antenna-left" x1="35" y1="20" x2="25" y2="10" stroke="#20c997" strokeWidth="3" strokeLinecap="round"/>
              <line className="antenna-right" x1="85" y1="20" x2="95" y2="10" stroke="#20c997" strokeWidth="3" strokeLinecap="round"/>

              {/* Body */}
              <rect x="35" y="60" width="50" height="40" rx="6" ry="6" fill="#1ca683" />

              {/* Arms */}
              <rect className="arm-left" x="20" y="60" width="15" height="25" fill="#20c997" />
              <rect className="arm-right" x="85" y="60" width="15" height="25" fill="#20c997" />
            </svg>
          </div>

          {/* Typewriter Text */}
          <h2 className="typewriter">{text}</h2>
          <p>Professional bug creator, occasional fixer.</p>
        </section>

        {/* About Section */}
        <section className="section" id="about">
          <h3>About Me</h3>
          <p>
            Computer Science with Artificial Intelligence student with hands-on internship experience delivering production-ready software. During my internships, I have contributed to UI design, automated reporting workflows, and integrated live data visualizations in collaboration with stakeholders.
          </p>
          <p>Here are some technologies I have worked with:</p>
          <div className="tech-badges">
            <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
            <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
            <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
            <img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP" />
            <img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html&logoColor=white" alt="HTML" />
            <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css&logoColor=white" alt="CSS" />
            <img src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white" alt="C" />
            <img src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white" alt="C++" />
            <img src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=csharp&logoColor=white" alt="C#" />
            <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
          </div>
          <p>Tools & Platforms:</p>
          <div className="tech-badges">
            <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
            <img src="https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="SQL" />
            <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
          </div>
          <p>
            Outside of academics and work, I enjoy playing chess, reading books, building robots, and playing video games in my free time.
          </p>
        </section>

        {/* Experience Section */}
        <section className="section" id="experience">
          <h3>Experience</h3>
          <div className="experience-container">
            {/* Left Side Navbar */}
            <div className="experience-nav">
              <button
                className={activeExperience === "barclays" ? "active" : ""}
                onClick={() => setActiveExperience("barclays")}
              >
                Barclays
              </button>
              <button
                className={activeExperience === "sheffield" ? "active" : ""}
                onClick={() => setActiveExperience("sheffield")}
              >
                Sheffield Hallam
              </button>
            </div>

            {/* Right Side Content */}
            <div className="experience-content">
              {activeExperience === "barclays" && (
                <div className="experience-item">
                  <h4>Technology Developer Internship • June 2025 – August 2025</h4>
                  <p><strong>Barclays • Knutsford, UK</strong></p>
                  <ul>
                    <li>Led agile sprints as Scrum Master, coordinating with stakeholders and product owners to deliver a full-stack Jira dashboard management application.</li>
                    <li>Designed and implemented UI components, automated reporting workflows, and integrated live data visualizations for production-level use.</li>
                    <li>Gathered and refined requirements through direct stakeholder engagement, ensuring solutions were functional, user-focused, and aligned with business needs.</li>
                    <li>Presented prototypes and progress to senior colleagues, incorporating feedback to enhance product quality.</li>
                    <li>Gained hands-on experience across the full software development lifecycle, from mockups to deployment.</li>
                  </ul>
                </div>
              )}

              {activeExperience === "sheffield" && (
                <div className="experience-item">
                  <h4>Course Ambassador & General Ambassador • June 2023 – Present</h4>
                  <p><strong>Sheffield Hallam University • Sheffield, UK</strong></p>
                  <ul>
                    <li>Engage with prospective students during Open Days and Clearing Days, providing honest insights into my course and sharing experiences at university.</li>
                    <li>Assisted in welcome talks, strengthening public speaking skills, particularly when addressing large groups of parents and prospective students.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="section" id="projects">
          <h3>Projects</h3>
          <div className="projects-container">
            <div className="project-card">
              <a href="https://github.com/AmeenaK04/MiniApps" target="_blank" rel="noopener noreferrer" className="github-link">
                <FaGithub />
              </a>
              <h4>MiniApp</h4>
              <p>The MiniApps Project is a collection of console-based C# applications designed to demonstrate simple yet functional utilities.</p>
            </div>

            <div className="project-card">
              <a href="https://github.com/AmeenaK04/Pomodoro_timer" target="_blank" rel="noopener noreferrer" className="github-link">
                <FaGithub />
              </a>
              <h4>Pomodoro Timer</h4>
              <p>Focus timer app to boost productivity using Pomodoro technique.</p>
            </div>

            <div className="project-card">
              <a href="https://github.com/AmeenaK04/Calculation" target="_blank" rel="noopener noreferrer" className="github-link">
                <FaGithub />
              </a>
              <h4>Calculation</h4>
              <p>Simple calculator application.</p>
            </div>

            <div className="project-card">
              <a href="https://github.com/AmeenaK04/Hospital_Management_System" target="_blank" rel="noopener noreferrer" className="github-link">
                <FaGithub />
              </a>
              <h4>Hospital Management System</h4>
              <p>A management system to organize patient records and hospital operations.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;