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
      <h2>services</h2>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h2 {
    font-size: 32px;
    width : fit-content:
    margin:auto;
  }

  .services_list {
  }
`;

export default Services;
