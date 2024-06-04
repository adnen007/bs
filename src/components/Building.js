import styled from "styled-components";
import { BsFillBuildingsFill } from "react-icons/bs";
import { FaMap, FaMapMarkerAlt, FaHome } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Building = ({ building: { name, address, appartments, city } }) => {
  const navigate = useNavigate();

  const onBuildingclick = () => {
    navigate("/apartments");
  };
  const onEditClick = (e) => {
    e.stopPropagation();
    navigate("/buildings/edit");
  };

  return (
    <Wrapper onClick={onBuildingclick}>
      <div>
        <div className="icon">
          <BsFillBuildingsFill />
        </div>
        <p>{name}</p>
      </div>
      <div>
        <div className="icon">
          <FaMap />
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
          <p className="title">appartments</p>
          <p>{appartments}</p>
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
  padding: 20px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  position: relative;

  > div {
    display: flex;
    align-items: center;
    padding: 15px 0;
    gap: 40px;
    justify-content: center;
  }
  > div:not(:first-child) {
    border-top: 1px solid var(--clr-black);
  }

  .icon {
  }
  .icon svg {
    font-size: 26px;
    display: block;
  }
  p {
    font-size: 18px;
    width: 150px;
    text-transform: capitalize;
  }
  .info {
  }
  .info .title {
    font-weight: 700;
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
  }
  @media (min-width: 768px) {
    padding: 15px;
    padding-bottom: 20px;
    > div {
      padding: 13px 0;
      gap: 20px;
      justify-content: center;
    }
    > div:not(:first-child) {
      border-top: 1px solid var(--clr-black);
    }

    .icon {
    }
    .icon svg {
      font-size: 20px;
      display: block;
    }
    p {
      font-size: 14px;
      width: 140px;
      text-transform: capitalize;
    }
    .info {
    }
    .info .title {
      font-weight: 700;
      margin-bottom: 8px;
      text-transform: capitalize;
    }
    .setting {
      display: block;
      position: absolute;
      bottom: 6px;
      right: 6px;
      border-top: none;
    }
    .setting svg {
      font-size: 22px;
    }
  }
`;

export default Building;
