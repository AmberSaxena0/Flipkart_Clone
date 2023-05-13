import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import OTPTextView from "react-native-otp-textinput";

import React, { useState } from "react";

export default OTPVerification = ({ navigation }) => {
  const [otpdata, setotpdata] = useState("");


  const OTPVerify = () => {
    console.log("OTP Screens")
  }


  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#2874f0",
      }}
    >
      <View
        style={{
          flex: 0.08,
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flex: 0.1,

            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../../../assets/img/arrow.png")}
              style={{
                height: 17,
                width: 17,

                tintColor: "white",
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.9 }}>
          <Image
            source={require("../../../assets/img/flipkart-logo.png")}
            style={{
              height: "50%",
              width: "30%",
              alignSelf: "center",
              tintColor: "white",
            }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          paddingTop: 30,
          paddingRight: 30,
          paddingLeft: 30,
          backgroundColor: "white",
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "black",
            fontWeight: 500,
            marginTop: 5,
          }}
        >
          Log in for the best experience
        </Text>
        <Text style={{ marginTop: 10, color: "black" }}>
          Enter your phone number to continue
        </Text>

        <View style={{ marginTop: 30 }}>
          <OTPTextView
            style={styles.otpInputFeild}
            handleTextChange={(otp) => setotpdata(otp)}
            inputCount={6}
          />
        </View>

        <View
          style={{
            alignSelf: "flex-end",
            marginTop: 15,
          }}
        >
          <TouchableOpacity onPress={() => alert("resend Code Again")}>
            <Text style={{ fontSize: 15, fontWeight: 500, color: "#2874f0" }}>
              Resend Code
            </Text>
          </TouchableOpacity>
        </View>

        <KeyboardAvoidingView
          style={{
            flex: 2,
            justifyContent: "flex-end",
            alignSelf: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => OTPVerify()}
            style={{
              backgroundColor: "#fb641b",
              padding: 12,
              marginBottom: 5,
              paddingHorizontal: "41%",
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: "white",
              }}
            >
              Continue
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#2874f0",
    marginTop: 30,
  },

  countryCode: {
    flex: 0.2,
    flexDirection: "row",

    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  phoneComponent: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: "2%",
  },
  phoneInputFeild: {},
  pressableContainer: {
    marginTop: " 10%",
  },
  pressableButton: {
    fontSize: 35,
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: "35%",
    paddingVertical: 5,
    backgroundColor: "#28cb72",
    color: "#000",
    borderRadius: 10,
  },
  otpInputFeild: {
    fontSize: 30,
    textAlign: "center",
    margin: 5,
    paddingHorizontal: 12,
    borderBottomWidth: 3,
  },
  phoneInputFeild: {
    fontSize: 20,
  },
});
