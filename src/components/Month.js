import styled from "styled-components";
import { useReactToPrint } from "react-to-print";
import { useRef, useState } from "react";
import { FaRegSave } from "react-icons/fa";
import { MdOutlineLocalPrintshop } from "react-icons/md";
import Receipt from "./Receipt";
import { useSelector } from "react-redux";

const Month = ({ month: { name, rent, expenses } }) => {
  const componentRef = useRef();

  const ownerName = useSelector((state) => state.user.user.fullname);

  const [rentState, setRentState] = useState({ name, rent, expenses, description: "" });

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const onFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRentState({ ...rentState, [name]: value });
  };

  const onSaveClick = (e) => {
    e.preventDefault();

    // so basically here I'll get the data from rent state and some other data from context and use redux to dispatch
    // an action that will update this month in the api
  };

  return (
    <Wrapper>
      <div className="head">
        <p>{name}</p>
        <div className="checkbox">
          <input type="checkbox" />
        </div>
      </div>
      <div className="rent">
        <p>Rent Price :</p>
        <p>
          <input
            onChange={onFormChange}
            name="rent"
            type="number"
            value={rentState.rent}
          />
        </p>
      </div>
      <div className="expenses">
        <p>Expenses :</p>
        <p>
          <input
            onChange={onFormChange}
            name="expenses"
            type="number"
            value={rentState.expenses}
          />
        </p>
      </div>
      <div className="text">
        <textarea
          placeholder="expenses description"
          name="description"
          value={rentState.description}
          onChange={onFormChange}
        ></textarea>
      </div>

      <div className="buttons">
        <button onClick={onSaveClick} className="save">
          <FaRegSave />
        </button>
        {/* <button className="edit">
          <FiEdit />
        </button> */}
        <button onClick={handlePrint} className="print">
          <MdOutlineLocalPrintshop />
        </button>
      </div>
      <div ref={componentRef} className="receipt">
        <Receipt
          ownerName={ownerName}
          clientName={name}
          rentPrice={rent}
          date={new Date().toDateString()}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--clr-white);
  border: solid 1px var(--clr-black);
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  position: relative;

  .receipt {
    display: none;
  }
  > div {
    padding: 6px 15px;
  }
  .head {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    padding: 10px 15px;
  }
  .rent,
  .expenses {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
  .rent input,
  .expenses input {
    margin: 0px;
    display: block;
    width: 67px;
    padding: 0px;
  }
  .rent {
    border-top: solid 1px var(--clr-black);
    padding-top: 20px;
  }
  .rent p:first-child,
  .expenses p:first-child {
    width: 90px;
    font-weight: 600;
    letter-spacing: 0.2px;
    font-size: 16px;
  }
  textarea {
    background-color: #8282821f;
    width: 100%;
    height: 80px;
    font-size: 12px;
    resize: none;
    margin: auto;
    margin-top: 12px;
    border: none;
    padding: 13px;
    border-radius: 7px;
  }
  .buttons {
    display: flex;
    justify-content: center;
    gap: 60px;
    margin-top: 15px;
    padding: 0px 15px 20px;
  }
  .buttons button {
    border: none;
    background: white;
    font-size: 29px;
  }
  .buttons button svg {
    display: block;
  }
`;
export default Month;
