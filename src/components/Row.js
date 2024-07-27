import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../features/user/userAsync";

const Row = ({ user: { fullname, address, phonenumber, email, id } }) => {
  const dispatch = useDispatch();
  const resetPasswordLoading = useSelector((state) => state.user.reset_password.loading);

  const onResetPass = () => {
    dispatch(resetPassword({ email }));
  };

  return (
    <Wrapper>
      <div className="name">
        <p>Name :</p>
        <p>{fullname}</p>
      </div>
      <div className="location">
        <p>Address :</p>
        <p>{address}</p>
      </div>
      <div className="phone">
        <p>Phone :</p>
        <p>{phonenumber}</p>
      </div>
      <div className="email">
        <p>Email :</p>
        <p>{email}</p>
      </div>
      <div className="actions">
        <Link
          to="/dashboard/edit"
          state={{ el: { fullname, address, phonenumber, email, id } }}
        >
          edit
        </Link>

        <button>delete</button>
        <button onClick={onResetPass}>
          {resetPasswordLoading === email ? "reset..." : "reset"}
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: rgb(247 250 255 / 25%) 0px 4px 8px -2px,
    rgb(253 253 253 / 8%) 0px 0px 0px 1px;
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
  > div:nth-child(2) {
    border-top: none;
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
    background-color: var(--clr-brand-2);
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
