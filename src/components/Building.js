import styled from "styled-components";
import { FaMapMarkerAlt, FaHome } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";

import { IoMdSettings } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { apartmentsActions } from "../features/aparments/aparmentsSlice";
import { useDispatch } from "react-redux";

const Building = ({
  building: {
    nom: name,
    adresse: address,
    nombre_appartement: apartments,
    ville: city,
    id,
  },
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onBuildingclick = () => {
    dispatch(apartmentsActions.currentBuilding(id));
    navigate("/apartments");
  };
  const onEditClick = (e) => {
    e.stopPropagation();
    navigate("/buildings/edit", { state: { name, address, apartments, city, id } });
  };

  return (
    <Wrapper onClick={onBuildingclick}>
      <div>
        {/* <div className="icon">
          <BsFillBuildingsFill />
        </div> */}
        <div className="name">{name}</div>
      </div>
      <div>
        <div className="icon">
          <FaLocationCrosshairs />
        </div>
        <div className="info">
          <p className="title">address</p>
          <p>{address}</p>
        </div>
      </div>
      <div>
        <div className="icon">
          <FaMapMarkerAlt />
        </div>
        <div className="info">
          <p className="title">city</p>
          <p>{city}</p>
        </div>
      </div>
      <div>
        <div className="icon">
          <FaHome />
        </div>
        <div className="info">
          <p className="title">apartments</p>
          <p>{apartments}</p>
        </div>
      </div>
      <span onClick={onEditClick} className="setting">
        <IoMdSettings />
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--clr-white);
  /* padding: 20px; */
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  position: relative;

  > div {
    display: flex;
    align-items: center;
    padding: 10px 16px;
    gap: 15px;
  }
  > div:first-child {
    justify-content: center;
  }

  > div:not(:first-child) {
    border-top: 1px solid #e4e4e482;
    /* border-top: 1px solid var(--clr-b-1); */
  }
  > div:nth-child(2) {
    border-top: 2px solid var(--clr-b-1);
  }

  .name {
    padding: 6px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 600;
    text-transform: capitalize;
  }

  .icon svg {
    font-size: 22px;
    display: block;
  }
  p {
    font-size: 16px;
    width: 150px;
    text-transform: capitalize;
  }
  p:nth-child(2) {
    font-size: 12px;
  }

  .info .title {
    font-weight: 600;
    margin-bottom: 8px;
    text-transform: capitalize;
  }
  .setting {
    display: block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    border-top: none;
  }
  .setting svg {
    font-size: 26px;
    display: block;
    color: var(--clr-brand-1);
  }
`;

export default Building;
