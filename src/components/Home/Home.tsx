import { Card, Text } from "@nextui-org/react";
import "./Home.scss";
import Particle from "../Particle/Particle";
function Home() {

  const projectsList = [
    { name: "Opoll", date: "2023" ,techno:"REACT - MATERIEL UI - SOKET.IO - MARIADB - JWT" },
    { name: "RainCheck", date: "2023" ,techno:"JAVASCRIPT" },
    { name: "FilmCollection", date: "2023" ,techno:"NODEJS - EXPRESS - POSTGRESQL - EJS" }
  ];

  return (
    <div className="homeContainer">
      <Particle></Particle>
      <div className="sectionContainer">
        <section className="sectionContainer__description">
          <Card>
            <Card.Body>
              <Card.Header>
                <Text>
                  <h1 className="sectionContainer__description--title">
                    Developpeur FullStack Js
                  </h1>
                </Text>
              </Card.Header>
            </Card.Body>
            <Text className="sectionContainer__description--text">
              Bonjour à tous ! Je suis un développeur Full Stack JS spécialisé
              dans le développement web et mobile . En tant que développeur Full
              Stack, je suis à l'aise à la fois en frontend et en backend. Je
              suis capable de concevoir des interfaces utilisateur réactives et
              intuitives en utilisant des frameworks tels que React et Vue.js.
              De plus, je maîtrise également les langages de programmation côté
              serveur tels que Node.js, ce qui me permet de développer des API
              robustes et des services backend performants. Constamment à
              l'affût des dernières tendances et des meilleures pratiques. Je
              suis toujours prêt à relever de nouveaux défis et à apprendre de
              nouvelles technologies pour améliorer mes compétences.Ma passion
              pour le développement web et mobile ne se limite pas à une seule
              plateforme ,ni a un language.Car avant d'être un développeur JS,
              je suis un développeur.
            </Text>
          </Card>
        </section>
        <section className="sectionContainer__card">
          <Card css={{ w: "50%" }}>
            <Card.Image
              src="src\assets\me.jpg"
              objectFit="cover"
              alt="Card image background"
            />
          </Card>
        </section>
        <div className="sectionContainer__projectSection">
          <div className="sectionContainer__projectSection__white">
            <h2 className="sectionContainer__projectSection__white-projet">
              Expériences
            </h2>
          </div>
        </div>
        <div className="sectionContainer__selectedProject">
        {projectsList.map((project, index) => (
          <article className="sectionContainer__selectedProject__article" 
          key={index}>
            <section className="sectionContainer__selectedProject__article--description">
              <h2>{project.name}</h2>
              <p> {project.date}</p>
              <p>{project.techno}</p>
            </section>
            <section className="sectionContainer__selectedProject__article--image">
              <img src={`src/assets/${project.name}.png`} alt="Opoll Project" />
            </section>
          </article>))}
        </div>
      </div>
    </div>
  );
}
export default Home;
