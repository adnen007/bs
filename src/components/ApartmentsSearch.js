import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { apartmentsActions } from "../features/aparments/aparmentsSlice";

const ApartmentsSearch = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const onSearch = (e) => {
    setText(e.target.value);
    dispatch(apartmentsActions.filter_apartments(e.target.value));
  };

  const onButtonClick = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <div>
        <input onChange={onSearch} value={text} type="search" placeholder="search" />
        <Link to="/apartments/create">Create</Link>
      </div>

      <button onClick={onButtonClick}>
        <FaDollarSign />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-grow: 1;

  > div {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;
    background-color: var(--clr-brand-3);
    padding: 10px 15px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    max-width: 300px;
  }

  @media (min-width: 425px) {
    > div {
      justify-content: space-around;
    }
  }

  @media (min-width: 768px) {
    > div {
      max-width: 350px;
    }
  }
  @media (min-width: 992px) {
    > div {
      max-width: 500px;
    }
  }

  @media (min-width: 1200px) {
    width: 650px;
  }
  input {
    width: 105px;
    height: 34px;
    border: none;
    border-radius: var(--radius);
    padding-left: 10px;
  }
  @media (min-width: 425px) {
    input {
      width: 130px;
    }
  }
  a {
    display: block;
    color: var(--clr-white);
    font-weight: 700;
  }
  button {
    border: none;
    color: var(--clr-white);
    /* background-color: var(--clr-b-5); */
    background-color: var(--clr-brand-3);
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
