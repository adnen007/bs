import styled from "styled-components";
import Info from "./Info";
import { useState, useEffect } from "react";

const Contact = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  console.log("contact");
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const right = (
    <div className="right">
      <div className="design1"></div>
      <div className="info_container">
        <Info />
      </div>
    </div>
  );

  return (
    <Wrapper>
      <div className="container">
        <div className="left">
          <h2 id="Contact-nous">Contact-nous</h2>
          <p>
            N'hésitez pas à nous contacter à tout moment, nous vous répondrons dès que
            possible.
          </p>
          <form>
            <input type="text" placeholder="Nom" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Message" />
            <button type="button"> Envoyer</button>
          </form>
        </div>

        {windowWidth >= 768 ? right : <Info />}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 60px 0;

  .container {
  }

  h2 {
    font-size: 38px;

    width: fit-content;
    margin: auto;
  }
  .left {
    padding: 0 0 40px 0;
  }
  .left > p {
    margin-top: 20px;
    color: #525252;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.5px;
    text-align: center;
  }

  form {
    display: grid;
    gap: 30px;
    margin-top: 65px;
  }
  form input {
    border: none;
    border-bottom: 1px solid #777;
    font-size: 14px;
    padding-right: 5px;
    height: 30px;
  }
  form button {
    margin-top: 40px;
    cursor: pointer;
    padding: 10px 20px;
    background: black;
    color: white;
    border-radius: var(--radius);
  }

  .right {
    position: relative;
    width: 50%;
    max-width: 350px;
  }

  .design1 {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 100px;
    background-color: #e4e4e4;
  }

  .info_container {
    position: absolute;
    top: 50%;
    right: 50px;
    transform: translateY(-50%);
  }

  .info_container > div {
    margin-top: initial;
  }

  @media (width >= 768px) {
    .container {
      display: flex;
      justify-content: center;
      gap: 90px;
    }

    .left {
      width: 50%;
      max-width: 400px;
    }

    h2 {
      margin: initial;
    }
    .left > p {
      text-align: initial;
    }
  }
`;

export default Contact;
