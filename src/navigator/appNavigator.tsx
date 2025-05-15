import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/home/homeScreen";
import { StyleSheet, View } from "react-native";

import { FontAwesome6, FontAwesome5 } from "@expo/vector-icons";
import { TabList } from "../config/navigator-type ";
import { SettingScreen } from "../screens/setting/settingScreen";
import { CropScreen } from "../screens/crops/cropScreen";
import { TaskScreen } from "../screens/task/taskScreen";
import HeaderComponent from "../components/header/headerComponent";
import { useTheme } from "../context/theme/themeContext";

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

  // Define the type for the tab list
  // This is a list of tabs with their names, icons, and components
  const tabList: TabList[] = [
    {
      name: "Marketing",
      icon: (
        <FontAwesome6 name="shop" size={24} color={theme.colors.icon.primary} />
      ),
      component: SettingScreen,
    },
    {
      name: "Crops",
      icon: (
        <FontAwesome5 name="leaf" size={24} color={theme.colors.icon.primary} />
      ),
      component: CropScreen,
    },
    {
      name: "Home",
      icon: (
        <FontAwesome5 name="home" size={24} color={theme.colors.icon.primary} />
      ),
      component: HomeScreen,
    },
    {
      name: "Settings",
      icon: (
        <FontAwesome5 name="cogs" size={24} color={theme.colors.icon.primary} />
      ),
      component: SettingScreen,
    },
    {
      name: "Task",
      icon: (
        <FontAwesome5
          name="clipboard-list"
          size={24}
          color={theme.colors.icon.primary}
          solid
        />
      ),
      component: TaskScreen,
    },
  ];

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
        })}
      >
        {tabList.map((tab) => (
          <Tab.Screen
            key={tab.name}
            name={tab.name as keyof RootTabParamList}
            component={tab.component}
            options={{
              tabBarIcon: () => tab.icon,
              tabBarLabelStyle: styles.tabBarLabelStyle,
              tabBarStyle: styles.tabBarStyle,
            }}
          />
        ))}
      </Tab.Navigator>
    </View>
  );
};

// Define styles for the tab bar
// These styles will be applied to the tab bar and its items
const styles = StyleSheet.create({
  tabBarLabelStyle: {
    fontSize: 10,
    color: "theme.colors.text.primary",
    fontFamily: "Quicksand-Regular",
    fontWeight: "bold",
  },
  tabBarStyle: {
    backgroundColor: "theme.colors.background.primary",
    borderTopWidth: 0,
    elevation: 0,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
});

export default AppNavigator;
