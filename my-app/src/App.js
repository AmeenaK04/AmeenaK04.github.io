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
    }, 150);

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
            <a href="https://github.com/AmeenaK04" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/ameena-k-ba2920264/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="mailto:ameenakamali25@gmail.com"><FaEnvelope /></a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="robot-container">
            <svg viewBox="0 0 200 200" width="300" height="300">
              {/* Head */}
              <rect x="60" y="30" width="80" height="50" rx="10" ry="10" fill="#0b4d4b" stroke="#20c997" strokeWidth="2" />
              {/* Eyes */}
              <circle className="eye" cx="80" cy="50" r="6" fill="#ffffff" />
              <circle className="eye" cx="120" cy="50" r="6" fill="#ffffff" />
              {/* Pupils */}
              <circle className="pupil" cx="80" cy="50" r="2.5" fill="#000000" />
              <circle className="pupil" cx="120" cy="50" r="2.5" fill="#000000" />
              {/* Antennas */}
              <line className="antenna-left" x1="65" y1="30" x2="50" y2="15" stroke="#26c2b0" strokeWidth="2" strokeLinecap="round" />
              <line className="antenna-right" x1="135" y1="30" x2="150" y2="15" stroke="#26c2b0" strokeWidth="2" strokeLinecap="round" />
              {/* Body */}
              <rect x="60" y="85" width="80" height="50" rx="8" ry="8" fill="#073634" stroke="#20c997" strokeWidth="2" />
              {/* Arms */}
              <rect className="arm-left" x="25" y="85" width="25" height="30" fill="#0b4d4b" stroke="#20c997" strokeWidth="1" />
              <rect className="arm-right" x="150" y="85" width="25" height="30" fill="#0b4d4b" stroke="#20c997" strokeWidth="1" />
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
            <img src="https://img.shields.io/badge/Python-20c997?style=for-the-badge&logo=python&logoColor=black&color=white" alt="Python" />
            <img src="https://img.shields.io/badge/JavaScript-20c997?style=for-the-badge&logo=javascript&logoColor=black&color=white" alt="JavaScript" />
            <img src="https://img.shields.io/badge/React-20c997?style=for-the-badge&logo=react&logoColor=black&color=white" alt="React" />
            <img src="https://img.shields.io/badge/PHP-20c997?style=for-the-badge&logo=php&logoColor=black&color=white" alt="PHP" />
            <img src="https://img.shields.io/badge/HTML-20c997?style=for-the-badge&logo=html&logoColor=black&color=white" alt="HTML" />
            <img src="https://img.shields.io/badge/CSS-20c997?style=for-the-badge&logo=css&logoColor=black&color=white" alt="CSS" />
            <img src="https://img.shields.io/badge/C-20c997?style=for-the-badge&logo=c&logoColor=black&color=white" alt="C" />
            <img src="https://img.shields.io/badge/C++-20c997?style=for-the-badge&logo=cplusplus&logoColor=black&color=white" alt="C++" />
            <img src="https://img.shields.io/badge/C%23-20c997?style=for-the-badge&logo=csharp&logoColor=black&color=white" alt="C#" />
            <img src="https://img.shields.io/badge/TypeScript-20c997?style=for-the-badge&logo=typescript&logoColor=black&color=white" alt="TypeScript" />
          </div>
          <p>Tools & Platforms:</p>
          <div className="tech-badges">
            <img src="https://img.shields.io/badge/Git-20c997?style=for-the-badge&logo=git&logoColor=black&color=white" alt="Git" />
            <img src="https://img.shields.io/badge/SQL-20c997?style=for-the-badge&logo=mysql&logoColor=black&color=white" alt="SQL" />
            <img src="https://img.shields.io/badge/MongoDB-20c997?style=for-the-badge&logo=mongodb&logoColor=black&color=white" alt="MongoDB" />
          </div>
          <p>
            Outside of academics and work, I enjoy playing chess, reading books, building robots, and playing video games in my free time.
          </p>
        </section>

        {/* Experience Section */}
        <section className="section" id="experience">
          <h3>Experience</h3>
          <div className="experience-container">
            <div className="experience-nav">
              <button className={activeExperience === "barclays" ? "active" : ""} onClick={() => setActiveExperience("barclays")}>Barclays</button>
              <button className={activeExperience === "sheffield" ? "active" : ""} onClick={() => setActiveExperience("sheffield")}>Sheffield Hallam</button>
            </div>
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

            {/* MiniApp */}
            <div className="project-card">
              <a href="https://github.com/AmeenaK04/MiniApps" target="_blank" rel="noopener noreferrer" className="github-link"><FaGithub /></a>
              <h4>MiniApp</h4>
              <p>Collection of console-based applications designed to demonstrate simple yet functional utilities.</p>
              <p>C#</p>
            </div>

            {/* Pomodoro Timer */}
            <div className="project-card">
              <a href="https://github.com/AmeenaK04/Pomodoro_timer" target="_blank" rel="noopener noreferrer" className="github-link"><FaGithub /></a>
              <h4>Pomodoro Timer</h4>
              <p>Focus timer app to boost productivity using Pomodoro technique.</p>
              <p>Python</p>
            </div>

            {/* Calculation */}
            <div className="project-card">
              <a href="https://github.com/AmeenaK04/Calculation" target="_blank" rel="noopener noreferrer" className="github-link"><FaGithub /></a>
              <h4>Calculation</h4>
              <p>Simple calculator application.</p>
              <p>Python</p>
            </div>

            {/* Hospital Management System */}
            <div className="project-card">
              <a href="https://github.com/AmeenaK04/Hospital_Management_System" target="_blank" rel="noopener noreferrer" className="github-link"><FaGithub /></a>
              <h4>Hospital Management System</h4>
              <p>A management system to organize patient records and hospital operations.</p>
              <p>PHP, SQL, HTML, CSS</p>
            </div>

            {/* Sheffield Hallam University Projects */}
            <div className="project-card tooltip-card">
              <h4>University Projects & Modules • Sheffield Hallam University</h4>
              <p className="tooltip-text">
                <strong>Automating CGFCA for AI:</strong> Refactored legacy Conceptual Graph & Formal Concept Analysis tools into a modern NodeJS app, automating knowledge graph validation/reporting. Integrated CSV and draw.io for streamlined AI workflow analysis and enterprise data visualization.<br />
                <strong>Farming Dashboard:</strong> Interactive dashboard to monitor and visualize crop data for decision-making.<br />
                <strong>Mini Applications:</strong> Small C# tools (calculator, square root, text encryption/decryption) to demonstrate core programming/problem-solving skills.<br />
                <strong>Mini Gym:</strong> Full-stack gym website with membership management, staff CRUD operations, user authentication, payments, and automated tracking (PHP, HTML, CSS, SQL).<br />
                <strong>Hospital Management System:</strong> Full-stack web app for patient, staff, and admin management with authentication, CRUD, and database integration (PHP, HTML, CSS, SQL).<br />
                <strong>Tic Tac Toe:</strong> AI-powered game with rule-based strategies, Mini-Max + alpha-beta pruning, extended 5x5 boards, and performance evaluation (Python).<br />
                <strong>Algorithms & Databases:</strong> Implemented efficient data structures/algorithms for problem-solving and data management (C#).<br />
                <strong>Fake File System:</strong> C++ console app simulating an in-memory file system with navigation, file operations, sorting, and command-based interaction. Applied OOP, memory management, and advanced C++ concepts.
              </p>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}

export default App;
