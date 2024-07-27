import styled from "styled-components";
import Hero from "../components/Hero";
import LandingHeader from "../components/LandingHeader";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
const LandingPage = () => {
  return (
    <Wrapper>
      <LandingHeader />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
`;

export default LandingPage;
