import styled from "styled-components/native";
import { Container } from "../components/shared";
import { colors } from "../components/colors";
import { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";

const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`;

const Home: FunctionComponent = () => {
  return (
    <HomeContainer>
      <StatusBar style="dark" />
    </HomeContainer>
  );
};

export default Home;
