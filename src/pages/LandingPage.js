import styled from "styled-components";
import Hero from "../components/Hero";
import LandingHeader from "../components/LandingHeader";
import Services from "../components/Services";
const LandingPage = () => {
  return (
    <Wrapper>
      <LandingHeader />
      <Hero />
      <Services />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
`;

export default LandingPage;
