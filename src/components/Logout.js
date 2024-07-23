import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userActions } from "../features/user/userSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.clear();
    dispatch(userActions.logout());
    navigate("/");
  };

  return (
    <Wrapper onClick={onLogout}>
      <div className="icon">
        <CiLogout />
      </div>
      <Link to="/">Logout</Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .icon {
    margin-right: 8px;
  }
  .icon svg {
    display: block;
  }
  a {
    color: var(--clr-t-8);
    font-size: 26px;
  }

  @media (min-width: 768px) {
    .icon {
      margin-right: 8px;
    }
    .icon svg {
      display: block;
      font-size: 14px;
    }
    a {
      color: var(--clr-t-8);
      font-size: 14px;
    }
  }

  @media (min-width: 1200px) {
    .icon {
      margin-right: 12px;
    }
    .icon svg {
      font-size: 18px;
    }
    a {
      font-size: 18px;
      font-weight: 600;
    }
  }
`;

export default Logout;
