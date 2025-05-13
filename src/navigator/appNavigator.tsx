import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/home/homeScreen";
import { StyleSheet } from "react-native";

import { FontAwesome6, FontAwesome5 } from "@expo/vector-icons";
import { TabList } from "../config/navigator-type ";
import { SettingScreen } from "../screens/setting/settingScreen";
import { CropScreen } from "../screens/crops/cropScreen";
import { TaskScreen } from "../screens/task/taskScreen";

type RootTabParamList = {
  Home: undefined;
  Profile: undefined;
};

// Define the type for the tab list
// This is a list of tabs with their names, icons, and components
const tabList: TabList[] = [
  {
    name: "Marketing",
    icon: <FontAwesome6 name="shop" size={24} color="#6F8C52" />,
    component: SettingScreen,
  },
  {
    name: "Crops",
    icon: <FontAwesome5 name="leaf" size={24} color="#6F8C52" />,
    component: CropScreen,
  },
  {
    name: "Home",
    icon: <FontAwesome5 name="home" size={24} color="#6F8C52" />,
    component: HomeScreen,
  },
  {
    name: "Settings",
    icon: <FontAwesome5 name="cogs" size={24} color="#6F8C52" />,
    component: SettingScreen,
  },
  {
    name: "Task",
    icon: (
      <FontAwesome5 name="clipboard-list" size={24} color="#6F8C52" solid />
    ),
    component: TaskScreen,
  },
];

// Create a bottom tab navigator
// This navigator will manage the tab navigation in the app
const Tab = createBottomTabNavigator<RootTabParamList>();

// Define the main AppNavigator component
// This component will render the tab navigator with the defined tabs
const AppNavigator = () => {
  return (
    // Render the tab navigator
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
  );
};

// Define styles for the tab bar
// These styles will be applied to the tab bar and its items
const styles = StyleSheet.create({
  tabBarIcon: {
    color: "#6F8C52",
  },
  tabBarLabelStyle: {
    fontSize: 10,
    color: "#6F8C52",
  },
  tabBarStyle: {
    backgroundColor: "#F5F5F5",
    borderTopWidth: 0,
    elevation: 0,
  },
});

export default AppNavigator;
