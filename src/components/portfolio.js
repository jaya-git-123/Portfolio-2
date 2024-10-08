import React, { useState } from 'react';
import img from "../Assets/girl.avif";
import logo from "../Assets/logo.jpg";

const Navbar = ({ setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" height={50} width={50}  />
      </div>
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li onClick={() => handleNavClick('home')}>Home</li>
          <li onClick={() => handleNavClick('about')}>About</li>
          <li onClick={() => handleNavClick('skills')}>Skills</li>
          <li onClick={() => handleNavClick('projects')}>Projects</li>
          <li onClick={() => handleNavClick('contact')}>Contact</li>
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
  <section className="home">
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
  <section className="about">
    <h1>About Me</h1>
    <p>
      Hello! I'm Jayamani, an aspiring Frontend Developer eager to launch my career and creating 
      beautiful and functional web applications. I have a strong passion for user-centric 
      design and writing clean, efficient code.
    </p>
    <p>
      My journey in web development started with a fascination for how things work on the 
      internet. Since then, I've honed my skills in HTML, CSS, and JavaScript, and I've 
      become proficient in modern frameworks like React. I love taking on new challenges 
      and continuously learning to stay up-to-date with the latest web technologies.
    </p>
  </section>
);

const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBmaWxsPSIjZjdkZjFlIiBkPSJNMCAwaDQ0OHY1MTJIMFYwem0yNDMuOCA0MzEuNGMxMC40IDE3LjEgMjQuNSAyNS4yIDQ5LjcgMjUuMiAyNS4yIDAgMzUuNS0xMi41IDM1LjUtMjkuOCAwLTIwLjgtMTYuMS0yNy45LTQzLjEtMzkuOGwtMTQuOC02LjRjLTQyLjctMTguMi03MS4xLTQxLTcxLjEtODkuMiAwLTQ0LjQgMzMuOC03OC4yIDg2LjctNzguMiAzNy42IDAgNjQuNyAxMy4xIDg0LjIgNDcuNGwtNDYuMSAyOS42Yy0xMC4xLTE4LjItMjEuMS0yNS4yLTM4LjEtMjUuMi0xNy4zIDAtMjguMiAxMS0yOC4yIDI1LjIgMCAxNy42IDExIDI0LjggMzYuNCAzNS43bDE0LjggNi4zYzUwLjMgMjEuNiA3OC43IDQzLjcgNzguNyA5My4zIDAgNTMuMy00MS45IDgyLjUtOTguMSA4Mi41LTU1IDAtOTAuNS0yNi4yLTEwNy45LTYwLjVsNDguMi0yNy45ek0yMDAgMjc2LjFjMTAuNCAxNy43IDE5LjkgMzIuNyA0My4xIDMyLjcgMjIgMCAzNC4xLTguNiAzNC4xLTQyLjFWMTU0LjloNTkuMnYxMTUuMmMwIDYxLjMtMzUuOSA4OS40LTg4LjQgODkuNC00Ny40IDAtNzQuOS0yNC41LTg4LjgtNTRsMDUtMjkuMXoiLz48L3N2Zz4=' },
    { name: 'React', icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K' },
    { name: 'HTML5', icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NTAgNTEyIj48cGF0aCBmaWxsPSIjRTM0RjI2IiBkPSJNNDEgNDYwTDAgMGg0NTBsLTQxIDQ2MGwtMTg0IDUyIi8+PHBhdGggZmlsbD0iI0VGNjUyQSIgZD0iTTIyNSA0NzJsMTQ5LTQxIDM1LTM5NGgtMTg0Ii8+PHBhdGggZmlsbD0iI0VDRUNFQyIgZD0iTTIyNSAyMDRoLTc1bC01LTU4aDE4MHYtNTZIMTM3bDE1IDE3MWgxNzN2LTU3eiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMjUgMzQ1bC02NS0xOC00LTQ1aC01N2w3IDg5IDE1MCA0MS0zMS02N3oiLz48cGF0aCBmaWxsPSIjRUNFQ0VDIiBkPSJNMzYwIDE1MHYtNTZIMjI1djU2aDEzNXptLTc0IDExN3YtNTZIMjI1djU2aDYxeiIvPjwvc3ZnPgo=' },
    { name: 'CSS3', icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NTAgNTEyIj48cGF0aCBmaWxsPSIjMjY1REU5IiBkPSJNNDEgNDYwTDAgMGg0NTBsLTQxIDQ2MGwtMTg0IDUyIi8+PHBhdGggZmlsbD0iIzJFNjVGMCIgZD0iTTIyNSA0NzJsMTQ5LTQxIDM1LTM5NGgtMTg0Ii8+PHBhdGggZmlsbD0iI0VDRUNFQyIgZD0iTTIyNSAyMDRoLTc1bC01LTU4aDE4MHYtNTZIMTM3bDE1IDE3MWgxNzN2LTU3eiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMjUgMzQ1bC02NS0xOC00LTQ1aC01N2w3IDg5IDE1MCA0MS0zMS02N3oiLz48cGF0aCBmaWxsPSIjRUNFQ0VDIiBkPSJNMzYwIDE1MHYtNTZIMjI1djU2aDEzNXptLTc0IDExN3YtNTZIMjI1djU2aDYxeiIvPjwvc3ZnPgo=' },
    { name: 'Bootstrap', icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48cGF0aCBmaWxsPSIjNzk1MkIzIiBkPSJNMzMzLjUsMjAxLjRjMC0yMi44LTEuNi00MS45LTQuOC01Ny4zYy0zLjItMTUuNC05LjYtMjguMi0xOS4yLTM4LjJjLTkuNi0xMC0yNC44LTE4LjItNDUuOC0yNC42IGMtMjAuOS02LjQtNDkuNC05LjYtODUuNC05LjZIMHY0MzJoMTY3LjFjMzUuNSwwLDYzLjctMy4zLDg0LjgtOS45YzIxLjEtNi42LDM3LjYtMTUuNyw0OS42LTI3LjRjMTItMTEuNywyMC4zLTI1LjcsMjQuNy00MS45IGM0LjUtMTYuMiw2LjctMzMuMiw2LjctNTAuOWMwLTIzLjMtNC4xLTQzLjEtMTIuNC01OS40Yy04LjMtMTYuMy0yMS4yLTI4LjktMzguOS0zNy42QzMwNS4xLDIzMC4yLDMyMC4zLDIxOC4yLDMzMy41LDIwMS40eiBNMTk5LjEsMTU4LjVjMjcuNSwwLDQ3LjIsNC4xLDU5LjMsMTIuM2MxMiw4LjIsMTgsMjIuMywxOCw0Mi40YzAsMTkuNy02LjQsMzMuOS0xOS4zLDQyLjdjLTEyLjgsOC44LTMyLjEsMTMuMi01Ny43LDEzLjJoLTc4LjN2LTExMC42IEgxOTkuMXogTTIyMy44LDM2OS44Yy0xMy4yLDkuMi0zMy44LDEzLjgtNjEuOCwxMy44aC04MS4xdi0xMjkuOGg4My4yYzI4LjMsMCw0OS4yLDQuOSw2Mi41LDE0LjZjMTMuNCw5LjgsMjAuMSwyNS4yLDIwLjEsNDYuNCBDMjQ2LjcsMzM5LjMsMjM5LjEsMzYwLjYsMjIzLjgsMzY5Ljh6Ii8+PC9zdmc+' },
  ];

  return (
    <section className="skills">
      <h1>My Skills</h1>
      <div className="skill-list">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
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
      title: "E-commerce Website",
      description: "A fully responsive online store built with React and Node.js.",
      technologies: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      title: "Task Management App",
      description: "A drag-and-drop task manager with real-time updates.",
      technologies: ["React", "Firebase", "Tailwind CSS"]
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my projects and  skills.",
      technologies: ["React", "CSS", "Responsive Design"]
    }
  ];

  return (
    <section className="projects">
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
    <section className="contact">
      <h1>Contact Me</h1>
      <p>Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
      Please fill out the form below to discuss any work opportunities.</p>
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
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="portfolio">
      <Navbar setActiveSection={setActiveSection} />
      {activeSection === 'home' && <Home />}
      {activeSection === 'about' && <About />}
      {activeSection === 'skills' && <Skills />}
      {activeSection === 'projects' && <Projects />}
      {activeSection === 'contact' && <Contact />}
      <Footer />
    </div>
  );
}