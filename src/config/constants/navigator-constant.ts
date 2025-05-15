// Define the type for the tab list

import { FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import TabList from "../type/ui-type/navigator-type ";
import { SettingScreen } from "../../screens/setting/settingScreen";
import { CropScreen } from "../../screens/crops/cropScreen";
import { HomeScreen } from "../../screens/home/homeScreen";
import { TaskScreen } from "../../screens/task/taskScreen";
import CONSTANTS from "./common-constant";

// This is a list of tabs with their names, icons, and components
const tabList: TabList[] = [
  {
    name: CONSTANTS.TABLIST.MARKETING,
    iconName: "shop",
    iconLibrary: FontAwesome6,
    component: SettingScreen,
  },
  {
    name: CONSTANTS.TABLIST.CROPS,
    iconName: "leaf",
    iconLibrary: FontAwesome5,
    component: CropScreen,
  },
  {
    name: CONSTANTS.TABLIST.HOME,
    iconName: "home",
    iconLibrary: FontAwesome5,
    component: HomeScreen,
  },
  {
    name: CONSTANTS.TABLIST.SETTINGS,
    iconName: "cogs",
    iconLibrary: FontAwesome5,
    component: SettingScreen,
  },
  {
    name: CONSTANTS.TABLIST.TASK,
    iconName: "clipboard-list",
    iconLibrary: FontAwesome5,
    component: TaskScreen,
  },
];
export default tabList;
