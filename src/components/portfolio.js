import React, { useState, useEffect } from 'react';
import img from "../Assets/girl.avif";
import logo from "../Assets/logo.jpg";
import html from "../Assets/html.jpg";
import css from "../Assets/css.png";
import bootstrap from "../Assets/bootstrap.png";
import Js from "../Assets/Js.png";
import react from "../Assets/react.jpg";
import firebase from "../Assets/firebase.png";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" height={50} width={50} />
      </div>
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li onClick={() => scrollToSection('home')}>Home</li>
          <li onClick={() => scrollToSection('about')}>About</li>
          <li onClick={() => scrollToSection('skills')}>Skills</li>
          <li onClick={() => scrollToSection('projects')}>Projects</li>
          <li onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

const Home = () => (
  <section id="home" className="home">
    <div className="home-content">
      <h2>Hello, I'm</h2>
      <h1>Jayamani</h1>
      <p>A passionate Frontend Developer.</p>
      <p>Specializing in creating responsive and user-friendly web applications.</p>
    </div>
    <div className="home-image">
      <img src={img} alt="Jayamani" />
    </div>
  </section>
);

const About = () => (
  <section id="about" className="about">
    <h1>About Me</h1>
    <p>Hello! I'm Jayamani, an aspiring Frontend Developer eager to launch my career and creating beautiful and functional web applications. I have a strong passion for user-centric design and writing clean, efficient code. </p>
    <p> My journey in web development started with a fascination for how things work on the internet. Since then, I've honed my skills in HTML, CSS, and JavaScript, and I've become proficient in modern frameworks like React. I love taking on new challenges and continuously learning to stay up-to-date with the latest web technologies. </p>
  </section>
);

const Skills = () => {
  const skills = [
    { name: 'HTML5 (Experienced)', image: html },
    { name: 'CSS3 (Experienced)', image: css },
    { name: 'Bootstrap (Beginner)', image: bootstrap },
    { name: 'JavaScript (Intermediate)', image: Js },
    { name: 'React (Intermediate)', image: react },
    { name: 'Firebase (Beginner)', image: firebase },

  ];


  return (
    <section id="skills" className="skills">
      <h1>My Skills</h1>
      <div className="skill-list">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item">
            <img src={skill.image} alt={skill.name} className="skill-image" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my projects and skills.",
      technologies: ["React", "CSS", "Responsive Design"],
      liveDemo: "https://portfolio.example.com"
    },
    {
      title: "Weather App",
      description: "A real-time weather application with location-based forecasts.",
      technologies: ["React", "OpenWeatherMap API", "Geolocation"],
      liveDemo: "https://weather-dashboard-1.netlify.app/"
    },
    {
      title: "Travel Page",
      description: "An interactive travel blog with destination recommendations.",
      technologies: ["React", "CSS", "Responsive Design"],
      liveDemo: "https://travel-page-project-1.netlify.app/"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h1>My Projects</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="technology-tag">{tech}</span>
              ))}
            </div>
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="live-demo-link">
              Live Demo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

const Footer = () => (
  <footer className="footer">
    <p>&copy; 2024 Jayamani. All rights reserved.</p>
  </footer>
);

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="portfolio">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
}