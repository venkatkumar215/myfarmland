import React, { forwardRef, useMemo } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  StyleProp,
  TextStyle,
} from "react-native";
import { ThemeType } from "../../../config/type/ui-type/theme-type";
import { useTheme } from "../../../context/theme/themeContext";

const styles = (
  theme: ThemeType,
  fontSize: keyof ThemeType["fonts"]["fontSize"],
  bottomBorder: boolean
) =>
  StyleSheet.create({
    container: {
      width: "100%",
      marginVertical: 8,
      flexDirection: "column",
    },
    input: {
      width: "100%",
      height: 50,
      borderColor: theme.colors.inputText.secondary,
      borderWidth: 1,
      borderBottomWidth: bottomBorder ? 2 : 1,
      borderTopWidth: bottomBorder ? 0 : 1,
      borderLeftWidth: bottomBorder ? 0 : 1,
      borderRightWidth: bottomBorder ? 0 : 1,
      borderRadius: bottomBorder ? 0 : 10,
      paddingHorizontal: 12,
      fontSize: theme.fonts.fontSize[fontSize],
      backgroundColor: theme.colors.inputText.primary,
    },
    errorText: {
      color: theme.colors.error.primary,
      marginTop: 5,
      marginBottom: 5,
    },
  });

type Props = React.ComponentProps<typeof TextInput> & {
  children?: React.ReactNode;
  fontSize?: keyof ThemeType["fonts"]["fontSize"];
  errorMessage?: string;
  errorFlag?: boolean;
  style?: StyleProp<TextStyle>;
  bottomBorder?: boolean;
};

const MyfarmInput = forwardRef<TextInput, Props>(
  (
    {
      children,
      fontSize = "lg",
      errorMessage,
      errorFlag = false,
      bottomBorder = false,
      style,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();

    const computedStyles = useMemo(
      () => styles(theme, fontSize, bottomBorder),
      [theme, fontSize, bottomBorder]
    );

    return (
      <View style={computedStyles.container}>
        <TextInput ref={ref} style={[computedStyles.input, style]} {...props} />
        {errorFlag && !!errorMessage && (
          <Text style={computedStyles.errorText}>{errorMessage}</Text>
        )}
      </View>
    );
  }
);
export default MyfarmInput;
