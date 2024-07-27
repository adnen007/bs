import styled from "styled-components";
import image from "../assets/images/App installation-amico 1.png";

const Services = () => {
  const list = [
    "Installation & reparation",
    "Installation & reparation",
    "Installation & reparation",
    "Installation & reparation",
    "Installation & reparation",
    "Installation & reparation",
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
                  <img src={image} alt="" />
                </div>
                <div className="detail">{el}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h2 {
    font-size: 32px;
    width: fit-content;
    margin: auto;
  }

  .services_list {
    margin-top: 70px;
    padding: 0px 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 40px;
  }

  .service {
    border: solid 3px;
  }
  .service .image {
    width: 100%;
    padding: 15px;
  }

  .service .image img {
    width: 100%;
  }
  .service .detail {
    border-top: solid 3px;
    padding: 15px;
    text-align: center;
  }
`;

export default Services;
