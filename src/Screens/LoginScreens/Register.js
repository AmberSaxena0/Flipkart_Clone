import {
  View,
  Text,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";

import React, { useState } from "react";
import { CountryPicker } from "react-native-country-codes-picker";
import LoginStyles from "../../../Utils/Styles/LoginStyles";
import axios from "axios";

export default PhoneLogin = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassord] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const Validation = () => {
    if (userName == "") {
      alert("Enter Name!");
    } else if (userEmail == "") {
      alert("Enter Email!");
    } else if (password == "") {
      alert("Enter Password");
    } else if (password !== confirmPassword) {
      alert("Enter correct passwords!");
    } else if (phoneNumber == "") {
      alert("Enter Phone number");
    } else {
      axios
        .post("https://pamid.iknowsolution.com/api/auth/register", {
          name: userName,
          email: userEmail,
          password: password,
          password_confirmation: confirmPassword,
          role_id: 9,
        })
        .then(function (response) {
          if (response.status == "201") {
            navigation.navigate("AppBottom");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <SafeAreaView style={LoginStyles.Main_Container_Styles}>
      <View style={LoginStyles.Header_Component}>
        <Image
          source={require("../../../assets/img/flipkart-logo.png")}
          style={LoginStyles.Flipkart_Image}
        />
      </View>
      <View style={LoginStyles.Login_Container}>
        <Text style={LoginStyles.Login_Text}>
          Log in for the best experience
        </Text>
        <Text style={LoginStyles.Login_Texts}>
          Enter your phone number to continue
        </Text>
        <View style={LoginStyles.Text_Input_Container}>
          <View style={LoginStyles.Phone_Text_Style}>
            <TextInput
              // style={styles.phoneInputFeild}
              placeholder=" Name"
              keyboardType="default"
              value={userName}
              onChangeText={(value) => setUserName(value)}
            />
          </View>
        </View>
        <View style={LoginStyles.Text_Input_Container}>
          <View style={LoginStyles.Phone_Text_Style}>
            <TextInput
              // style={styles.phoneInputFeild}
              placeholder=" E-mail Address"
              keyboardType="email-address"
              value={userEmail}
              onChangeText={(value) => setUserEmail(value)}
            />
          </View>
        </View>
        <View style={LoginStyles.Text_Input_Container}>
          <View style={LoginStyles.Phone_Text_Style}>
            <TextInput
              // style={styles.phoneInputFeild}
              placeholder=" Password"
              value={password}
              onChangeText={(value) => setPassord(value)}
              secureTextEntry={showPassword}
            />
          </View>
          {password == "" ? (
            ""
          ) : (
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={{ justifyContent: "center" }}
            >
              {showPassword ? (
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/2767/2767146.png",
                  }}
                  style={{ height: 30, width: 30, marginRight: 10 }}
                />
              ) : (
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/709/709612.png",
                  }}
                  style={{ height: 30, width: 30, marginRight: 10 }}
                />
              )}
            </TouchableOpacity>
          )}
        </View>
        <View style={LoginStyles.Text_Input_Container}>
          <View style={LoginStyles.Phone_Text_Style}>
            <TextInput
              // style={styles.phoneInputFeild}
              placeholder=" Confirm-Password"
              value={confirmPassword}
              onChangeText={(value) => setConfirmPassword(value)}
              secureTextEntry={showConfirmPassword}
            />
          </View>
          {confirmPassword == "" ? (
            ""
          ) : (
            <TouchableOpacity
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              style={{ justifyContent: "center" }}
            >
              {showConfirmPassword ? (
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/2767/2767146.png",
                  }}
                  style={{ height: 30, width: 30, marginRight: 10 }}
                />
              ) : (
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/709/709612.png",
                  }}
                  style={{ height: 30, width: 30, marginRight: 10 }}
                />
              )}
            </TouchableOpacity>
          )}
        </View>
        <View style={LoginStyles.Text_Input_Container}>
          <View style={LoginStyles.Country_Code_Styles}>
            <TouchableOpacity
              onPress={() => setShow(true)}
              style={{ flexDirection: "row" }}
            >
              <Text style={{ fontSize: 17, color: "black" }}>
                {countryCode}
              </Text>
              <Image
                source={require("../../../assets/img/downward-arrow.png")}
                style={LoginStyles.Down_Arrow_Style}
              />
            </TouchableOpacity>
          </View>
          <Modal visible={show} transparent={true}>
            <CountryPicker
              onBackdropPress={() => setShow(false)}
              show={show}
              style={{
                modal: LoginStyles.Country_Code_Modal_Style,
              }}
              pickerButtonOnPress={(item) => {
                setCountryCode(item.dial_code);
                setShow(false);
              }}
            />
          </Modal>

          <View style={LoginStyles.Phone_Text_Style}>
            <TextInput
              // style={styles.phoneInputFeild}
              placeholder="Enter Phone Number"
              keyboardType="numeric"
              value={phoneNumber}
              onChangeText={(value) => setPhoneNumber(value)}
            />
          </View>
        </View>

        <View>
          <Text style={LoginStyles.Policy_Text}>
            By continuing, you agree to Flipkart's
            <Text
              onPress={() => navigation.navigate("Terms")}
              style={{ color: "#2874f0" }}
            >
              {" "}
              Terms of Use{" "}
            </Text>
            and{" "}
            <Text
              onPress={() => navigation.navigate("Privacy")}
              style={{ color: "#2874f0" }}
            >
              Privacy Policy
            </Text>
          </Text>
        </View>
        <View style={LoginStyles.Continue_Button}>
          <TouchableOpacity
            onPress={() => Validation()}
            style={LoginStyles.Continue_Button_Styles}
          >
            <Text style={LoginStyles.Continue_Text}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
