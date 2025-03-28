import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createBuilding } from "../features/buildings/buildingsAsync";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateBuilding = () => {
  const [form, setForm] = useState({ name: "", city: "", apartments: "", address: "" });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userId = useSelector((state) => {
    return state.user.user.id;
  });

  const loading = useSelector((state) => {
    return state.buildings.create_building.loading;
  });

  const onFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const OnButtonClick = () => {
    for (let key in form) {
      if (form[key] === "") {
        toast.warn("fill all fields");
        return;
      }
    }
    dispatch(createBuilding({ ...form, user_id: userId, navigate }));
  };

  return (
    <Wrapper>
      <Sidebar />
      <main>
        <div className="content">
          <Link to="/buildings" className="close">
            <IoCloseOutline />
          </Link>
          <h2>Create Building</h2>
          <form>
            <div>
              <label htmlFor="name">Name</label>
              <input onChange={onFormChange} type="text" name="name" />
            </div>
            <div>
              <label htmlFor="address">address</label>
              <input onChange={onFormChange} type="text" name="address" />
            </div>
            <div>
              <label htmlFor="city">city</label>
              <input onChange={onFormChange} type="text" name="city" />
            </div>
            <div>
              <label htmlFor="apartments">apartments</label>
              <input onChange={onFormChange} type="text" name="apartments" />
            </div>
            <button type="button" onClick={OnButtonClick}>
              {loading ? "creating.." : "create"}
            </button>
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
    margin-top: 40px;
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
    background-color: var(--clr-brand-1);
    color: var(--clr-white);
    padding: 10px 28px;
    width: fit-content;
    margin: auto;
    margin-top: 19px;
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

export default CreateBuilding;
