import React from "react";

export interface TabList {
  name: string;
  icon: React.ReactElement | null;
  component: React.ComponentType<any>;
}
