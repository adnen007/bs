import styled from "styled-components";
import Header from "../components/Header";
import BuildingSearch from "../components/BuildingSearch";
import Building from "../components/Building";
import Sidebar from "../components/Sidebar";

const buildings = [
  {
    name: "bn mahmoud",
    address: "dar fathal soukra",
    city: "soukra",
    appartments: "70",
  },
  {
    name: "bn mahmoud",
    address: "dar fathal soukra  7ayzohourr",
    city: "soukra",
    appartments: "70",
  },
  {
    name: "bn mahmoud",
    address: "dar fathal soukra",
    city: "soukra",
    appartments: "70",
  },
  {
    name: "bn mahmoud",
    address: "dar fathal soukra",
    city: "soukra",
    appartments: "70",
  },
];

const BuildingsPage = () => {
  return (
    <Wrapper>
      <Header />
      <Sidebar />

      <main>
        <div className="search_create ">
          <BuildingSearch />
        </div>
        <div className="content">
          {buildings.map((el) => {
            return <Building building={el} />;
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
    padding-bottom: 20px;
    max-width: 70%;
    margin: auto;
  }
  > main {
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
    grid-template-columns: repeat(auto-fill, minmax(230px, 260px));
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
      grid-template-columns: repeat(auto-fill, 210px);
      max-width: 90%;
    }
  }
  @media (min-width: 1200px) {
    > main .content {
      grid-template-columns: repeat(auto-fill, 210px);
      max-width: 1100px;
    }
  }
`;

export default BuildingsPage;
