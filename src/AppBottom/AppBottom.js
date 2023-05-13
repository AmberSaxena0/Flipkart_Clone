import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./AppBottomScreens/Home";
import Category from "./AppBottomScreens/Category";
import Cart from "./AppBottomScreens/Cart";
import Notifications from "./AppBottomScreens/Notifications";
import Accounts from "./AppBottomScreens/Accounts";

const Tab = createBottomTabNavigator();

const AppBottom = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "relative",
          height: "6%",
          backgroundColor: "#ffff",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../../assets/img/Home.png")}
                resizeMode="center"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "#2874f0" : "black",
                  alignSelf: "center",
                  borderColor: focused ? "#fd5f00" : "white",
                }}
              />
              <Text
                style={{
                  fontFamily: "Lobster-Regular",
                  fontSize: 12,
                  color: focused ? "#2874f0" : "black",
                  alignSelf: "center",
                  fontWeight: 500,
                  marginTop: 7,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../../assets/img/Category.png")}
                resizeMode="center"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "#2874f0" : "black",
                  alignSelf: "center",
                  borderColor: focused ? "#fd5f00" : "white",
                }}
              />
              <Text
                style={{
                  fontFamily: "Lobster-Regular",
                  fontSize: 12,
                  color: focused ? "#2874f0" : "black",
                  alignSelf: "center",
                  fontWeight: 500,
                  marginTop: 7,
                }}
              >
                Category
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        white
        component={Notifications}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../../assets/img/Notifications.png")}
                resizeMode="center"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "#2874f0" : "black",
                  alignSelf: "center",
                  borderColor: focused ? "#fd5f00" : "white",
                }}
              />
              <Text
                style={{
                  fontFamily: "Lobster-Regular",
                  fontSize: 12,
                  color: focused ? "#2874f0" : "black",
                  alignSelf: "center",
                  fontWeight: 500,
                  marginTop: 7,
                }}
              >
                Notifications
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        // white
        component={Accounts}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../../assets/img/Accounts.png")}
                resizeMode="center"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "#2874f0" : "black",
                  alignSelf: "center",
                  borderColor: focused ? "#fd5f00" : "white",
                }}
              />
              <Text
                style={{
                  fontFamily: "Lobster-Regular",
                  fontSize: 12,
                  color: focused ? "#2874f0" : "black",
                  alignSelf: "center",
                  fontWeight: 500,
                  marginTop: 7,
                }}
              >
                Accounts
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        white
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../../assets/img/Cart.png")}
                resizeMode="center"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "#2874f0" : "black",
                  alignSelf: "center",
                  borderColor: focused ? "#fd5f00" : "white",
                }}
              />
              <Text
                style={{
                  fontFamily: "Lobster-Regular",
                  fontSize: 12,
                  color: focused ? "#2874f0" : "black",
                  alignSelf: "center",
                  fontWeight: 500,
                  marginTop: 7,
                }}
              >
                Cart
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppBottom;

const styles = StyleSheet.create({
  Bottom_Tab_Text_Style: {
    fontSize: 15,
    color: "black",
    alignSelf: "center",
    fontWeight: 500,
    marginTop: 7,
  },
});
