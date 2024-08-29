import styled from "styled-components";
import Herosection from "../components/Herosection";
import Services from "../components/Services";
import Trusted from "../components/Trusted";
import FeatureProduct from "../components/FeatureProduct";

const Home = () => {
  const data = {
    name:'Temu'
  };
  return (<>
              <Herosection data = {data} />
              <FeatureProduct/>
              <Services/>
              <Trusted/>
  </>);
  
};

const Wrapper = styled.section`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export default Home;