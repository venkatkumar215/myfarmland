import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export const TaskScreen = () => {
  return (
    <SafeAreaView edges={["top", "bottom"]}>
      <View>
        <Text>Task Screen</Text>
      </View>
    </SafeAreaView>
  );
};
