import { Card } from "@nextui-org/react";
import "./Home.scss";
import Particle from "../Particle/Particle";
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
    {
      logo: "bx-map-pin",
      title: "Adresse",
      description: "Saint-Cloud , FRANCE",
      isLink: false,
    },
  ];

  return (
    <div className="homeContainer">
      <Particle></Particle>
      <div className="sectionContainer">
        <div className="sectionContainer__profil">
          <section className="sectionContainer__profil__description">
            <h1 className="profil__name">SARAKA JEAN-YVES</h1>
            <section className="sectionContainer__profil__description__card" >
              <h2 className="sectionContainer__profil__description__card--title">Developpeur FullStack Js </h2>
              <div className="sectionContainer__profil__description__card--text">
                  Bonjour à tous ! <br />
                  Je suis un développeur Full Stack JS
                  spécialisé dans le développement web et mobile . En tant que
                  développeur Full Stack, je suis à l'aise à la fois en frontend
                  et en backend. Je suis capable de concevoir des interfaces
                  utilisateur réactives et intuitives en utilisant des
                  frameworks tels que React et Vue.js. De plus, je maîtrise
                  également les langages de programmation côté serveur tels que
                  Node.js, ce qui me permet de développer des API robustes et
                  des services backend performants. Constamment à l'affût des
                  dernières tendances et des meilleures pratiques. Je suis
                  toujours prêt à relever de nouveaux défis et à apprendre de
                  nouvelles technologies pour améliorer mes compétences.Ma
                  passion pour le développement web et mobile ne se limite pas à
                  une seule plateforme ,ni a un language.Car avant d'être un
                  développeur JS, je suis un développeur.</div>
            </section>
          </section>
          <section className="sectionContainer__profil__card">
            <Card css={{ w: "80%" }}>
              <Card.Image
                src="src\assets\me.jpg"
                objectFit="cover"
                alt="Card image background"
              />
            </Card>
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
                  src={`src/assets/${project.name}.png`}
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
                <img src={`src/assets/${contact.logo}.svg`} alt="" />
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
