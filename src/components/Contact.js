import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <div className="container">
        <h2 id="Contact-nous">Contact-nous</h2>
        <p></p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 80px 0;

  h2 {
    font-size: 32px;
    width: fit-content;
    margin: auto;
  }
  p {
    height: 200px;
    width: 100%;
    background-color: #1e2834ed;
    margin-top: 30px;
    border-radius: 10px;
  }
`;

export default Contact;
