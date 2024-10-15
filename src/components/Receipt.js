import styled from "styled-components";

const ReceiptContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  max-width: 600px;
  margin: 20px auto;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.span`
  font-weight: bold;
`;

const Value = styled.span`
  margin-left: 10px;
  color: #555;
`;

const Footer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Receipt = ({ ownerName, clientName, rentPrice, date }) => {
  return (
    <ReceiptContainer>
      <Header>
        <h2>Receipt</h2>
        <p>Thank you for your payment!</p>
      </Header>
      <Section>
        <Label>Owner:</Label>
        <Value>{ownerName}</Value>
      </Section>
      <Section>
        <Label>Client:</Label>
        <Value>{clientName}</Value>
      </Section>
      <Section>
        <Label>Rent Price:</Label>
        <Value>${rentPrice}</Value>
      </Section>
      <Section>
        <Label>Date:</Label>
        <Value>{date}</Value>
      </Section>
      <Footer>
        <p>We appreciate your business!</p>
      </Footer>
    </ReceiptContainer>
  );
};

export default Receipt;
