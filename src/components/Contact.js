import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <div className="container">
        <h2 id="Contact-nous">Contact-nous</h2>
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
`;

export default Contact;
