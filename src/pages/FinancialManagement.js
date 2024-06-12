import styled from "styled-components";
import Header from "../components/Header";

import Sidebar from "../components/Sidebar";
import ApartmentsSearch from "../components/ApartmentsSearch";
import Apartment from "../components/Apartment";

const apartments = [
  {
    name: "Adnen Soltani",
    phone: "264869165",
    rent: "800dt",
    location: "lvl1 b3",
  },
  {
    name: "Adnen Soltani",
    phone: "264869165",
    rent: "800dt",
    location: "lvl1 b3",
  },
  {
    name: "Adnen Soltani",
    phone: "264869165",
    rent: "800dt",
    location: "lvl1 b3",
  },
  {
    name: "Adnen Soltani",
    phone: "264869165",
    rent: "800dt",
    location: "lvl1 b3",
  },
];

const FinancialManagement = () => {
  return (
    <Wrapper>
      <Header />
      <Sidebar />

      <main>
        <div className="search_create ">
          <ApartmentsSearch />
        </div>
        <div className="content">
          {apartments.map((el) => {
            return <Apartment apartment={el} />;
          })}
        </div>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  @media (min-width: 768px) {
    display: flex;
  }
  .search_create {
    padding-top: 30px;
    padding-bottom: 30px;
    max-width: 80%;
    margin: auto;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 768px) {
    > main {
      height: 100vh;
      overflow-y: auto;
      flex-grow: 1;
    }
  }
  > main .content {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 240px));
    gap: 30px;
    margin: auto;
    margin-top: 30px;
    padding-bottom: 60px;
    padding-left: 15px;
    padding-right: 15px;
    justify-content: center;
  }
  @media (min-width: 768px) {
    > main .content {
      grid-template-columns: repeat(auto-fill, 200px);
      max-width: 90%;
    }
  }
  @media (min-width: 1200px) {
    > main .content {
      max-width: 1100px;
    }
  }
`;

export default FinancialManagement;
