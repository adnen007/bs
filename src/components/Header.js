import styled from "styled-components";
import user from "../assets/images/user.png";
import { IoMenu, IoCloseOutline } from "react-icons/io5";
import Nav from "./Nav";
import Logout from "./Logout";
import { useState } from "react";

const Header = () => {
  const [aside, showAside] = useState(false);

  const toggleAside = () => {
    showAside(!aside);
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="image">
          <img src={user} alt="" />
        </div>
        <div onClick={toggleAside} className="icon">
          <IoMenu />
        </div>
      </div>
      <aside className={aside ? "active" : ""}>
        <div onClick={toggleAside} className="icon" className="close">
          <IoCloseOutline />
        </div>
        <Nav />
        <Logout />
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  height: 70px;
  background-color: var(--clr-b-2);
  position: relative;
  z-index: 9;
  @media (min-width: 768px) {
    display: none;
  }
  .container {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .image {
  }
  .image img {
    width: 35px;
  }
  .icon {
  }
  .icon svg {
    color: white;
    font-size: 28px;
  }
  aside {
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--clr-b-2);
    display: flex;
    flex-direction: column;
    padding-bottom: 70px;
    transform: translateY(-110%);
    transition: 0.5s;
  }
  aside.active {
    transform: translateY(0%);
  }
  aside .close {
    position: absolute;
    top: 20px;
    right: 30px;
    color: var(--clr-t-8);
    font-size: 36px;
  }
`;

export default Header;
