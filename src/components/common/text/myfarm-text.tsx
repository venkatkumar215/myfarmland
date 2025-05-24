import React, { Children, ReactNode } from "react";
import {
  Text,
  StyleSheet,
  TextProps,
  StyleProp,
  TextStyle,
} from "react-native";
import { ThemeType } from "../../../config/type/ui-type/theme-type";
import { useTheme } from "../../../context/theme/themeContext";
import { fontSize } from "../../../styles/theme";

interface Props extends TextProps {
  // Define the props for the MyFarmText component
  style?: StyleProp<TextStyle>;
  children: ReactNode;
  bold?: boolean;
  fontSize?: keyof ThemeType["fontSize"]; // Optional prop to determine the font size
  color?: keyof ThemeType["colors"]["text"]; // Optional prop to determine the text color
  // The color prop can be one of the keys in the colors.text object
}

const MyFarmText: React.FC<Props> = ({
  children,
  bold,
  fontSize = "md",
  color = "primary",
  style,
  ...props
}) => {
  const theme = useTheme(); // Get the current theme from the context
  // Define styles for the text based on the theme and bold prop

  const getTextStyle = (theme: ThemeType) =>
    StyleSheet.create({
      text: {
        fontSize: theme.fontSize[fontSize],
        color: theme.colors.text[color],
      },
    });

  const textStyle = StyleSheet.create({
    text: {
      fontWeight: bold ? "bold" : "normal",
      fontSize: getTextStyle(theme).text.fontSize,
      color: getTextStyle(theme).text.color,
      fontFamily: "Quicksand-Regular",
    },
  });
  return (
    <Text style={[textStyle.text, style]} {...props}>
      {children}
    </Text>
  );
};

export default MyFarmText;
