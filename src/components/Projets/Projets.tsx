import "./Projets.scss";

const projectsList = [
  { name: "Opoll", date: "2021" },
  { name: "TERRA", date: "2022" },
  { name: "Opo", date: "2010" },
  { name: "weather", date: "2020" }
];

function Projets() {
  return (
    <div className="projetsContainer">
      <h1>Mes Projets</h1>
      <div className="work-container">
        {projectsList.map((project, index) => (
          <article
            key={index}
            className={index % 2 === 0 ? "work-right" : "work-left"}
          >
            <span>{index+1}/{projectsList.length}</span>
            <div className="work-content" style={{ backgroundImage: `url(src/assets/${project.name}.png)` }}>
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