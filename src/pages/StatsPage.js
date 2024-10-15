import styled from "styled-components";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";

const StatsPage = () => {
  return (
    <Wrapper>
      <Header />
      <Sidebar />

      <main>
        <h2>Stats Page</h2>
        <div className="content">
          <PieChart />
          <BarChart />
        </div>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  @media (min-width: 768px) {
    display: flex;
  }

  main {
    height: calc(100vh - 70px);
  }

  @media (min-width: 768px) {
    > main {
      height: 100vh;
      overflow-y: auto;
      flex-grow: 1;
    }
  }

  h2 {
    width: fit-content;
    margin: auto;
    margin-top: 30px;
    color: #1e2834ed;
  }

  > main .content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 400px));
    gap: 60px;
    margin: auto;
    padding-top: 60px;
    padding-bottom: 60px;
    padding-left: 15px;
    padding-right: 15px;
    justify-content: center;
    height: 100%;
  }
  @media (min-width: 768px) {
    > main .content {
      grid-template-columns: repeat(auto-fit, minmax(300px, 400px));
      max-width: 90%;
    }
  }
  @media (min-width: 1200px) {
    > main .content {
      grid-template-columns: repeat(auto-fit, minmax(300px, 400px));
      max-width: 1100px;
    }
  }
`;

export default StatsPage;
