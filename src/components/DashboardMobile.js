import styled from "styled-components";
import Header from "../components/Header";
import UsersSearch from "./UsersSearch";
import Row from "./Row";
import { useSelector } from "react-redux";
import Loading from "./Loading";

const DashboardMobile = () => {
  const users = useSelector((state) => state.user.users_filtered_list);

  const loading = useSelector((state) => state.user.loading);

  return (
    <Wrapper>
      <Header />
      <div className="search_create">
        <UsersSearch />
      </div>
      <div className="table">
        <div className="container">
          {loading ? (
            <Loading />
          ) : (
            users.map((el) => {
              return <Row user={el} />;
            })
          )}
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
