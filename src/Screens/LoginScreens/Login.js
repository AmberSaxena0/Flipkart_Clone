import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  Pressable,
  Modal,
} from "react-native";

import React, { useState, useEffect } from "react";
import LoginStyles from "../../../Utils/Styles/LoginStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Loader from "../../Components/Loader";

export default Login = ({ navigation }) => {
  const [Email, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getData();
  }, [Email]);

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("@storage_Key", value);
    } catch (err) {
      console.log(err);
    }
  };
  const getData = async () => {
    setLoading(true);
    const val = await AsyncStorage.getItem("@storage_Key");
    if (val == null) {
      setLoading(false);
      navigation.navigate("Login");
    } else {
      setLoading(false);
      navigation.navigate("AppBottom");
    }
  };

  const VerifyLoginDetails = () => {
    if (Email == "") {
      alert("Enter Valid Email Address!");
    } else if (password == "") {
      alert("Password is incorrect!");
    } else {
      setLoading(!loading);

      axios
        .post("https://pamid.iknowsolution.com/api/auth/login", {
          email: Email,
          password: password,
        })
        .then(function (response) {
          storeData(response.data.access_token);
          if (response.status == 200) {
            setLoading(false);
            setUserEmail("");
            setPassword("");
            navigation.navigate("AppBottom");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <SafeAreaView style={LoginStyles.Main_Container_Styles}>
      {/* <View style={LoginStyles.Header_Component}> */}
      <View
        style={{
          flex: 0.08,
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "flex-end",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flex: 0.6,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../../assets/img/flipkartText.png")}
            style={{ height: 25, width: "40%" }}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("AppBottom")}
          style={{
            // backgroundColor: "pink",
            flex: 0.2,
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <Text style={{ fontSize: 16, color: "white", fontWeight: 600 }}>
            Skip{"   "}
          </Text>
        </TouchableOpacity>
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
              placeholder=" Email"
              value={Email}
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
              onChangeText={(value) => setPassword(value)}
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
        <View
          style={{
            justifyContent: "center",
            alignContent: "flex-end",
            alignItems: "flex-end",
            marginVertical: 20,
            flexDirection: "row",
            flex: 0.1,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            style={{
              flex: 0.5,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#2874f0", fontSize: 16, fontWeight: 600 }}>
              Register
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Forgot")}
            style={{
              flex: 0.5,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#2874f0", fontSize: 16, fontWeight: 600 }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
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
            onPress={() => VerifyLoginDetails()}
            style={LoginStyles.Continue_Button_Styles}
          >
            <Text style={LoginStyles.Continue_Text}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
      {loading ? <Loader visible={loading} /> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  countryCode: {
    flex: 0.2,
    flexDirection: "row",

    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
