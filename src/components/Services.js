import styled from "styled-components";
import reparation from "../assets/images/reparation.jpg";
import alarm from "../assets/images/alarm.webp";
import camera from "../assets/images/camera.jpg";
import smartHouse from "../assets/images/smart_house.jpg";
import airConditioner from "../assets/images/air-conditioner.webp";
import electricity from "../assets/images/electricity.jpg";

// note i got the alarm image and the airConditoner image random from google not from a free source
// like unplash so yeah you should change them in the future.
// also fro better performance choose images with less resolution

const Services = () => {
  const list = [
    {
      name: "Installation & Réparation",
      imageUrl: reparation,
      description:
        "Nous offrons des services d'installation et de réparation pour assurer le bon fonctionnement de vos équipements. Nos techniciens qualifiés interviennent rapidement et efficacement.",
    },
    {
      name: "Caméra de Surveillance",
      imageUrl: camera,
      description:
        "Protégez votre propriété avec nos systèmes de caméra de surveillance avancés. Nous garantissons une installation professionnelle pour une sécurité maximale.",
    },
    {
      name: "Climatisation Domotique",
      imageUrl: airConditioner,
      description:
        "Profitez d'un confort optimal grâce à nos solutions de climatisation domotique. Nos systèmes intelligents s'adaptent à vos besoins pour un contrôle facile et efficace.",
    },
    {
      name: "Système d'alarme",
      imageUrl: alarm,
      description:
        "Assurez la sécurité de votre espace avec nos systèmes d'alarme de pointe. Nous vous aidons à choisir la solution adaptée à vos besoins spécifiques.",
    },
    {
      name: "Incendie Télédistribution",
      imageUrl: smartHouse,
      description:
        "Nous proposons des systèmes de télédistribution pour la détection d'incendie. Nos solutions garantissent une réponse rapide en cas d'urgence.",
    },
    {
      name: "Électricité Bâtiment & Industriel",
      imageUrl: electricity,
      description:
        "Nos services électriques pour bâtiments et industriels garantissent des installations sécurisées et conformes. Faites confiance à notre expertise pour tous vos projets électriques.",
    },
  ];
  return (
    <Wrapper>
      <div className="container">
        <h2 id="Nos services">Nos Services</h2>
        <div className="services_list">
          {list.map((el) => {
            return (
              <div className="service">
                <div className="description"> {el.description} </div>
                <div className="image">
                  <img src={el.imageUrl} alt="" />
                </div>
                <div className="detail">{el.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #e4e4e4;
  padding: 60px 0;

  @media (width >= 768px) {
    .container {
      padding: 0 40px;
    }
  }

  h2 {
    font-size: 32px;
    width: fit-content;
    margin: auto;
  }

  .services_list {
    margin-top: 60px;
    padding: 0px 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 40px;
  }

  .service {
    border: solid 1px;
    background-color: white;
    position: relative;
    overflow: hidden;
    border-radius: 0.25rem;
  }
  .description {
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translatey(100%);
    transition: 0.4s;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    padding: 10px;
    line-height: 36px;
  }
  .service:hover .description {
    transform: translatey(0%);
  }
  .service .image {
    width: 100%;
    height: 230px;
    overflow: hidden;
  }

  .service .image img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
  .service .detail {
    border-top: solid 1px;
    padding: 15px;
    text-align: center;
  }
`;

export default Services;
