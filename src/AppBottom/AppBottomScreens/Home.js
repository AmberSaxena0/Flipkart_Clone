import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeFlipkartTabs from "./HomeFlipkartTabs";
import HomeGroceryTabs from "./HomeGroceryTabs";

const Tab = createMaterialTopTabNavigator();

export default Home = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#F8F8F8",
        tabBarStyle: {
          backgroundColor: "#2874f0",
        },
        tabBarLabelStyle: {
          textAlign: "center",

          fontFamily: "ChivoMono-Bold",
          fontSize: 14,
        },
        tabBarIndicatorStyle: {
          borderBottomColor: "#87B56A",
          borderBottomWidth: 2,
        },
      }}
    >
      <Tab.Screen
        name="FirstPage"
        component={HomeFlipkartTabs}
        options={{
          tabBarLabel: "Flipkart",
        }}
      />
      <Tab.Screen
        name="SecondPage"
        component={HomeGroceryTabs}
        options={{
          tabBarLabel: "Grocery",
        }}
      />
    </Tab.Navigator>
  );
};
