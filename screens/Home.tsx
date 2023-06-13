import styled from "styled-components/native";
import { Container } from "../components/shared";
import { colors } from "../components/colors";
import { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import logo1 from "./../assets/cards/visa_white.png";
import logo2 from "./../assets/cards/mc.png";
import CardSection from "../components/Cards/CardSection";

const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`;

const Home: FunctionComponent = () => {
  const cardsData = [
    {
      id: 1,
      accountNo: "3485757744",
      balance: 20000.15,
      alias: "Work Debit",
      logo: logo1,
    },
    {
      id: 2,
      accountNo: "3485757703",
      balance: 156.01,
      alias: "Personal Prepaid",
      logo: logo2,
    },
    {
      id: 3,
      accountNo: "3485757847",
      balance: 5622.18,
      alias: "School Prepaid",
      logo: logo1,
    },
  ];
  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <CardSection data={cardsData} />
    </HomeContainer>
  );
};

export default Home;
