import { useEffect } from "react";
import { databases, frameworks, languages } from "../components/data/SkillsData";
import { SkillCSS } from "../styles/SkillCSS";

const Skills = () => {
  window.scrollTo(0, 0);
  useEffect(() => {
  }, []);
  return (
    <div style={SkillCSS.skillContainer}>
      <h1 style={SkillCSS.h1} className="pageTitle">
        My Skills
      </h1>
      <div style={SkillCSS.skillsList}>
        <h2 style={SkillCSS.h2}>Languages</h2>
        <div style={SkillCSS.icons}>
          {languages.map((data, i) => (
            <div style={SkillCSS.iconInternal} key={i}>
              <span>{data.icon}</span>
              <span style={SkillCSS.lang}>{data.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={SkillCSS.skillsList}>
        <h2 style={SkillCSS.h2}>Frameworks & Technologies</h2>
        <div style={SkillCSS.icons}>
          {frameworks.map((data, i) => (
            <div style={SkillCSS.iconInternal} key={i}>
              <span>{data.icon}</span>
              <span style={SkillCSS.lang}>{data.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={SkillCSS.skillsList}>
        <h2 style={SkillCSS.h2}>Databases & Tools</h2>
        <div style={SkillCSS.icons}>
          {databases.map((data, i) => (
            <div style={SkillCSS.iconInternal} key={i}>
              <span>{data.icon}</span>
              <span style={SkillCSS.lang}>{data.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
