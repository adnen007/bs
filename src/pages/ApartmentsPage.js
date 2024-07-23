import styled from "styled-components";
import Header from "../components/Header";

import Sidebar from "../components/Sidebar";
import ApartmentsSearch from "../components/ApartmentsSearch";
import Apartment from "../components/Apartment";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchApartments } from "../features/aparments/aparmentsAsync";
import { useLocation } from "react-router-dom";

const ApartmentsPage = () => {
  const apartments = useSelector((state) => {
    return state.apartments.apartments_list;
  });

  const dispatch = useDispatch();
  const {
    state: { id },
  } = useLocation();

  useEffect(() => {
    dispatch(fetchApartments(id));
    // here are not using the id now but after telling ghasen to fix this we will use it
  }, [dispatch, id]);

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
            return <Apartment key={el.id} apartment={el} />;
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
      /* grid-template-columns: repeat(auto-fill, 210px); */
      max-width: 1100px;
    }
  }
`;

export default ApartmentsPage;
