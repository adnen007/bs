import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import Logo from "../assets/images/image 29.png";
import { useState } from "react";

const LandingHeader = () => {
  const list = ["Nos services", "Contact-nous", "About"];

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
          Login
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

  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
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
  }
  > .container > .icon {
  }
  > .container > .icon svg {
    display: block;
    font-size: 32px;
    color: var(--clr-b-2);
  }
  @media (min-width: 786px) {
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
