import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const Dropdown = ({ onDropdown, showDropdown, list }) => {
  return (
    <Wrapper className={showDropdown ? "show" : ""}>
      <div onClick={() => onDropdown(false)} className="close">
        <IoMdClose />
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

      <Link to="/" className="login">
        Login
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: var(--clr-b-1);
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 99;
  transform: translatey(-100%);
  transition: 0.5s;
  box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
  &.show {
    transform: translatey(00%);
  }
  @media (min-width: 768px) {
    display: none;
  }

  > .close {
    position: absolute;
    top: 8px;
    right: 8px;
  }

  > .close svg {
    display: block;
    font-size: 32px;
  }
  > .menu {
    margin-top: 107px;
    display: grid;
    gap: 38px;
    justify-content: center;
    align-items: center;
  }
  > .menu li {
    font-size: 26px;
    list-style: none;
  }
  .login {
    display: block;
    width: fit-content;
    font-size: 32px;
    border: 2px solid;
    padding: 5px 16px;
    background: white;
    border-radius: 5px;
    position: absolute;
    left: 50%;
    bottom: 120px;
    transform: translateX(-50%);
  }
`;

export default Dropdown;
