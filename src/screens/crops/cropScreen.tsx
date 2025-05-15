import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export const CropScreen = () => {
  return (
    <SafeAreaView edges={["top", "bottom"]}>
      <View>
        <Text>Crop Screen</Text>
      </View>
    </SafeAreaView>
  );
};
