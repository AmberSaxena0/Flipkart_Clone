import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AllSuperCoins from "./Screens/AllSuperCoins";
import EarnCoins from "./Screens/EarnCoins";
import UseCoins from "./Screens/UseCoins";

const Tab = createMaterialTopTabNavigator();

export default SuperCoin = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flexDirection: "row", height: "6%" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("AppBottom")}
          style={{
            flex: 0.15,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../../../../assets/img/arrow.png")}
            style={{ height: 18, width: 18 }}
          />
        </TouchableOpacity>
        <View style={{ flex: 0.7, justifyContent: "center" }}>
          <Text style={{ fontSize: 18, color: "black" }}>SuperCoins</Text>
        </View>
      </View>
      <View
        style={{
          flex: 0.1,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            padding: 10,
            marginHorizontal: 30,
            backgroundColor: "#e9f2e9",
            borderRadius: 5,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 14, fontWeight: 500, color: "black" }}>
                Use SuperCoins and start Saving
              </Text>
            </View>
            <View style={{ justifyContent: "center", alignContent: "center" }}>
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/271/271228.png",
                }}
                style={{ height: 15, width: 15 }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "#2874f0",
            tabBarInactiveTintColor: "#F8F8F8",
            tabBarStyle: {
              // backgroundColor: "#2874f0",
            },
            tabBarLabelStyle: {
              textAlign: "center",
              color: "black",
              fontSize: 14,
            },
            tabBarIndicatorStyle: {
              borderBottomColor: "#2874f0",
              // borderBottomWidth: 3,
            },
          }}
        >
          <Tab.Screen name="All" component={AllSuperCoins} />
          <Tab.Screen name="Use Coins" component={UseCoins} />
          <Tab.Screen name="Earn Coins" component={EarnCoins} />
        </Tab.Navigator>
      </View>
    </View>
  );
};
