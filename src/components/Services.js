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
    { name: "Installation & Réparation", imageUrl: reparation },
    { name: "Caméra de Surveillance", imageUrl: camera },
    { name: "Climatisation Domotique", imageUrl: airConditioner },
    { name: "Système d'alarme", imageUrl: alarm },
    { name: "Incendie Télédistribution", imageUrl: smartHouse },
    { name: "Électricité Bâtiment & Industriel", imageUrl: electricity },
  ];
  return (
    <Wrapper>
      <div className="container">
        <h2 id="Nos services">Nos Services</h2>
        <div className="services_list">
          {list.map((el) => {
            return (
              <div className="service">
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
    border: solid 3px;
    background-color: white;
  }
  .service .image {
    width: 100%;
  }

  .service .image img {
    width: 100%;
    display: block;
    object-fit: cover;
  }
  .service .detail {
    border-top: solid 3px;
    padding: 15px;
    text-align: center;
  }
`;

export default Services;
