import styled from "styled-components";
import { BsFillBuildingsFill } from "react-icons/bs";
import { FaPhoneAlt, FaMapMarkerAlt, FaHome } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { BiDollar } from "react-icons/bi";

const Apartment = ({ apartment: { name, phone, location, rent } }) => {
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
      <div className="name">
        <div className="icon">
          <span> {name[0]}</span>
        </div>
        <p>{name}</p>
      </div>

      <div className="phone">
        <div className="icon">
          <FaPhoneAlt />
        </div>
        <p>{phone}</p>
      </div>
      <div className="rent">
        <div className="icon">
          <BiDollar />
        </div>
        <p>{rent}</p>
      </div>
      <div className="location">
        <div className="icon">
          <FaHome />
        </div>
        <p>{location}</p>
      </div>

      <span onClick={onEditClick} className="setting">
        <IoMdSettings />
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--clr-white);
  padding: 10px 20px 30px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  position: relative;

  > div {
    display: flex;
    align-items: center;
    padding: 15px 0;
    gap: 10px;
    /* justify-content: center; */
  }
  > div:not(:first-child) {
    /* border-top: 1px solid var(--clr-black); */
    border-top: 1px solid #444;
  }

  .icon {
  }
  .icon svg {
    font-size: 17px;
    display: block;
  }
  .name {
    gap: 20px;
  }

  .name .icon {
    color: var(--clr-white);
    background-color: var(--clr-black);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 8px;
  }
  .name span {
    display: block;
    font-size: 24px;
    font-weight: 600;
    text-transform: uppercase;
  }
  p {
    font-size: 16px;
    width: 100px;
    text-transform: capitalize;
  }
  .name > p {
    font-size: 20px;
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
  }
`;

export default Apartment;
