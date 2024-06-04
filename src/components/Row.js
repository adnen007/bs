import styled from "styled-components";
import { Link } from "react-router-dom";

const Row = ({ user: { name, location, phone, email } }) => {
  return (
    <Wrapper>
      <div className="name">
        <p>Name :</p>
        <p>{name}</p>
      </div>
      <div className="location">
        <p>Address :</p>
        <p>{location}</p>
      </div>
      <div className="phone">
        <p>Phone :</p>
        <p>{phone}</p>
      </div>
      <div className="email">
        <p>Email :</p>
        <p>{email}</p>
      </div>
      <div className="actions">
        <Link to="/dashboard/edit">edit</Link>

        <button>delete</button>
        <button>reset</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  > div {
    display: flex;
    justify-content: space-between;
    color: white;
    align-items: center;
    padding: 15px 15px;
    font-size: 16px;
    font-weight: 500;
  }
  > div:not(:first-child) {
    border-top: 1px solid var(--clr-b-1);
  }
  > div:first-child {
    background-color: var(--clr-b-1);
    color: var(--clr-black);
    border-radius: var(--radius);
  }
  > div:last-child {
    padding-top: 30px;
  }
  p {
    width: 180px;
    overflow: hidden;
  }
  @media (min-width: 425px) {
    p {
      width: 220px;
    }
  }
  p:first-child {
    width: 70px;
  }

  .actions button,
  .actions a {
    display: block;
    color: var(--clr-white);
    background-color: var(--clr-black);
    padding: 11px 15px;
    border-radius: 10px;
    overflow: hidden;
    font-size: 17px;
    text-transform: uppercase;
    letter-spacing: 1px;
    border: none;
  }
`;

export default Row;
