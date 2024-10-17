import styled from "styled-components";
import Header from "../components/Header";
import BuildingSearch from "../components/BuildingSearch";
import Building from "../components/Building";
import Sidebar from "../components/Sidebar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBuildings } from "../features/buildings/buildingsAsync";
import Loading from "../components/Loading";

const BuildingsPage = () => {
  const dispatch = useDispatch();
  const { loading, filtered_buildings_list: filterdBuildings } = useSelector(
    (state) => state.buildings
  );
  const id = useSelector((state) => state.user.user.id);
  useEffect(() => {
    dispatch(fetchBuildings(id));
  }, [dispatch, id]);

  return (
    <Wrapper>
      <Header />
      <Sidebar />

      <main>
        <div className="search_create ">
          <BuildingSearch />
        </div>
        <div className="content">
          {loading ? (
            <Loading type="section" />
          ) : (
            filterdBuildings.map((el) => {
              return <Building key={el.id} building={el} />;
            })
          )}
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
    grid-template-columns: repeat(auto-fit, 230px);
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
      grid-template-columns: repeat(auto-fit, 210px);
      max-width: 90%;
    }
  }
  @media (min-width: 1200px) {
    > main .content {
      grid-template-columns: repeat(auto-fit, 210px);
      max-width: 1100px;
    }
  }
`;

export default BuildingsPage;
