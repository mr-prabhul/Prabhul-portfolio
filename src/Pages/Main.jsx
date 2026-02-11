import React, { useState } from "react";
import "./Main.Style.css";
import git from "../Pages/github_270798.png"
import linkedin from "../Pages/social_14072078.png"
import pro from "../Pages/IMG20250513100749.jpeg"
import bike from "../Pages/motorcycle.png"
import dict from "../Pages/dictionary.png"
import analy from "../Pages/analysis.png"
import email from "../Pages/email.png"
import call from "../Pages/phone-call.png"
import { getBotReply } from "../Pages/chatbot";


const Main = () => {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
  { from: "bot", text: "Hi 👋 How can I help you?" }
]);

const [userInput, setUserInput] = useState("");

const sendMessage = () => {
  if (!userInput || !userInput.trim()) return;

  setMessages((prev) => [
    ...prev,
    { from: "user", text: userInput },
    { from: "bot", text: getBotReply(userInput) }
  ]);

  setUserInput("");
};




  return (
    <div id="page">
      <header className="navbar">
        <div className="nav-container">

          <ul className={`nav-links ${open ? "open" : ""}`}>
            <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
            <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)}> Contact</a></li>
          </ul>

          <div
            className={`hamburger ${open ? "active" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </header>


    

      <section className="hero" id="home">
        <div className="hero-content">
          <h1 className="hero-name">
            PRABHUL <span>PS</span>
          </h1>

          <h2 className="hero-title">Welcome to My Portfolio</h2>

          <p className="hero-subtitle">
            Exploring AI, ML & Data Science
          </p>

          <div className="hero-icons">
            <div className="icon"><a href="https://github.com/mr-prabhul"><img src={git} alt="github" id="png"/></a></div>
            <div className="icon"><a href="https://www.linkedin.com/in/prabhulps/"><img src={linkedin} alt="linked_in" id="png" /></a></div>
          </div>

          <p className="hero-role">AI & ML Engineer</p>

          <p className="hero-skills">
            Building Intelligent Systems • Python • NLP • Deep Learning
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="#contact" className="btn secondary">Contact Me</a>
          </div>
        </div>
      </section>


{/* ===== FLOATING CHATBOT ===== */}

<input type="checkbox" id="chat-toggle" hidden />

<label htmlFor="chat-toggle" className="chat-bubble">
  🤖
</label>

<div className="chat-window">
  <div className="chat-header">
    Chat with me
    <label htmlFor="chat-toggle" className="chat-close">✕</label>
  </div>

  <div className="chat-body">
    {messages.map((msg, i) => (
      <div key={i} className={`msg ${msg.from}`}>
        {msg.text}
      </div>
    ))}
  </div>

 
  <form
    className="chat-input"
    onSubmit={(e) => {
      e.preventDefault();
      e.stopPropagation();
      sendMessage();
    }}
  >
    <input
      type="text"
      placeholder="Type a message…"
      value={userInput}
      onChange={(e) => setUserInput(e.target.value)}
    />

    <button type="submit">➤</button>
  </form>
</div>

{/* ===== FLOATING CHATBOT END ===== */}

      
    
        <section className="abouts" id="about">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 profile">
        <h1 className="about-title">
          About <span>Me</span>
        </h1>

        <p className="about-text">
          I’m a Machine Learning Engineer and Python Developer who enjoys building
          real-world, data-driven applications. I have hands-on experience across
          the development lifecycle, from understanding requirements to building,
          deploying, and improving scalable solutions.
          <br /><br />
          My strengths include Python, machine learning, and web technologies,
          with experience in data analysis, APIs, and interactive applications.
          I focus on writing clean, efficient code and turning complex problems
          into practical solutions.
          <br /><br />
          I’m a quick learner who enjoys collaboration, continuous improvement,
          and working with modern tools. I’m currently seeking opportunities to
          grow as a developer while contributing to impactful and reliable
          software products.
        </p>
      </div>


      <div className="col-lg-6 about-img">
        <img src={pro} alt="Profile" className="profile-photo" />
      </div>

    </div>
  </div>
</section>

  <section id="projects">
  <div className="project-head">
    <h1>Featured Projects</h1>
  </div>

  <div className="container">
    <div className="row">


      <div className="col-lg-4 col-md-6 mb-4">
        <div className="project-card">
          <div className="project-icon">
            <a href="https://github.com/mr-prabhul/-Machine-Learning-project-to-predict-two-wheeler-brand-using-synthetic-data-and-Streamlit-"><img src={bike} alt="Two Wheeler Project" /></a>
          </div>

          <h3 className="project-title">
            Two-Wheeler Brand Prediction System
          </h3>

          <p className="project-desc">
            A machine learning–powered web application that predicts the most
            suitable two-wheeler brand based on user preferences using
            data-driven recommendations.
          </p>

          <div className="tech-used">
            <span>Machine Learning</span>
            <span>Python</span>
            <span>Pandas</span>
            <span>NumPy</span>
            <span>Scikit-learn</span>
            <span>Streamlit</span>
          </div>
        </div>
      </div>


      <div className="col-lg-4 col-md-6 mb-4">
        <div className="project-card">
          <div className="project-icon">
            <a href="https://github.com/mr-prabhul/Multilingual-Speaking-Dictionary"><img src={dict} alt="Speaking Dictionary" /></a>
          </div>

          <h3 className="project-title">
            Speaking Dictionary with Translation & TTS
          </h3>

          <p className="project-desc">
            A multilingual dictionary application that supports translation and
            text-to-speech using NLP techniques with an interactive web interface.
          </p>

          <div className="tech-used">
            <span>Python</span>
            <span>NLP</span>
            <span>NLTK</span>
            <span>Text-to-Speech</span>
            <span>Streamlit</span>
          </div>
        </div>
      </div>


      <div className="col-lg-4 col-md-6 mb-4">
        <div className="project-card">
          <div className="project-icon">
            <a href="https://github.com/mr-prabhul"><img src={analy} alt="Sales Dashboard" /></a>
          </div>

          <h3 className="project-title">
            Sales & Profit Dashboard
          </h3>

          <p className="project-desc">
            An interactive dashboard visualizing sales performance, profit
            margins, and regional KPIs to support data-driven business decisions.
          </p>

          <div className="tech-used">
            <span>Power BI</span>
            <span>Excel</span>
            <span>Data Analysis</span>
            <span>Visualization</span>
            <span>Business Intelligence</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
<section id="experience">
      <div className="experience-head">
        <h1>Experience Timeline</h1>
        <p>My journey in data science and software development</p>
      </div>

      <div className="timeline">


        <div className="timeline-item left">
          <div className="timeline-card">
            <h3>Data Analyst / Data Science Associate</h3>
            <span className="company">Techolas Technologies Pvt Ltd</span>
            <span className="date">2024 – 2025 | Calicut</span>

            <p>
              Worked on end-to-end data science and machine learning workflows,
              including data cleaning, exploratory data analysis, feature
              engineering, and model evaluation.
            </p>

            <div className="tech-used">
              <span>Python</span>
              <span>Machine Learning</span>
              <span>Deep Learning</span>
              <span>NLP</span>
              <span>Computer Vision</span>
              <span>EDA</span>
              <span>Streamlit</span>
              <span>Power BI</span>
            </div>
          </div>
        </div>

        <div className="timeline-item right">
          <div className="timeline-card">
            <h3>Web Designer & Developer (Intern)</h3>
            <span className="company">Zonemac Solutions</span>
            <span className="date">2024 | Calicut</span>

            <p>
              Designed and developed responsive websites using HTML, CSS,
              JavaScript, and PHP. Worked on UI/UX improvements and optimized
              website performance.
            </p>

            <div className="tech-used">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>PHP</span>
              <span>MySQL</span>
            </div>
          </div>
        </div>

        <div className="timeline-item left">
          <div className="timeline-card">
            <h3>Junior Accountant</h3>
            <span className="company">Team Thai Aghin Road Ways</span>
            <span className="date">2023 – 2024 | Maharashtra</span>

            <p>
              Managed accounts, GST entries, invoice preparation, and financial
              data reporting, supporting business and logistics decisions.
            </p>

            <div className="tech-used">
              <span>Accounting</span>
              <span>GST</span>
              <span>Excel</span>
              <span>Data Reporting</span>
            </div>
          </div>
        </div>
      </div>
    </section>

          <section id="tech">
          <div className="tech-head">
            <h1>Tech Stack</h1>
            <p>Technologies and tools I use to build intelligent systems</p>
          </div>

          <div className="tech-grid">

            <div className="tech-card">
              <h3>Programming Languages</h3>

              <div className="skill">
                <div className="skill-top">
                  <span>🐍 Python</span><span>95%</span>
                </div>
                <div className="bar"><div style={{ width: "95%" }}></div></div>
              </div>

              <div className="skill">
                <div className="skill-top">
                  <span>🗄️ SQL</span><span>95%</span>
                </div>
                <div className="bar"><div style={{ width: "95%" }}></div></div>
              </div>

              <div className="skill">
                <div className="skill-top">
                  <span>⚡ JavaScript</span><span>85%</span>
                </div>
                <div className="bar"><div style={{ width: "85%" }}></div></div>
              </div>

              <div className="skill">
                <div className="skill-top">
                  <span>📊 R</span><span>80%</span>
                </div>
                <div className="bar"><div style={{ width: "80%" }}></div></div>
              </div>
            </div>

            <div className="tech-card">
              <h3>AI / ML Frameworks</h3>

              <div className="skill">
                <div className="skill-top">
                  <span>🧠 TensorFlow</span><span>90%</span>
                </div>
                <div className="bar"><div style={{ width: "90%" }}></div></div>
              </div>

              <div className="skill">
                <div className="skill-top">
                  <span>🔥 PyTorch</span><span>80%</span>
                </div>
                <div className="bar"><div style={{ width: "80%" }}></div></div>
              </div>

              <div className="skill">
                <div className="skill-top">
                  <span>📈 Scikit-learn</span><span>95%</span>
                </div>
                <div className="bar"><div style={{ width: "95%" }}></div></div>
              </div>
            </div>

            <div className="tech-card">
              <h3>Data & Visualization</h3>

              <div className="skill">
                <div className="skill-top">
                  <span>🐼 Pandas</span><span>95%</span>
                </div>
                <div className="bar"><div style={{ width: "95%" }}></div></div>
              </div>

              <div className="skill">
                <div className="skill-top">
                  <span>🔢 NumPy</span><span>95%</span>
                </div>
                <div className="bar"><div style={{ width: "95%" }}></div></div>
              </div>

              <div className="skill">
                <div className="skill-top">
                  <span>📊 Power BI</span><span>90%</span>
                </div>
                <div className="bar"><div style={{ width: "90%" }}></div></div>
              </div>

              <div className="skill">
                <div className="skill-top">
                  <span>📉 Excel</span><span>95%</span>
                </div>
                <div className="bar"><div style={{ width: "95%" }}></div></div>
              </div>
            </div>

            <div className="tech-card">
              <h3>Tools & Platforms</h3>
              <div className="skill">
                <div className="skill-top">
                  <span>🐳 Docker</span><span>70%</span>
                </div>
                <div className="bar"><div style={{ width: "70%" }}></div></div>
              </div>

              <div className="skill">
                <div className="skill-top">
                  <span>🔧 Git</span><span>90%</span>
                </div>
                <div className="bar"><div style={{ width: "90%" }}></div></div>
              </div>
            </div>

          </div>
        </section>

        <section id="contact">
  <div className="contact-wrapper">

    <h1 className="contact-title">Let's Connect</h1>

    <p className="contact-subtitle">
      Ready to collaborate on the next big AI innovation?
      Let's build something amazing together.
    </p>

    <div className="contact-grid">

      <a
        href="mailto:ichayanprabhul2724@gmail.com"
        className="contact-card"
      >
        <img src={email} alt="Email" />
        <span>ichayanprabhul2724@gmail.com</span>
      </a>

      <a
        href="tel:+916238820472"
        className="contact-card"
      >
        <img src={call} alt="Phone" />
        <span>+91 62388 20472</span>
      </a>

      <a
        href="https://github.com/mr-prabhul"
        target="_blank"
        rel="noreferrer"
        className="contact-card"
      >
        <img src={git} alt="GitHub" />
        <span>https://github.com/mr-prabhul</span>
      </a>

      <a
        href="https://www.linkedin.com/in/prabhulps/"
        target="_blank"
        rel="noreferrer"
        className="contact-card"
      >
        <img src={linkedin} alt="LinkedIn" />
        <span>https://www.linkedin.com/in/prabhulps/</span>
      </a>

    </div>
  </div>
</section>

    </div>
  );
};

export default Main;
