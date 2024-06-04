import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

const EditBuilding = () => {
  const [form, setForm] = useState({ name: "", city: "", apartement: "", address: "" });

  const onFormChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setForm({ ...form, [id]: value });
  };

  const OnButtonClick = (e) => {
    console.log("button clicked");
  };

  return (
    <Wrapper>
      <Sidebar />
      <main>
        <div className="content">
          <Link to="/buildings" className="close">
            <IoCloseOutline />
          </Link>
          <h2>Edit Building</h2>
          <form>
            <div>
              <label htmlFor="fullname">Name</label>
              <input onChange={onFormChange} type="text" id="name" />
            </div>
            <div>
              <label htmlFor="email">address</label>
              <input onChange={onFormChange} type="text" id="address" />
            </div>
            <div>
              <label htmlFor="phone">city</label>
              <input onChange={onFormChange} type="text" id="city" />
            </div>
            <div>
              <label htmlFor="address">appartment</label>
              <input onChange={onFormChange} type="text" id="appartment" />
            </div>
            <div className="buttons">
              <button type="button" onClick={OnButtonClick}>
                Edit
              </button>
              <button type="button" onClick={OnButtonClick}>
                Delete
              </button>
            </div>
          </form>
        </div>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  background-color: var(--clr-b-6);
  main {
    flex-grow: 1;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
  }

  .content {
    width: 100%;
    height: 100%;
    background-color: var(--clr-b-1);
    position: relative;

    border-radius: var(--radius);
    padding-bottom: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 768px) {
    .content {
      width: 370px;
      height: initial;
      padding-bottom: 40px;
    }
  }
  .content .close {
    display: block;
    position: absolute;
    top: 11px;
    right: 11px;
  }
  .content .close svg {
    font-size: 40px;
  }
  @media (min-width: 768px) {
    .content .close {
      top: 7px;
      right: 7px;
    }
    .content .close svg {
      font-size: 28px;
    }
  }
  .content h2 {
    font-size: 24px;
    font-weight: 400;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    width: fit-content;
  }
  .content form {
    width: 270px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  .content form > div {
  }
  .content form label {
    display: block;
    text-transform: capitalize;
    font-size: 17px;
  }
  .content form input {
    width: 100%;
    border: none;
    display: block;
    margin-top: 8px;
    height: 38px;
    border-radius: var(--radius);
    padding-left: 10px;
  }
  .content form button {
    border: none;
    background-color: var(--clr-black);
    color: var(--clr-white);
    margin: auto;
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: 1px;
    width: 100px;
    height: 40px;
  }
  .buttons {
    display: flex;
    margin-top: 19px;
  }
`;

export default EditBuilding;
