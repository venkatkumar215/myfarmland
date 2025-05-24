import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const SettingScreen = () => {
  return (
    <SafeAreaView edges={["top", "bottom"]}>
      <View>
        <Text>Setting Screen</Text>
      </View>
    </SafeAreaView>
  );
};
