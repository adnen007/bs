import styled from "styled-components";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import YearSelect from "../components/YearSelect";
import Month from "../components/Month";

import { useState } from "react";

import { useLocation } from "react-router-dom";

const monthsData = [
  { id: 1, name: "January", rent: 5000, expenses: 3000 },
  { id: 2, name: "February", rent: 4500, expenses: 2500 },
  { id: 3, name: "March", rent: 4800, expenses: 2600 },
  { id: 4, name: "April", rent: 5200, expenses: 3100 },
  { id: 5, name: "May", rent: 5500, expenses: 3200 },
  { id: 6, name: "June", rent: 5300, expenses: 3000 },
  { id: 7, name: "July", rent: 5600, expenses: 3300 },
  { id: 8, name: "August", rent: 5700, expenses: 3400 },
  { id: 9, name: "September", rent: 6000, expenses: 3500 },
  { id: 10, name: "October", rent: 6200, expenses: 3600 },
  { id: 11, name: "November", rent: 6400, expenses: 3700 },
  { id: 12, name: "December", rent: 6600, expenses: 3800 },
];

const FinancialManagement = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const {
    state: { id },
  } = useLocation(); // the id of the current apartment

  // use this id to fetch the months list also ask ghassen why not to return the name of the tenant so you can just put it
  // in the reciept or you can do this in the front side.

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
