import styled from "styled-components";
import { Link } from "react-router-dom";

const UsersSearch = () => {
  return (
    <Wrapper>
      <input type="search" placeholder="search" />
      <Link to="/dashboard/create">Create</Link>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  background-color: #eaeaea;
  padding: 15px;
  border-radius: var(--radius);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  @media (width >= 1200px) {
    width: 960px;
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
    color: #0d0d0d;
    font-weight: 700;
  }
`;

export default UsersSearch;
