import { StatusBar } from "expo-status-bar";
import AppNavigator from "./navigator/appNavigator";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "./context/theme/themeContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

export default function App() {
  // Load custom fonts
  const [fontsLoaded] = useFonts({
    "Quicksand-Regular": require("../assets/fonts/Quicksand-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null; // or splash screen
  }

  return (
    <>
      <ThemeProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <StatusBar style="auto" />
            <AppNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </>
  );
}
