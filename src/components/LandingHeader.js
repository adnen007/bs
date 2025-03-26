import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import Logo from "../assets/images/image 29.png";
import { useState } from "react";

const LandingHeader = () => {
  const list = ["Nos services", "Contact-nous", "A propos"];

  const [showDropdown, setShowDropdown] = useState(false);

  const onDropdown = (value) => {
    setShowDropdown(value);
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <ul className="menu">
          {list.map((el) => {
            return (
              <li onClick={() => onDropdown(false)}>
                <a href={`#${el}`}>{el}</a>
              </li>
            );
          })}
        </ul>
        <Link className="login" to="/">
          <div className="login_background"></div>
          <span>Connexion</span>
        </Link>
        <div onClick={() => onDropdown(true)} className="icon">
          <RxHamburgerMenu />
        </div>
        <Dropdown list={list} showDropdown={showDropdown} onDropdown={onDropdown} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 0px 15px;
    height: 70px;
  }
  background: var(--clr-b-1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);

  > .container > .logo {
  }
  > .container > .logo img {
    display: block;
    width: 120px;
  }

  > .container > .menu {
    display: none;
  }

  > .container > .login {
    display: none;
    position: relative;
  }
  .login > span {
    display: block;
    position: relative;
    z-index: 2;
    transition: 0.2s 0.1s;
  }

  .login .login_background {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0px;
    background: black;
    transition: 0.4s;
  }
  .login:hover .login_background {
    width: 100%;
  }
  .login:hover span {
    color: white;
    z-index: 3;
  }

  > .container > .icon {
  }
  > .container > .icon svg {
    display: block;
    font-size: 32px;
    color: var(--clr-b-2);
  }

  @media (min-width: 768px) {
    > .container > .menu {
      display: flex;
      list-style: none;
      font-size: 18px;
      gap: 30px;
    }
    > .container > .menu li:hover a {
      color: white;
    }
    > .container > .login {
      display: block;
      width: fit-content;
      font-size: 22px;
      border: 2px solid;
      padding: 5px 16px;
      background: white;
      border-radius: 5px;
    }
    > .container > .icon {
      display: none;
    }
  }
`;

export default LandingHeader;
