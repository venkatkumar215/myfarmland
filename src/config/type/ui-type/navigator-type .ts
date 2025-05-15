import { FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import React from "react";

interface TabList {
  name: string;
  iconName: string;
  iconLibrary: typeof FontAwesome5 | typeof FontAwesome6;
  component: React.ComponentType<any>;
}

export default TabList;
