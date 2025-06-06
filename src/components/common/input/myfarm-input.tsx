import React, { forwardRef, useMemo } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { ThemeType } from "../../../config/type/ui-type/theme-type";
import { useTheme } from "../../../context/theme/themeContext";

const styles = (
  theme: ThemeType,
  fontSize: keyof ThemeType["fonts"]["fontSize"]
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
      borderRadius: 10,
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
};

const MyfarmInput = forwardRef<TextInput, Props>(
  (
    { children, fontSize = "lg", errorMessage, errorFlag = false, ...props },
    ref
  ) => {
    const theme = useTheme();

    const computedStyles = useMemo(
      () => styles(theme, fontSize),
      [theme, fontSize]
    );

    return (
      <View style={computedStyles.container}>
        <TextInput ref={ref} style={computedStyles.input} {...props} />
        {errorFlag && !!errorMessage && (
          <Text style={computedStyles.errorText}>{errorMessage}</Text>
        )}
      </View>
    );
  }
);
export default MyfarmInput;
