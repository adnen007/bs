import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { BsFillBuildingsFill } from "react-icons/bs";
import { ImStatsDots } from "react-icons/im";
import { FaUser } from "react-icons/fa6";

const Nav = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  let nav = <ul></ul>;
  if (currentPath.includes("/dashboard")) {
    nav = (
      <ul>
        <li>
          <Link to="/dashboard">
            <div className="icon">
              <FaUser />
            </div>
            <p>Users</p>
          </Link>
        </li>
      </ul>
    );
  } else if (currentPath.includes("/buildings") || currentPath === "/stats") {
    nav = (
      <ul>
        <li>
          <Link to="/buildings">
            <div className="icon">
              <BsFillBuildingsFill />
            </div>
            <p>Buildings</p>
          </Link>
        </li>
        <li>
          <Link>
            <div className="icon">
              <ImStatsDots />
            </div>
            <p>Stats</p>
          </Link>
        </li>
      </ul>
    );
  } else if (currentPath.includes("/apartments") || currentPath === "/renting-info") {
    nav = (
      <ul>
        <li>
          <Link to="/buildings">
            <div className="icon">
              <BsFillBuildingsFill />
            </div>
            <p>Buildings</p>
          </Link>
        </li>
        <li>
          <Link>
            <div className="icon">
              <ImStatsDots />
            </div>
            <p>Stats</p>
          </Link>
        </li>
        <li>
          <Link>
            <div className="icon">
              <ImStatsDots />
            </div>
            <p>apartments</p>
          </Link>
        </li>
      </ul>
    );
  }
  return <Wrapper>{nav}</Wrapper>;
};

const Wrapper = styled.nav`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  margin-top: 90px;
  color: var(--clr-t-8);

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 45px;
  }
  li {
    font-weight: 600;
    font-size: 26px;
    letter-spacing: 1px;
    text-align: center;
  }
  li a {
    display: flex;
    color: var(--clr-t-8);
  }
  li a .icon {
    margin-right: 14px;
  }
  li a .icon svg {
    display: block;
    color: var(--clr-t-8);
    font-size: 24px;
  }

  @media (min-width: 768px) {
    margin-top: 60px;

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 25px;
    }
    li {
      font-weight: 500;
      font-size: 12px;
    }
    li a .icon {
      margin-right: 10px;
    }
    li a .icon svg {
      font-size: 12px;
    }
  }

  @media (min-width: 1200px) {
    ul {
      gap: 30px;
    }

    li {
      font-weight: 500;
      font-size: 16px;
    }
  }
`;

export default Nav;
