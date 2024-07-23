import styled from "styled-components";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import YearSelect from "../components/YearSelect";
import Month from "../components/Month";

import { useState } from "react";

const monthsData = [
  { id: 1, name: "January", incomes: 5000, outcomes: 3000 },
  { id: 2, name: "February", incomes: 4500, outcomes: 2500 },
  { id: 3, name: "March", incomes: 4800, outcomes: 2600 },
  { id: 4, name: "April", incomes: 5200, outcomes: 3100 },
  { id: 5, name: "May", incomes: 5500, outcomes: 3200 },
  { id: 6, name: "June", incomes: 5300, outcomes: 3000 },
  { id: 7, name: "July", incomes: 5600, outcomes: 3300 },
  { id: 8, name: "August", incomes: 5700, outcomes: 3400 },
  { id: 9, name: "September", incomes: 6000, outcomes: 3500 },
  { id: 10, name: "October", incomes: 6200, outcomes: 3600 },
  { id: 11, name: "November", incomes: 6400, outcomes: 3700 },
  { id: 12, name: "December", incomes: 6600, outcomes: 3800 },
];

const FinancialManagement = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handleYearChange = (event) => {
    const year = event.target.value;
    setSelectedYear(year);
    console.log(`Selected year: ${year}`);
  };

  // here should return a loading then send request to get the data of the current year and when we
  // get the response we stop loading
  // we will have a function in the context that fetch the finance of certain year we will just get
  // that function here and pass the year to it.

  return (
    <Wrapper>
      <Header />
      <Sidebar />

      <main>
        <div className="years">
          <YearSelect onChange={handleYearChange} start="2020" />
        </div>
        <div className="content">
          {monthsData.map((el) => {
            return <Month key={el.id} month={el} />;
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
  .years {
    margin-top: 38px;
    display: flex;
    justify-content: center;
  }
  .years select {
    font-size: 20px;
    padding: 8px 7px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
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
    grid-template-columns: repeat(auto-fill, minmax(200px, 220px));
    gap: 40px;
    margin: auto;
    margin-top: 45px;
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
