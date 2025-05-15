import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";
import HeaderComponent from "../components/header/headerComponent";
import { useTheme } from "../context/theme/themeContext";
import { ThemeType } from "../config/type/ui-type/theme-type";
import tabList from "../config/constants/navigator-constant";

type RootTabParamList = {
  Marketing: undefined;
  Crops: undefined;
  Home: undefined;
  Settings: undefined;
  Task: undefined;
};

// Create a bottom tab navigator
// This navigator will manage the tab navigation in the app
const Tab = createBottomTabNavigator<RootTabParamList>();

// Define the main AppNavigator component
// This component will render the tab navigator with the defined tabs
const AppNavigator = () => {
  // This hook provides the current theme (light or dark) and its properties
  const theme = useTheme();

  const getTheme = (theme: ThemeType) => {
    // This function returns the current theme (light or dark)
    return {
      backgroundColor: theme.colors.background.primary,
      color: theme.colors.text.primary,
      fontSize: theme.fontSize.sm,
    };
  };

  // Define styles for the tab bar
  // These styles will be applied to the tab bar and its items
  const styles = StyleSheet.create({
    tabBarLabelStyle: {
      fontSize: getTheme(theme).fontSize,
      fontFamily: "Quicksand-Regular",
      fontWeight: "bold",
    },
    tabBarStyle: {
      backgroundColor: getTheme(theme).backgroundColor,
      borderTopWidth: 0,
      elevation: 0,
    },
    container: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
    },
  });

  return (
    <View style={styles.container}>
      {/* Header component for the app */}
      <HeaderComponent title="My Expo App Header" />

      <Tab.Navigator
        screenOptions={({
          route,
        }: {
          route: { name: keyof RootTabParamList };
        }) => ({
          headerShown: false,
          tabBarActiveTintColor: theme.colors.icon.active,
          tabBarInactiveTintColor: theme.colors.icon.inactive,
        })}
      >
        {tabList.map((tab) => (
          <Tab.Screen
            key={tab.name}
            name={tab.name as keyof RootTabParamList}
            component={tab.component}
            options={{
              tabBarIcon: ({ color, focused }) => {
                return React.createElement(tab.iconLibrary, {
                  name: tab.iconName,
                  size: focused ? 25 : 20,
                  color,
                });
              },
              tabBarLabelStyle: styles.tabBarLabelStyle,
              tabBarStyle: styles.tabBarStyle,
            }}
          />
        ))}
      </Tab.Navigator>
    </View>
  );
};

export default AppNavigator;
