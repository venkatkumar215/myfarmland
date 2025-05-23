import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import CONSTANTS from "./common-constant";
import { AnimalType, HomeActionType } from "../type/ui-type/home-type";

export const animal_list: AnimalType[] = [
  {
    name: CONSTANTS.ANIMAL_LIST.COW,
    iconName: "cow",
    iconLibrary: MaterialCommunityIcons,
    count: 15,
  },
  {
    name: CONSTANTS.ANIMAL_LIST.SHEEP,
    iconName: "sheep",
    iconLibrary: MaterialCommunityIcons,
    count: 10,
  },
  {
    name: CONSTANTS.ANIMAL_LIST.GOAT,
    iconName: "goat",
    iconLibrary: MaterialIcons,
    count: 5,
  },
  {
    name: CONSTANTS.ANIMAL_LIST.TO_DO,
    iconName: "warning",
    iconLibrary: FontAwesome,
    count: 0,
  },
];

export const home_action_list: HomeActionType[] = [
  {
    name: CONSTANTS.ANIMAL_LIST.COW,
    iconName: "cow",
    iconLibrary: MaterialCommunityIcons,
  },
  {
    name: CONSTANTS.ANIMAL_LIST.SHEEP,
    iconName: "sheep",
    iconLibrary: MaterialCommunityIcons,
  },
  {
    name: CONSTANTS.ANIMAL_LIST.GOAT,
    iconName: "goat",
    iconLibrary: MaterialIcons,
  },
  {
    name: CONSTANTS.ANIMAL_LIST.TO_DO,
    iconName: "warning",
    iconLibrary: FontAwesome,
  },
];
