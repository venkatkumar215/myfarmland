// components/CustomHeader.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  title: string;
};

const HeaderComponent: React.FC<Props> = ({ title }) => (
  <SafeAreaView>
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  header: {
    height: 50,
    paddingTop: 20,
    backgroundColor: "#6200ee",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default HeaderComponent;
