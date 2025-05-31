import React, { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, View, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const AnimatedTractor = () => {
  const translateX = useRef(new Animated.Value(-150)).current; // start off-screen

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateX, {
          toValue: screenWidth,
          duration: 4000,
          useNativeDriver: true,
        }),
        Animated.timing(translateX, {
          toValue: -150,
          duration: 0,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../../../../assets/images/tractor.png")}
        style={[styles.image, { transform: [{ translateX }] }]}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    justifyContent: "center",
  },
  image: {
    width: 120,
    height: 120,
  },
});

export default AnimatedTractor;
