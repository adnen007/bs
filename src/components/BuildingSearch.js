import styled from "styled-components";
import { Link } from "react-router-dom";

const BuildingSearch = () => {
  return (
    <Wrapper>
      <input type="search" placeholder="search" />
      <Link to="/buildings/create">Create</Link>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  background-color: var(--clr-b-3);
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  max-width: 260px;

  @media (min-width: 768px) {
    max-width: initial;
  }

  @media (min-width: 1200px) {
    width: 650px;
  }
  input {
    width: 110px;
    height: 28px;
    border: none;
    border-radius: var(--radius);
    padding-left: 10px;
  }
  a {
    display: block;
    color: var(--clr-white);
    font-weight: 700;
  }
`;

export default BuildingSearch;
