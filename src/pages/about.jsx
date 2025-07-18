import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>

      <div className="about-box">
        <h2>Who We Are</h2>
        <p>
          We are a passionate team of developers building intuitive and modern
          web experiences using the latest technologies like React, Angular, and
          Node.js.
        </p>
      </div>

      <div className="about-box">
        <h2>Our Mission</h2>
        <p>
          Our mission is to simplify digital solutions and empower individuals
          and businesses to achieve more through innovative web applications.
        </p>
      </div>

      <div className="about-box">
        <h2>What We Do</h2>
        <p>
          From frontend interfaces to backend APIs, we craft end-to-end
          solutions that are clean, scalable, and user-friendly.
        </p>
      </div>

      <div className="about-box">
        <h2>Contact</h2>
        <p>
          Want to work with us or have questions? Reach out via our{" "}
          <a href="/contact">Contact Page</a>.
        </p>
      </div>
    </div>
  );
};

export default About;
