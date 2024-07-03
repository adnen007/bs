import styled from "styled-components";
import avatar from "../assets/images/undraw_male_avatar_g98d 1.svg";
import logo from "../assets/images/Group 1686550876.svg";

const LoginPage = () => {
  return (
    <Wrapper>
      <div className="left">
        <div className="image">
          <img src={avatar} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="content">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <h2>Login To Your Account</h2>
          <p>See what is going on with your business</p>
          <form>
            <label htmlFor="email">Email</label>
            <input type="email" />
            <label htmlFor="password">Password</label>
            <input type="password" />
            <button type="submit"> Login </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--clr-white);
  min-height: 100vh;
  padding-bottom: 100px;
  padding-top: 100px;
  position: relative;
  @media (min-width: 768px) {
    padding-top: 0;
    padding-bottom: 0%;
    display: flex;
  }
  .left {
  }
  .left .image {
    margin: auto;
    width: fit-content;
  }
  @media (min-width: 768px) {
    .left .image {
      display: none;
    }
  }
  .left .image img {
    max-width: 220px;
  }

  .right {
    display: flex;
    justify-content: center;
    margin-top: 60px;
    padding-left: 15px;
    padding-right: 15px;
  }
  .image .content {
    width: 300px;
  }
  @media (min-width: 400px) {
    .right .content {
      width: 340px;
      padding-bottom: 50px;
    }
  }
  .right .logo {
    position: absolute;
    top: 15px;
    left: 20px;
  }
  @media (min-width: 768px) {
    .right {
      margin-top: 0;
      flex-grow: 1;
      align-items: center;
    }
    .right .content {
      width: 340px;
    }
    .right .logo {
      position: static;
      margin-bottom: 20px;
    }
  }
  .right .logo img {
    width: 50px;
  }
  .right h2 {
    font-size: 28px;
    font-weight: bold;
  }
  @media (min-width: 400px) {
    .right h2 {
      font-size: 32px;
    }
  }
  .right p {
    font-size: 14px;

    margin-top: 3px;
    color: var(--clr-t-6);
  }
  .right label {
    display: block;
    color: var(--clr-t-7);
  }
  .right label:first-of-type {
    margin-top: 35px;
  }
  .right label:nth-of-type(2) {
    margin-top: 25px;
  }
  .right input {
    display: block;
    height: 45px;
    width: 100%;
    margin-top: 5px;
    border: none;
    padding-left: 15px;
    outline: solid 1px #897e7e;
    border-radius: 7px;
  }

  .right button {
    background-color: var(--clr-black);
    color: var(--clr-white);
    height: 45px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin-top: 55px;
    outline: solid 1px var(--clr-black);
    font-size: 18px;
    font-weight: 800;
    letter-spacing: 1px;
    cursor: pointer;
  }
`;

export default LoginPage;
