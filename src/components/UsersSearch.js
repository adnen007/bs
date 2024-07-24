import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../features/user/userSlice";

const UsersSearch = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const onSearch = (e) => {
    setText(e.target.value);
    dispatch(userActions.filterUsers(e.target.value));
  };

  return (
    <Wrapper>
      <input onChange={onSearch} value={text} type="search" placeholder="search" />
      <Link to="/dashboard/create">Create</Link>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  background-color: #eaeaea;
  padding: 10px 15px;
  border-radius: var(--radius);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  @media (width >= 1200px) {
    width: 80%;
    max-width: 800px;
  }
  input {
    width: 110px;
    height: 34px;
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
