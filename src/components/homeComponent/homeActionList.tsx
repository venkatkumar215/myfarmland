import React from "react";
import { StyleSheet, View } from "react-native";
import { home_action_list } from "../../config/constants/home-constant";
import { HomeActionType } from "../../config/type/ui-type/home-type";
import { useTheme } from "../../context/theme/themeContext";
import MyFarmText from "../common/text/myfarm-text";
import { FontAwesome5 } from "@expo/vector-icons";

type Props = {};

const HomeActionList: React.FC<Props> = () => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.colors.background.secondary,
    },
    actionList: {
      display: "flex",
      flexDirection: "row",
      borderBottomColor: "black",
      borderBottomWidth: 1,
      paddingBottom: 15,
      paddingTop: 15,
    },
    actionIcon: {
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "flex-start",
      paddingLeft: 15,
    },
    actionText: {
      display: "flex",
      flex: 1,
      verticalAlign: "middle",
      alignContent: "center",
    },
    action: {
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "flex-end",
      paddingRight: 15,
    },
  });

  /**
   * Dynamically creates an icon element from the specified action configuration. *
   * @param {HomeActionType} action - An object containing the icon's configuration,
   * including the icon library and icon name.
   * @returns {React.ReactElement} A React element representing the icon.
   */
  const getIcon = (action: HomeActionType) => {
    return React.createElement(action.iconLibrary, {
      name: action.iconName,
      size: 36,
      solid: true,
    });
  };
  return (
    <View style={styles.container}>
      {home_action_list.map((action, index) => (
        <View key={index} style={styles.actionList}>
          <View style={styles.actionIcon}>{getIcon(action)}</View>
          <MyFarmText style={styles.actionText} fontSize="xl" bold>
            {action.name}
          </MyFarmText>
          <View style={styles.action}>
            <FontAwesome5 name="chevron-right" size={24}></FontAwesome5>
          </View>
        </View>
      ))}
    </View>
  );
};

export default HomeActionList;
