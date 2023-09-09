import "./Home.scss";
import Particle from "../Particle/Particle";
import { useState } from "react";
import { Button } from "@nextui-org/react";
function Home() {
  const projectsList = [
    {
      name: "Opoll",
      date: "2023",
      techno: "REACT - MATERIEL UI - SOKET.IO - MARIADB - JWT",
    },
    { name: "RainCheck", date: "2023", techno: "JAVASCRIPT" },
    {
      name: "FilmCollection",
      date: "2023",
      techno: "NODEJS - EXPRESS - POSTGRESQL - EJS",
    },
  ];

  const contactList = [
    {
      logo: "bxs-phone",
      title: "Téléphone",
      description: "07 66 29 10 46",
      isLink: false,
    },
    {
      logo: "bx-mail-send",
      title: "Adresse mail",
      description: "sarakajean1@gmail.com",
      isLink: false,
    },
    {
      logo: "bxl-github",
      title: "Github",
      description: "Jean-Yves2",
      isLink: true,
      link: "https://github.com/Jean-Yves2",
    },
    {
      logo: "bxl-linkedin",
      title: "Linkedin",
      description: "jean-yves-saraka",
      isLink: true,
      link: "https://www.linkedin.com/in/jean-yves-saraka/",
    },
  ];

  const [allOnMe, setallOnMe] = useState(true);
  const [catchphrase, setCatchphrase] = useState(false);
  const handleButtonCLick = () => {
    setallOnMe(!allOnMe);
    setCatchphrase(!catchphrase);
  };

  return (
    <div className="homeContainer">
      <Particle></Particle>
      <div className="sectionContainer">
        <div className="sectionContainer__profil">
          <section className="sectionContainer__profil__description">
            <h1 className="sectionContainer__profil__description__name">
              SARAKA JEAN-YVES
            </h1>
            <section className="sectionContainer__profil__description__card">
              <h2 className="sectionContainer__profil__description__card--title">
                Developpeur FullStack Js{" "}
              </h2>
              <div className="sectionContainer__profil__description__card--text">
                <p
                  className="sectionContainer__profil__description__card--text--catchphrase"
                  style={{ display: catchphrase ? "none" : "inline" }}
                >
                  Bienvenue sur mon portefolio ! <br />
                  Explorez le monde du développement Full Stack JS avec moi, où
                  la créativité rencontre la technologie pour donner vie à des
                  expériences numériques extraordinaires. <br />{" "}
                </p>

                <div
                  className="sectionContainer__profil__description__card--text--more"
                  style={{
                    height: allOnMe ? "0px" : "100%",
                    overflow: "hidden",
                  }}
                >
                  <p
                    className="sectionContainer__profil__description__card--text--more--description"
                    style={{ display: allOnMe ? "none" : "inline" }}
                  >
                    Je suis un développeur Full Stack JS passionné par la
                    création d'expériences web et mobile exceptionnelles. Mon
                    expertise s'étend à tous les aspects du développement, que
                    ce soit côté frontend ou backend. Je suis un créateur
                    d'interfaces utilisateur réactives et intuitives grâce à des
                    frameworks tels que React et Vue.js, tout en ayant une
                    solide maîtrise des langages serveur comme Node.js pour
                    concevoir des API robustes et des services backend
                    performants. Ma quête perpétuelle de perfectionnement
                    m'amène à rester constamment à l'affût des dernières
                    tendances et des meilleures pratiques de l'industrie. Je
                    suis toujours prêt à relever de nouveaux défis et à plonger
                    dans de nouvelles technologies pour affiner mes compétences
                    et offrir des solutions innovantes. Mais ce qui distingue
                    véritablement ma passion pour le développement, c'est
                    qu'elle ne se limite pas à une plateforme ou à un langage
                    particulier. Avant d'être un développeur JS, je suis un
                    développeur tout court, avide de découvertes et de
                    réalisations dans le monde en constante évolution de la
                    technologie.
                  </p>
                </div>
              </div>

              <Button  color="gradient" auto onClick={handleButtonCLick}>
                {allOnMe ? "Qui Suis Je 🕵" : "Réduire 💡"}
              </Button>
            </section>
          </section>
          <section className="sectionContainer__profil__card">
            <img src="./Jean-Yves.jpg" alt="Jean-Yves.jpg" />
          </section>
        </div>

        <div className="sectionContainer__projectSection">
          <div className="sectionContainer__projectSection__white">
            <h2 className="sectionContainer__projectSection__white-projet">
              Expériences
            </h2>
          </div>
        </div>
        <div className="sectionContainer__selectedProject">
          {projectsList.map((project, index) => (
            <article
              className="sectionContainer__selectedProject__article"
              key={index}
            >
              <section className="sectionContainer__selectedProject__article--description">
                <h2>{project.name}</h2>
                <p> {project.date}</p>
                <p>{project.techno}</p>
              </section>
              <section className="sectionContainer__selectedProject__article--image">
                <img
                  src={`./${project.name}.png`}
                  alt={`${project.name} Project`}
                />
              </section>
            </article>
          ))}
        </div>
        <div className="sectionContainer__projectSection">
          <div className="sectionContainer__projectSection__white">
            <h2 className="sectionContainer__projectSection__white-projet">
              Contact
            </h2>
          </div>
        </div>
        <div className="sectionContainer__contact">
          {contactList.map((contact, index) => (
            <div className="sectionContainer__contact__card">
              <section
                className="sectionContainer__contact__card--logo"
                key={index}
              >
                <img src={`./${contact.logo}.svg`} alt="" />
              </section>
              <section className="sectionContainer__contact__card--title">
                <h3>{contact.title}</h3>
              </section>
              <section className="sectionContainer__contact__card--description">
                {contact.isLink ? (
                  <a
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contact.description}
                  </a>
                ) : (
                  <p>{contact.description}</p>
                )}
              </section>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;
