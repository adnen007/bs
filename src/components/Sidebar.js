import styled from "styled-components";
import { FaUserSecret } from "react-icons/fa6";
import Nav from "../components/Nav";
import Logout from "../components/Logout";

const Sidebar = () => {
  return (
    <Wrapper>
      <h2>Bservices</h2>
      <div className="profile">
        <div className="image">
          <FaUserSecret />
        </div>
        <h4>Ghassen</h4>
        <p className="email">ghassenabidi@gmail.com</p>
      </div>
      <Nav />
      <Logout />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--clr-b-2);
  width: 200px;
  min-width: 200px;
  color: white;
  padding: 15px;
  padding-bottom: 30px;
  text-align: center;
  height: 100vh;
  display: none;
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex;
  }

  h2 {
    font-size: 20px;
    color: var(--clr-t-8);
  }
  .profile {
    margin-top: 15px;
  }
  .profile .image {
    width: 35px;
    height: 35px;
    border: solid 2px var(--clr-t-8);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
  .profile svg {
    color: var(--clr-white);
    font-size: 22px;
  }
  .profile h4 {
    font-size: 16px;
    margin-top: 2px;
    font-weight: 500;
  }
  .profile p {
    font-size: 10px;
    color: #d9d3c7;
  }

  @media (min-width: 1200px) {
    width: 250px;
    padding-top: 20px;

    h2 {
      font-size: 22px;
    }
    .profile {
      margin-top: 20px;
    }
    .profile .image {
      width: 45px;
      height: 45px;
    }
    .profile svg {
      font-size: 26px;
    }
    .profile h4 {
      font-size: 18px;
      margin-top: 6px;
    }
    .profile p {
      font-size: 12px;
    }
  }
`;

export default Sidebar;
