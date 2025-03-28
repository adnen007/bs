import styled from "styled-components";
import { FaPhoneAlt, FaHome } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { BiDollar } from "react-icons/bi";

// hey there change the description witH name and change the stage with location or address when
// ghassen fix this

const Apartment = ({ apartment: { description, numero, etage, prix, id } }) => {
  const navigate = useNavigate();

  const onApartmentClick = () => {
    navigate("/financialmanagement", { state: { id } });
    // here in the navigate you should pass the id of the apartment tenant.
  };
  const onEditClick = (e) => {
    e.stopPropagation();
    navigate("/apartments/edit", { state: { description, numero, etage, prix, id } });
  };

  return (
    <Wrapper onClick={onApartmentClick}>
      <div className="name">
        <div className="icon">
          <span> {description[0]}</span>
        </div>
        <p>{description}</p>
      </div>

      <div className="phone">
        <div className="icon">
          <FaPhoneAlt />
        </div>
        <p>{numero}</p>
      </div>
      <div className="rent">
        <div className="icon">
          <BiDollar />
        </div>
        <p>{prix}</p>
      </div>
      <div className="location">
        <div className="icon">
          <FaHome />
        </div>
        <p>{etage}</p>
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
    background-color: var(--clr-brand-1);
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
    color: var(--clr-brand-1);
  }
  @media (min-width: 768px) {
  }
`;

export default Apartment;
