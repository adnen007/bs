import styled from "styled-components";
import facebook from "../assets/images/brandico_facebook-rect.png";
import instagram from "../assets/images/skill-icons_instagram.png";
import linkedin from "../assets/images/logos_linkedin-icon.png";
import whatsapp from "../assets/images/uim_whatsapp.png";
import Logo from "../assets/images/image 29.png";

const Footer = () => {
  return (
    <Wrapper>
      <footer className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <p>&copy; 2024 ElectroBs. All rights reserved.</p>
        <div className="icons">
          <div className="image">
            <img src={facebook} alt="" />
          </div>
          <div className="image">
            <img src={instagram} alt="" />
          </div>
          <div className="image">
            <img src={whatsapp} alt="" />
          </div>
          <div className="image">
            <img src={linkedin} alt="" />
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--clr-b-1);
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
  }
  footer > p {
    display: none;
  }

  .logo {
    display: none;
  }

  @media (min-width: 992px) {
    .logo {
      display: block;
    }
    footer {
      justify-content: space-between;
    }

    footer > p {
      display: block;
    }
  }
  .logo img {
    width: 100px;
  }

  .icons {
    display: flex;
    gap: 30px;
  }
`;

export default Footer;
