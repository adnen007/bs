import styled from "styled-components";
import Header from "../components/Header";
import UsersSearch from "./UsersSearch";
import Row from "./Row";
import user from "../assets/images/user.png";

const users = [
  {
    name: "Gashen Abidi",
    email: "Gashenabidi63@gmail.com",
    phone: "2659263652",
    location: "tunis",
    id: 1,
    img: user,
  },
  {
    name: "Gashen Abidi",
    email: "Gashenabidi63@gmail.com",
    phone: "2659263652",
    location: "tunis",
    id: 2,
    img: user,
  },
  {
    name: "Gashen Abidi",
    email: "Gashenabidi63@gmail.com",
    phone: "2659263652",
    location: "tunis",
    id: 3,
    img: user,
  },
  {
    name: "Gashen Abidi",
    email: "Gashenabidi63@gmail.com",
    phone: "2659263652",
    location: "tunis",
    id: 4,
    img: user,
  },
  {
    name: "Gashen Abidi",
    email: "Gashenabidi63@gmail.com",
    phone: "2659263652",
    location: "tunis",
    id: 5,
    img: user,
  },
  {
    name: "Gashen Abidi",
    email: "Gashenabidi63@gmail.com",
    phone: "2659263652",
    location: "tunis",
    id: 6,
    img: user,
  },
  {
    name: "Gashen Abidi",
    email: "Gashenabidi63@gmail.com",
    phone: "2659263652",
    location: "tunis",
    id: 7,
    img: user,
  },
  {
    name: "Gashen Abidi",
    email: "Gashenabidi63@gmail.com",
    phone: "2659263652",
    location: "tunis",
    id: 8,
    img: user,
  },
  {
    name: "Gashen Abidi",
    email: "Gashenabidi63@gmail.com",
    phone: "2659263652",
    location: "tunis",
    id: 9,
    img: user,
  },
  {
    name: "Gashen Abidi",
    email: "Gashenabidi63@gmail.com",
    phone: "2659263652",
    location: "tunis",
    id: 10,
    img: user,
  },
  {
    name: "Gashen Abidi",
    email: "Gashenabidi63@gmail.com",
    phone: "2659263652",
    location: "tunis soukra ariana dar fathal 2",
    id: 11,
    img: user,
  },
];

const DashboardMobile = () => {
  return (
    <Wrapper>
      <Header />
      <div className="search_create">
        <UsersSearch />
      </div>
      <div className="table">
        <div className="container">
          {users.map((el) => {
            return <Row user={el} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .search_create {
    background-color: var(--clr-white);
    padding: 30px 0;
  }
  .table {
    background-color: var(--clr-brand-1);
    padding: 20px 0;
  }
  .table .container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 50px;
    padding: 0;
    width: 90%;
  }
`;

export default DashboardMobile;
