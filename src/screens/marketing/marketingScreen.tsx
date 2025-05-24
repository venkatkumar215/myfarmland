import { Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export const MarketingScreen = () => {
  return (
    <SafeAreaView edges={["top", "bottom"]}>
      <View>
        <Text>Marketing Screen</Text>
      </View>
    </SafeAreaView>
  );
};
