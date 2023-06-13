import { styled } from "styled-components/native";
import { colors } from "../colors";
import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import { FunctionComponent } from "react";
import RegularText from "../Texts/RegularText";

const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.primary};
  width: 100%;
  padding: 20px;
  border-radius: 20px;
`;

interface ButtonProps {
  bunStyle?: StyleProp<ViewStyle>;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  textStyles?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

const RegularButton: FunctionComponent<ButtonProps> = (props) => {
  return (
    <ButtonView onPress={props.onPress} style={props.bunStyle}>
      <RegularText textStyles={props.textStyles}>{props.children}</RegularText>
    </ButtonView>
  );
};

export default RegularButton;
