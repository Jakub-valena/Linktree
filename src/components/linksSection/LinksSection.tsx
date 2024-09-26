import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./LinksSection.css";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import Button from "../button/Button";
import data from "../../data/data";
import { useState } from "react";

const LinkSection = () => {
  const [isDarkOn, setIsDarkOn] = useState(false);

  const changeTheme = () => {
    setIsDarkOn(!isDarkOn);
    document.body.classList.toggle("darkmode");
  };

  return (
    <div id="links-section">
      <button type="button" className="theme-change" onClick={changeTheme}>
        {isDarkOn ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : (
          <FontAwesomeIcon icon={faSun} />
        )}
      </button>
      <div id="links">
        {data.map((oneData) => {
          return (
            <Button
              key={oneData.id}
              socialApp={oneData.socialApp}
              icon={oneData.icon}
              link={oneData.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LinkSection;
