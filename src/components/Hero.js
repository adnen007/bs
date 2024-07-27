import styled from "styled-components";
import image from "../assets/images/Construction worker-amico 1.png";

const Hero = () => {
  const text =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia ";

  return (
    <Wrapper>
      <div className="container">
        <div className="left">
          <h2>votre comfort est notre priorite</h2>
          <p>
            {text.split(" ").map((e) => {
              return <span> {e}</span>;
            })}
          </p>
          <div className="discover_more">Découvrez plus</div>
        </div>
        <div className="right">
          <div className="image">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    height: calc(100vh - 70px);
  }
  @media (min-width: 992px) {
    .container {
      display: grid;
      grid-template-columns: 50% 50%;
      gap: 10px;
    }
  }
  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  .left h2 {
    margin-top: -92px;
    text-transform: capitalize;
    line-height: 47px;
    font-size: 39px;
    color: #1e2834;
    font-weight: 800;
  }

  @media (min-width: 992px) {
    .left h2 {
      margin-top: 0px;
    }
  }

  .left p {
    color: #617d98;
    margin-top: 15px;
    line-height: 32px;
  }
  .left p > span {
    opacity: 0;
    filter: blur(4px);
  }
  .left p > span:nth-child(1) {
    animation: frog 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  .left p > span:nth-child(2) {
    animation: frog 0.7s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  .left p > span:nth-child(3) {
    animation: frog 0.7s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  .left p > span:nth-child(4) {
    animation: frog 0.7s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  .left p > span:nth-child(5) {
    animation: frog 0.7s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  .left p > span:nth-child(6) {
    animation: frog 0.7s 0.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  .left p > span:nth-child(7) {
    animation: frog 0.7s 0.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  .left p > span:nth-child(8) {
    animation: frog 0.7s 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  .left p > span:nth-child(9) {
    animation: frog 0.7s 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  .left p > span:nth-child(10) {
    animation: frog 0.7s 0.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  .left p > span:nth-child(11) {
    animation: frog 0.7s 1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  .left p > span:nth-child(12) {
    animation: frog 0.7s 1.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  .left p > span:nth-child(13) {
    animation: frog 0.7s 1.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  .left p > span:nth-child(14) {
    animation: frog 0.7s 1.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  .left p > span:nth-child(15) {
    animation: frog 0.7s 1.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  .left p > span:nth-child(16) {
    animation: frog 0.7s 1.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  .left p > span:nth-child(17) {
    animation: frog 0.7s 1.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  .left p > span:nth-child(18) {
    animation: frog 0.7s 1.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  .left p > span:nth-child(19) {
    animation: frog 0.7s 1.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  .left p > span:nth-child(20) {
    animation: frog 0.7s 1.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  .left p > span:nth-child(21) {
    animation: frog 0.7s 2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  .left p > span:nth-child(22) {
    animation: frog 0.7s 2.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  .left p > span:nth-child(23) {
    animation: frog 0.7s 2.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  .left p > span:nth-child(24) {
    animation: frog 0.7s 2.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  .left p > span:nth-child(25) {
    animation: frog 0.7s 2.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  .left p > span:nth-child(26) {
    animation: frog 0.7s 2.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  .discover_more {
    width: fit-content;
    background-color: #1e2834;
    color: white;
    padding: 14px 20px;
    font-size: 19px;
    margin-top: 38px;
    border-radius: 5px;
  }

  .right {
    display: none;
  }
  @media (min-width: 992px) {
    .right {
      display: flex;
    }
  }
  .right {
    align-items: center;
    justify-content: center;
  }
  .right > .image {
    max-width: 100%;
  }
  .right > .image > img {
    width: 400px;
    max-width: 100%;
    display: block;
  }

  @keyframes frog {
    100% {
      opacity: 1;
      filter: blur(0px);
    }
  }
`;

export default Hero;
