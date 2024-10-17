import styled from "styled-components";

import Logo from "../assets/images/image 29.png";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaWhatsappSquare,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  const Links = [
    { icon: <FaInstagramSquare />, url: "" },
    { icon: <FaFacebookSquare />, url: "" },
    { icon: <FaWhatsappSquare />, url: "" },
    { icon: <FaLinkedin />, url: "" },
  ];

  return (
    <Wrapper>
      <footer className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <p>&copy; 2024 ElectroBs. All rights reserved.</p>
        <div className="links">
          {Links.map((el) => {
            return <a href={el.url}>{el.icon}</a>;
          })}
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
    padding: 20px 0;
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

  .links {
    display: flex;
    gap: 30px;
  }
  .links a {
    display: block;
  }

  .links svg {
    font-size: 36px;
    display: block;
    color: #1e2834;
    transition: 0.2s;
  }
  .links a:hover svg {
    transform: scale(1.3);
  }
`;

export default Footer;
