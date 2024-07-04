import styled from "styled-components";

const Month = ({ month: { name, incomes, outcomes } }) => {
  return (
    <Wrapper>
      <div className="head">
        <p>{name}</p>
        <div className="checkbox">
          <input type="checkbox" />
        </div>
      </div>
      <div className="incomes">
        <p>incomes :</p> <p>{incomes} dt</p>
      </div>
      <div className="outcomes">
        <p>outcomes :</p> <p>{outcomes} dt</p>
      </div>
      <div className="text">
        <textarea placeholder="expenses description" name="" id=""></textarea>
      </div>

      <div className="buttons">
        <button className="edit">Edit</button>
        <button className="update">Update</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--clr-white);
  border: solid 1px var(--clr-black);
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  position: relative;

  > div {
    padding: 6px 15px;
  }
  .head {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    padding: 10px 15px;
  }
  .incomes,
  .outcomes {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
  .incomes {
    border-top: solid 1px var(--clr-black);
    padding-top: 20px;
  }
  .incomes p:first-child,
  .outcomes p:first-child {
    width: 90px;
    font-weight: 600;
    letter-spacing: 0.2px;
    font-size: 16px;
  }
  textarea {
    background-color: #8282821f;
    width: 100%;
    height: 80px;
    font-size: 12px;
    resize: none;
    margin: auto;
    margin-top: 12px;
    border: none;
    padding: 13px;
    border-radius: 7px;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    padding: 0px 15px 15px;
  }
  .buttons button {
    border: none;
    padding: 9px 12px;
    border-radius: 7px;
    color: white;
    background-color: var(--clr-brand-1);
  }
  .buttons button.edit {
    background-color: var(--clr-brand-3);
  }
`;
export default Month;
