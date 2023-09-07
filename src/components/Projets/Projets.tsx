import Particle from "../Particle/Particle";
import "./Projets.scss";

const projectsList = [
  { name: "Opoll", date: "2023" },
  { name: "RainCheck", date: "2023" },
  { name: "FilmCollection", date: "2023" },
  { name: "Pong", date: "2021" }
];

function Projets() {
  return (
    <div className="projetsContainer">
      <Particle></Particle>
      <h1>Mes Projets</h1>
      <div className="work-container">
        {projectsList.map((project, index) => (
          <article
            key={index}
            className={index % 2 === 0 ? "work-right" : "work-left"}
          >
            <span>{index+1}/{projectsList.length}</span>
            <div className="work-content" style={{ backgroundImage: `url(./${project.name}.png)` }}>
              <div className="work-title" data-project-name={project.name}></div>
              <div className="work-date" data-project-date={project.date}></div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Projets;