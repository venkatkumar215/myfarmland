import { StatusBar } from "expo-status-bar";
import AppNavigator from "./navigator/appNavigator";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "./context/theme/themeContext";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
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
