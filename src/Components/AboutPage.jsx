import { aboutInformation } from "./AboutData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AboutPage.css";

function AboutPage() {
  const { intro, contact, skills, hobbies } = aboutInformation;

  return (
    <div className="about-container">
      <div className="left">
        <section className="intro">
          <h1>{intro.title}</h1>
          <p>{intro.description}</p>
        </section>

        <section className="contact-details">
          <h2>{contact.title}</h2>
          <ul>
            {contact.details.map((detail) => (
              <li key={detail.label}>
                <strong>{detail.label}:</strong> {detail.value}
              </li>
            ))}
          </ul>
        </section>
      </div>
      <section className="skills">
          <h2>{skills.title}</h2>
          {skills.list.map((skill) => (
            <div key={skill.skill} className="skill-item">
              <h3>{skill.skill}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </section>
      <div className="right">
        <section className="hobbies">
          <h2>{hobbies.title}</h2>
          <ul>
            {hobbies.list.map((hobby) => (
              <li key={hobby.hobby}>
                <FontAwesomeIcon icon={hobby.icon} /> {hobby.hobby}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
