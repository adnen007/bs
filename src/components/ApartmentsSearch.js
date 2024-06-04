import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";

const ApartmentsSearch = () => {
  return (
    <Wrapper>
      <div>
        <input type="search" placeholder="search" />
        <Link to="/buildings/create">Create</Link>
      </div>

      <button>
        <FaDollarSign />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
  > div {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    background-color: var(--clr-b-3);
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    max-width: 260px;
  }

  @media (min-width: 768px) {
    > div {
      max-width: initial;
    }
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
  button {
    border: none;
    color: var(--clr-white);
    background-color: var(--clr-b-5);
    width: 50px;
    height: 50px;

    border-radius: 50%;
    text-transform: capitalize;
    font-weight: 600;
    letter-spacing: 1px;
  }
  button svg {
    font-size: 22px;
  }
`;

export default ApartmentsSearch;
