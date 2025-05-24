// components/CustomHeader.tsx
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MyFarmText from "../common/text/myfarm-text";

import { useTheme } from "../../context/theme/themeContext";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import CONSTANTS from "../../config/constants/common-constant";

const HeaderComponent: React.FC = () => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      height: 65,
      alignItems: "center",
      backgroundColor: theme.colors.icon.active,
    },
    headerLogo: {
      display: "flex",
      flexDirection: "row",
      flex: 1,
    },
    headerIcon: {
      marginLeft: 10,
      marginRight: 10,
      display: "flex",
    },

    text: {
      color: theme.colors.text.secondary,
    },
    headerActionIcon: {
      display: "flex",
      flex: 1,
      alignItems: "flex-end",
      justifyContent: "center",
      marginRight: 10,
    },
  });

  return (
    <SafeAreaView edges={["top", "left", "right"]}>
      <View style={styles.container}>
        <View style={styles.headerLogo}>
          <View style={styles.headerIcon}>
            <Entypo name="leaf" size={28} color={theme.colors.icon.secondary} />
          </View>
          <View>
            <MyFarmText bold fontSize="xxl" color="secondary">
              {CONSTANTS.HEADER_TITLE.MY_FARM_LAND}
            </MyFarmText>
          </View>
        </View>
        <View style={styles.headerActionIcon}>
          <FontAwesome5
            name="bell"
            size={28}
            color={theme.colors.icon.secondary}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HeaderComponent;
