import React, { useMemo } from "react";
import { View, StyleSheet, Image, TextInput, Button } from "react-native";
import MyFarmText from "../../components/common/text/myfarm-text";
import { useTheme } from "../../context/theme/themeContext";
import { ThemeType } from "../../config/type/ui-type/theme-type";
import { SafeAreaView } from "react-native-safe-area-context";
import CONSTANTS from "../../config/constants/common-constant";
import MyfarmInput from "../../components/common/input/myfarm-input";
import MyfarmCountryFlag from "../../components/common/countryFlag/myfarm-countryflag";
import { mobileSchema } from "../../schemas/mobile-schema";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {};
type MobileNumberFormData = z.infer<typeof mobileSchema>;

const LogIn: React.FC<Props> = () => {
  const theme = useTheme();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<MobileNumberFormData>({
    resolver: zodResolver(mobileSchema),
  });
  const styles = useMemo(() => createStyle(theme), [theme]);

  const onSubmit = (data: any): void => {
    console.log(data);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logInImage}>
        <Image
          source={require("../../../assets/images/tractor_hill.png")}
          style={styles.image}
        ></Image>
      </View>

      <View style={styles.actionContainer}>
        <View style={styles.logInTextContainer}>
          <View>
            <MyFarmText fontSize={"xxxl"} bold>
              {CONSTANTS.LOG_IN.WELCOME_MY_FARM}
            </MyFarmText>
            <MyFarmText fontSize={"lg"}>
              {CONSTANTS.LOG_IN.WELCOME_MY_FARM_MESSAGE}
            </MyFarmText>
          </View>
        </View>
        <View style={styles.logInActionContainer}>
          <MyFarmText bold fontSize={"xxxl"}>
            {CONSTANTS.LOG_IN.ENTER_MOBILE_NUMBER}
          </MyFarmText>
          <View style={styles.inputContainer}>
            <View style={styles.countryFlag}>
              <MyfarmCountryFlag></MyfarmCountryFlag>
            </View>

            <MyfarmInput
              placeholder={CONSTANTS.LOG_IN.ENTER_MOBILE_NUMBER}
              keyboardType="number-pad"
              errorFlag={errors.mobileNumber ? true : false}
              errorMessage={errors?.mobileNumber?.message}
              onChangeText={(text) => setValue("mobileNumber", text)}
              {...register("mobileNumber")}
            ></MyfarmInput>
          </View>

          <View style={styles.buttonContainer}>
            <Button
              title={CONSTANTS.LOG_IN.SEND_OTP}
              onPress={handleSubmit(onSubmit)}
            />
            <MyFarmText style={styles.text}>
              {CONSTANTS.LOG_IN.AGREE}{" "}
              <MyFarmText bold>{CONSTANTS.LOG_IN.TERMS}</MyFarmText>{" "}
              {CONSTANTS.LOG_IN.AND}{" "}
              <MyFarmText bold>{CONSTANTS.LOG_IN.PRIVACY_POLICY}</MyFarmText>
            </MyFarmText>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const createStyle = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
      backgroundColor: theme.colors.background.primary,
    },
    logInImage: {
      flex: 0.4,
    },
    image: {
      width: "100%",
      height: "100%",
      resizeMode: "cover",
    },

    actionContainer: {
      display: "flex",
      flex: 0.6,
      width: "75%",
      alignSelf: "center",
    },
    logInTextContainer: {
      display: "flex",
      flex: 0.5,
      alignItems: "center",
    },
    logInActionContainer: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
    },
    inputContainer: {
      display: "flex",
      flexDirection: "row",
      alignSelf: "center",
      justifyContent: "center",
    },
    buttonContainer: {
      display: "flex",
      flexDirection: "column",
      alignSelf: "center",
      paddingLeft: 10,
      textAlign: "center",
    },
    countryFlag: {
      display: "flex",
      alignSelf: "center",
      paddingBottom: 30,
    },
    text: {
      textAlign: "center",
      color: theme.colors.text.secondary,
      marginTop: 10,
    },
  });

export default LogIn;
