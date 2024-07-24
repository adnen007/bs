import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { editApartment, deleteApartment } from "../features/aparments/aparmentsAsync";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

const EditApartment = () => {
  let initialState = {
    tenant_name: "",
    phone: "",
    rent: "",
    apartment_address: "",
    id: null,
  };

  const { state: locationState } = useLocation();

  if (locationState) {
    initialState = {
      tenant_name: locationState.description,
      phone: locationState.numero,
      rent: locationState.prix,
      apartment_address: locationState.etage,
      id: locationState.id,
    };
  }
  // here you did something very weid ghasen sometime use english sometime use frensh and even the frensh and english he is
  // change the names in the apis so i dided to keep the front in english the the same name and whenver I interact with the api all
  // what i do is translte those.
  // so again discripton will be name and etage will be location
  // and why not to ask ghasen and hey the rest of api please make them in english

  const [form, setForm] = useState(initialState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const editLoading = useSelector((state) => state.apartments.edit_apartment.loading);
  const deleteLoading = useSelector((state) => state.apartments.delete_apartment.loading);

  // initial state has the apartment as default

  const onFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const onEdit = () => {
    for (let key in form) {
      if (form[key] === "") {
        toast.warn("fill all fields");
        return;
      }
    }

    dispatch(editApartment({ ...form, navigate }));
  };

  const onDelete = () => {
    dispatch(deleteApartment({ ...form, navigate }));
  };

  useEffect(() => {
    if (!locationState) {
      navigator("/apartments");
    }
  }, [locationState, navigate]);

  return (
    <Wrapper>
      <Sidebar />
      <main>
        <div className="content">
          <Link to="/apartments" className="close">
            <IoCloseOutline />
          </Link>
          <h2>Edit Apartment</h2>
          <form>
            <div>
              <label htmlFor="tenant_name">Tenant Name</label>
              <input
                onChange={onFormChange}
                value={form.tenant_name}
                type="text"
                name="tenant_name"
              />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                onChange={onFormChange}
                value={form.phone}
                type="text"
                name="phone"
              />
            </div>
            <div>
              <label htmlFor="rent">Rent</label>
              <input onChange={onFormChange} value={form.rent} type="text" name="rent" />
            </div>
            <div>
              <label htmlFor="apartment_address">Apartment Address </label>
              <input
                onChange={onFormChange}
                value={form.apartment_address}
                type="text"
                name="apartment_address"
              />
            </div>
            <div className="buttons">
              <button type="button" onClick={onEdit}>
                {editLoading ? "edit.." : "edit"}
              </button>
              <button type="button" onClick={onDelete}>
                {deleteLoading ? "delete.." : "delete"}
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

export default EditApartment;
