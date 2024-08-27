import styled from "styled-components";
import Herosection from "../components/Herosection";

const Home = () => {
  const data = {
    name:'Temu'
  };
  return <Herosection data = {data} />
};

const Wrapper = styled.section`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export default Home;