import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text, View, Image, TouchableOpacity } from "react-native";

import CartFlipkart from "./CartFlipkart";
import CartGrocery from "./CartGrocery";

const Tab = createMaterialTopTabNavigator();

export default Cart = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#ffff",
          height: "8%",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            marginLeft: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
              source={require("../../../assets/img/arrow.png")}
              style={{
                height: 15,
                tintColor: "black",
                width: 15,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 0.8,
            justifyContent: "center",
            alignContent: "center",
            marginLeft: 20,
          }}
        >
          <Text style={{ fontSize: 18, color: "black" }}> My Cart</Text>
        </View>
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
          <Tab.Screen
            name="FlipkartApp"
            component={CartFlipkart}
            options={{
              tabBarLabel: "Flipkart",
            }}
          />
          <Tab.Screen
            name="GroceryApp"
            component={CartGrocery}
            options={{
              tabBarLabel: "Grocery",
            }}
          />
        </Tab.Navigator>
      </View>
    </View>
  );
};
