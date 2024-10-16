import styled from "styled-components";
import { CiMail, CiLocationOn, CiTimer, CiPhone } from "react-icons/ci";

const Info = () => {
  return (
    <Wrapper>
      <div className="row">
        <div className="icon">
          <CiMail />
        </div>
        <p>taoufikbensalem10@gmail.com</p>
      </div>
      <div className="row">
        <div className="icon">
          <CiPhone />
        </div>
        <p> + 98 238 638</p>
      </div>
      <div className="row">
        <div className="icon">
          <CiLocationOn />
        </div>
        <p>06.Rue Ghilel Choutrana III prés de vitatop</p>
      </div>
      <div className="row">
        <div className="icon">
          <CiTimer />
        </div>
        <p> 8:00 - 17:00</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 70px;

  background-color: #1e2834;
  border-radius: var(--radius);
  display: grid;
  gap: 32px;
  padding: 20px;
  @media (width >= 768px) {
    width: 290px;
  }
  .row {
    display: flex;
    gap: 10px;
    color: white;
  }
  .row p {
    display: flex;
    align-items: center;
    font-size: 15px;
  }
  .row .icon {
    font-size: 36px;
  }
  .icon svg {
    display: block;
  }
`;

export default Info;
