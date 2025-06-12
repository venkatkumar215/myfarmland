import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import MyfarmInput from "../common/input/myfarm-input";
import MyfarmButton from "../common/button/myfarm-button";
import CONSTANTS from "../../config/constants/common-constant";
import MyFarmText from "../common/text/myfarm-text";

type Props = {};

const OTP_LENGTH = 6;
const VerifyOtpComponent: React.FC<Props> = ({ ...props }) => {
  const inputsRef = React.useRef<Array<any>>([]);
  const [otp, setOtp] = useState<Array<string>>(Array(OTP_LENGTH).fill(""));

  const onSubmit = (data: any): void => {
    // sendOTP(data.mobileNumber);
  };

  const handleChange = (text: string, index: number) => {
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = text;
      return newOtp;
    });
    // Move to next input if text is entered and it's not the last one
    if (text && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleText}>
        <MyFarmText style={styles.textCenter} fontSize={"xxxl"} bold>
          {CONSTANTS.LOG_IN.ENTER_OTP_VERIFY}
        </MyFarmText>
      </View>
      <View style={styles.titleText}>
        <MyFarmText style={styles.textCenter} fontSize={"lg"}>
          {CONSTANTS.LOG_IN.OTP_VERIFY_MESSAGE}
        </MyFarmText>
      </View>
      <View style={styles.otpContainer}>
        {otp?.map((digit, index) => (
          <View key={index} style={styles.verifyOTPInput}>
            <MyfarmInput
              ref={(ref) => {
                inputsRef.current[index] = ref!;
              }}
              style={styles.otpInput}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
              bottomBorder
            ></MyfarmInput>
          </View>
        ))}
      </View>
      <View style={styles.resendOtpText}>
        <MyFarmText style={styles.textCenter}>
          {CONSTANTS.LOG_IN.DONT_RECEIVE_OTP}
        </MyFarmText>
      </View>
      <View style={styles.buttonContainer}>
        <MyfarmButton
          title={CONSTANTS.LOG_IN.VERIFY_OTP}
          onPress={onSubmit}
          bold
        ></MyfarmButton>
      </View>
      <View style={styles.termsContainer}>
        <MyFarmText>
          {CONSTANTS.LOG_IN.AGREE}{" "}
          <MyFarmText bold>{CONSTANTS.LOG_IN.TERMS}</MyFarmText>{" "}
          {CONSTANTS.LOG_IN.AND}{" "}
          <MyFarmText bold>{CONSTANTS.LOG_IN.PRIVACY_POLICY}</MyFarmText>
        </MyFarmText>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 2,
  },
  titleText: {
    marginVertical: 5,
  },
  textCenter: {
    textAlign: "center",
  },

  otpContainer: {
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
  },
  otpInput: {
    width: 40,
    height: 50,
    borderWidth: 1,
  },
  verifyOTPInput: {
    marginRight: 10,
    marginLeft: 10,
  },
  resendOtpText: {
    marginVertical: 10,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  termsContainer: {
    marginVertical: 10,
  },
});

export default VerifyOtpComponent;
