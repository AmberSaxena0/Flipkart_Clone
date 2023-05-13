import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import NotificationStyles from "../../../Utils/Styles/NotificationStyles";
import { NativeScreen } from "react-native-screens";

const Notifications = ({ navigation }) => {
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <View style={NotificationStyles.Header_Container}>
        <View style={NotificationStyles.Header_Container_Text_Container}>
          <Text style={{ fontSize: 18, color: "white" }}>Notifications</Text>
        </View>
      </View>
      <View style={NotificationStyles.Image_Container}>
        <Image
          source={{
            uri: "https://images.ctfassets.net/sqxywam3esr0/36SEzirxpij0XNz2zxoMB3/43dbaff9ea47c7eb91ac38d1502e66f9/Woman-shipping-notifications.png?fm=webp&q=90&w=570",
          }}
          style={NotificationStyles.Image_Size}
          resizeMode="contain"
        />
        <Text style={{ fontSize: 20, color: "black" }}>
          You're missing out.
        </Text>
        <Text style={NotificationStyles.Text_Container_Styles}>
          Sign in to view personalised notifications and offers.
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("PhoneLogin")}
          style={{}}
        >
          <Text style={{ color: "white" }}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Notifications;
