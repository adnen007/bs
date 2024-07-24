import styled from "styled-components";
import Header from "../components/Header";

import Sidebar from "../components/Sidebar";

// you created this page in hurry you just copy past the apartmentsPage and changed somethings and delete some style.
// consider redoing it.

const StatsPage = () => {
  return (
    <Wrapper>
      <Header />
      <Sidebar />

      <main>
        <h1> NOT READY YET </h1>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h1 {
    margin-top: 50px;
    margin-left: 50px;
  }
  @media (min-width: 768px) {
    display: flex;
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

export default StatsPage;
