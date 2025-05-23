import React from "react";
import { StyleSheet, View } from "react-native";
import { animal_list } from "../../config/constants/home-constant";
import { AnimalType } from "../../config/type/ui-type/home-type";
import MyFarmText from "../common/text/myfarm-text";
import { useTheme } from "../../context/theme/themeContext";
import { ThemeType } from "../../config/type/ui-type/theme-type";

type Props = {};
// This component displays the status of animals on the farm
// It uses the animal_list constant to get the list of animals and their details

const AnimalStatus: React.FC<Props> = () => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    animalDetail: {
      display: "flex",
      flex: 1,
      backgroundColor: theme.colors.background.secondary,
      padding: 15,
      maxWidth: 100,
      marginRight: 10,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  // This function returns the font icon for the animal
  const getFontIcon = (animalList: AnimalType) => {
    return React.createElement(animalList.iconLibrary, {
      name: animalList.iconName,
      size: 36,
      solid: true,
    });
  };
  return (
    <>
      {animal_list.map((animal, index) => (
        <View key={index} style={styles.animalDetail}>
          <View>{getFontIcon(animal)}</View>
          <MyFarmText bold>{animal.name}</MyFarmText>
          <MyFarmText fontSize="xxl" bold>
            {animal.count}
          </MyFarmText>
        </View>
      ))}
    </>
  );
};

export default AnimalStatus;
