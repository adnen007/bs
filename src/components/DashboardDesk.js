import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

import { CiLocationOn } from "react-icons/ci";
import { FiPhone, FiEdit } from "react-icons/fi";
import { GrPowerReset } from "react-icons/gr";

import { MdPendingActions, MdDeleteOutline } from "react-icons/md";
import userImage from "../assets/images/user.png";
import Sidebar from "../components/Sidebar";
import UsersSearch from "./UsersSearch";

import Loading from "./Loading";

import { useSelector } from "react-redux";

const DashboardDesk = () => {
  const users = useSelector((state) => state.user.users_filtered_list);
  const loading = useSelector((state) => state.user.loading);

  return (
    <Wrapper>
      <Sidebar />
      <div className="content">
        <UsersSearch />
        <div className="table">
          <div className="header-row">
            <div className="name">
              <div className="icon">
                <FaRegUserCircle />
              </div>
              <p>Name</p>
            </div>
            <div className="phone">
              <div className="icon">
                <FiPhone />
              </div>
              <p>Phone</p>
            </div>
            <div className="location">
              <div className="icon">
                <CiLocationOn />
              </div>
              <p>Location</p>
            </div>
            <div className="action">
              <div className="icon">
                <MdPendingActions />
              </div>
              <p>Actions</p>
            </div>
          </div>
          <div className="rows">
            {loading ? (
              <Loading type="section" />
            ) : (
              users.map((el) => {
                return (
                  <div key={el.id} className="row">
                    <div className="name">
                      <div className="image">
                        <img src={userImage} alt="" />
                      </div>
                      <div className="info">
                        <p>{el.fullname}</p>
                        <p className="email">{el.email}</p>
                      </div>
                    </div>
                    <div className="phone">{el.phonenumber}</div>
                    <div className="location">{el.address}</div>
                    <div className="actions">
                      <Link to="/dashboard/edit" className="edit">
                        <FiEdit />
                      </Link>
                      <div className="delete">
                        <MdDeleteOutline />
                      </div>
                      <div className="reset">
                        <GrPowerReset />
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  min-height: 100vh;

  .content {
    flex-grow: 1;
    background-color: var(--clr-white);
    padding: 20px 0;
    max-height: 100vh;
    overflow: auto;
  }

  .table {
    width: 94%;
    margin: auto;
    margin-top: 60px;
  }

  .table .header-row {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    margin-bottom: 6px;
  }
  .table .header-row > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .table .header-row > .name {
    justify-content: start;
  }
  .table .icon {
    margin-right: 7px;
  }

  .table .icon svg {
  }
  .table p {
    font-size: 13px;
  }

  .rows {
  }
  .row {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    border-top: solid 1px var(--clr-b-4);
    height: 50px;
  }
  .row > div {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    overflow: auto;
  }
  .row > .name {
    justify-content: start;
  }
  .row .name .image {
    margin-right: 10px;
  }
  .row .name img {
    width: 28px;
  }
  .row .name .info {
    line-height: 17px;
  }
  .row .info p {
  }
  .row .info .email {
    font-size: 11px;
  }
  .row .phone {
    font-size: 14px;
    /* max-width: 100%; */
  }
  .row .location {
  }
  .row .actions {
    gap: 6px;
  }
  .row .actions svg {
    font-size: 18px;
    cursor: pointer;
  }

  @media (width >= 1200px) {
    .table {
      width: 1140px;
      max-width: 94%;
    }

    .table .header-row {
      margin-bottom: 10px;
    }

    .table .icon {
      margin-right: 9px;
    }

    .table p {
      font-size: 16px;
    }

    .row {
      height: 60px;
    }

    .row .name .image {
      margin-right: 10px;
    }
    .row .name img {
      width: 32px;
    }
    .row .name .info {
      line-height: 20px;
    }

    .row .info .email {
      font-size: 12px;
    }
    .row .phone {
      font-size: 16px;
    }

    .row .actions {
      gap: 8px;
    }
    .row .actions svg {
      font-size: 22px;
    }
  }
`;

export default DashboardDesk;
