import "../../../public/logo.png";
import "./AboutSection.css";

// ABOUT SECTION COMPONENT
const AboutSection = () => {
  return (
    <div id="about-section">
      <img src="../../../public/logo.png" alt="logo" height="300" />
      <div id="about">
        <h1>Jakub Valena</h1>
        <h3>Web developer</h3>
        <p>HTML5, CSS3, JS, REACT</p>
      </div>
    </div>
  );
};

export default AboutSection;
