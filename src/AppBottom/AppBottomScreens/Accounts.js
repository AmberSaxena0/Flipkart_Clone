import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import AccountStyles from "../../../Utils/Styles/AccountStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Accounts = ({ navigation }) => {
  useEffect(() => {
    func();
  }, [Token]);

  const func = async () => {
    setToken(await AsyncStorage.getItem("@storage_Key"));
  };
  const [Token, setToken] = useState("");

  const LogOut = async () => {
    setToken(await AsyncStorage.getItem("@storage_Key"));
    await AsyncStorage.removeItem("@storage_Key").then(
      navigation.navigate("Login")
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={AccountStyles.Header_Container}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignContent: "center",
            marginLeft: 20,
          }}
        >
          <Text style={AccountStyles.Header_Container_Text}>Account</Text>
          <Text style={AccountStyles.Header_Container_Text_Font_Style}>
            Log in to get exclusive offers
          </Text>
        </View>

        <View style={AccountStyles.Header_Container_Button_Container}>
          <TouchableOpacity
            onPress={() => LogOut()}
            style={AccountStyles.Header_Container_Button_Styles}
          >
            {Token ? (
              <Text
                style={AccountStyles.Header_Container_Button_Text_Font_Style}
              >
                Log out
              </Text>
            ) : (
              <Text
                style={AccountStyles.Header_Container_Button_Text_Font_Style}
              >
                Log In
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View style={AccountStyles.Common_Margin_Top_10}>
        <View style={AccountStyles.Account_Container}>
          <View>
            <Text style={AccountStyles.Account_Container_Text}>
              Account Settings
            </Text>
          </View>
          <TouchableOpacity>
            <View style={AccountStyles.Account_Common_Style}>
              <View style={{ flex: 0.13 }}>
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/484/484633.png",
                  }}
                  style={AccountStyles.Account_Common_Icon_Size}
                />
              </View>
              <View style={{ flex: 0.8 }}>
                <Text style={AccountStyles.Account_Text_Size}>
                  Select Language
                </Text>
              </View>
              <View style={AccountStyles.Image_Container}>
                <Image
                  source={require("../../../assets/img/right-arrow.png")}
                  style={AccountStyles.Arrow_Icon}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={AccountStyles.Account_Common_Style}>
              <View style={{ flex: 0.13 }}>
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/8051/8051781.png",
                  }}
                  style={AccountStyles.Account_Common_Icon_Size}
                />
              </View>
              <View style={{ flex: 0.8 }}>
                <Text style={AccountStyles.Account_Text_Size}>
                  Notification Settings
                </Text>
              </View>
              <View style={AccountStyles.Image_Container}>
                <Image
                  source={require("../../../assets/img/right-arrow.png")}
                  style={AccountStyles.Arrow_Icon}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={AccountStyles.Account_Common_Style}>
              <View style={{ flex: 0.13 }}>
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/10228/10228629.png",
                  }}
                  style={AccountStyles.Account_Common_Icon_Size}
                />
              </View>
              <View style={{ flex: 0.8 }}>
                <Text style={AccountStyles.Account_Text_Size}>Help Center</Text>
              </View>
              <View style={AccountStyles.Image_Container}>
                <Image
                  source={require("../../../assets/img/right-arrow.png")}
                  style={AccountStyles.Arrow_Icon}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={AccountStyles.Common_Styles}>
          <View>
            <Text style={AccountStyles.Account_Container_Text}>
              Earn with Flipkart
            </Text>
          </View>
          <TouchableOpacity>
            <View style={AccountStyles.Account_Common_Style}>
              <View style={{ flex: 0.13 }}>
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/2435/2435352.png",
                  }}
                  style={AccountStyles.Account_Common_Icon_Size}
                />
              </View>
              <View style={{ flex: 0.8 }}>
                <Text style={AccountStyles.Account_Text_Size}>
                  Select Language
                </Text>
              </View>
              <View style={AccountStyles.Image_Container}>
                <Image
                  source={require("../../../assets/img/right-arrow.png")}
                  style={AccountStyles.Arrow_Icon}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={AccountStyles.Common_Styles}>
          <View>
            <Text style={AccountStyles.Account_Container_Text}>
              Feedback & Information
            </Text>
          </View>
          <TouchableOpacity>
            <View style={AccountStyles.Account_Common_Style}>
              <View style={{ flex: 0.13 }}>
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/484/484633.png",
                  }}
                  style={AccountStyles.Account_Common_Icon_Size}
                />
              </View>
              <View style={{ flex: 0.8 }}>
                <Text style={AccountStyles.Account_Text_Size}>
                  Terms, Policies and Licenses
                </Text>
              </View>
              <View style={AccountStyles.Image_Container}>
                <Image
                  source={require("../../../assets/img/right-arrow.png")}
                  style={AccountStyles.Arrow_Icon}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={AccountStyles.Account_Common_Style}>
              <View style={{ flex: 0.13 }}>
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/8051/8051781.png",
                  }}
                  style={AccountStyles.Account_Common_Icon_Size}
                />
              </View>
              <View style={{ flex: 0.8 }}>
                <Text style={AccountStyles.Account_Text_Size}>Browse FAQs</Text>
              </View>
              <View style={AccountStyles.Image_Container}>
                <Image
                  source={require("../../../assets/img/right-arrow.png")}
                  style={AccountStyles.Arrow_Icon}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Accounts;
