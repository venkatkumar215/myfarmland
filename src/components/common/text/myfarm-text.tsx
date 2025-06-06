import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  TextProps,
  StyleProp,
  TextStyle,
} from "react-native";
import { ThemeType } from "../../../config/type/ui-type/theme-type";
import { useTheme } from "../../../context/theme/themeContext";

interface Props extends TextProps {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
  bold?: boolean;
  fontSize?: keyof ThemeType["fonts"]["fontSize"];
  color?: keyof ThemeType["colors"]["text"];
}

const MyFarmText: React.FC<Props> = ({
  children,
  bold = false,
  fontSize = "md",
  color = "primary",
  style,
  ...props
}) => {
  const theme = useTheme();

  const styles = useMemo(
    () => createStyles(theme, fontSize, bold, color),
    [theme, fontSize, bold, color]
  );

  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
};

const createStyles = (
  theme: ThemeType,
  fontSize: keyof ThemeType["fonts"]["fontSize"],
  bold: boolean,
  color: keyof ThemeType["colors"]["text"]
) =>
  StyleSheet.create({
    text: {
      fontWeight: bold ? "bold" : "normal",
      fontSize: theme.fonts.fontSize[fontSize] || theme.fonts.fontSize.md,
      color: theme.colors.text[color] || theme.colors.text.primary,
      fontFamily: theme.fonts.fontFamily,
    },
  });

export default MyFarmText;
