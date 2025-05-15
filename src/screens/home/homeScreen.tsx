import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const HomeScreen = () => {
  return (
    <SafeAreaView edges={["top", "bottom"]}>
      <View>
        <Text style={{ fontFamily: "Quicksand-Regular",fontWeight
        : "bold", fontSize: 24, color: "#000"
         }}>Home Screen</Text>
        <Text style={{ fontFamily: "Poppins" }}>
          This is the home screen of the app.
        </Text>
      </View>
    </SafeAreaView>
  );
};
