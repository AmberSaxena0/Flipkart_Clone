import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AppBottom from "./src/AppBottom/AppBottom";
import PrivacyPolicy from "./src/Screens/Policy/PrivacyPolicy";
import TermsOfUse from "./src/Screens/Policy/TermsOfUse";
import HomeFlipkartTabs from "./src/AppBottom/AppBottomScreens/HomeFlipkartTabs";
import HomeGroceryTabs from "./src/AppBottom/AppBottomScreens/HomeGroceryTabs";
import Files from "./DummyUI/Files";
import NavigationFiles from "./DummyUI/NavigationFiles";
import InnerItemsScreens from "./src/AppBottom/AppBottomScreens/InnerItemsScreens";
import SuperCoins from "./src/AppBottom/AppBottomScreens/FlatelistItems/Supercoins/SuperCoins";
import WatchesScreen from "./src/AppBottom/AppBottomScreens/ItemsScreen/ItemScreens/WatchesScreen";
import ShoesScreen from "./src/AppBottom/AppBottomScreens/ItemsScreen/ItemScreens/ShoesScreen";
import SpeakerScreen from "./src/AppBottom/AppBottomScreens/ItemsScreen/ItemScreens/SpeakerScreen";
import PhoneScreen from "./src/AppBottom/AppBottomScreens/ItemsScreen/ItemScreens/PhoneScreen";
import SearchSreen from "./src/Screens/SearchScreens/SearchSreen";
import ProductDescription from "./src/AppBottom/AppBottomScreens/ItemsScreen/ItemScreens/ProductDescription";
import Login from "./src/Screens/LoginScreens/Login";
import Register from "./src/Screens/LoginScreens/Register";
import ForgotPassword from "./src/Screens/LoginScreens/ForgotPassword";
import OTPVerification from "./src/Screens/LoginScreens/OTPVerification";
import ConfirmPass from "./src/Screens/LoginScreens/ConfirmPass";

const Stack = createNativeStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AppBottom"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Forgot" component={ForgotPassword} />
        <Stack.Screen name="Privacy" component={PrivacyPolicy} />
        <Stack.Screen name="Terms" component={TermsOfUse} />
        <Stack.Screen name="OTPVerify" component={OTPVerification} />
        <Stack.Screen name="ConfirmPass" component={ConfirmPass} />
        <Stack.Screen name="FlipkartHome" component={HomeFlipkartTabs} />
        <Stack.Screen name="FlipkartGrocery" component={HomeGroceryTabs} />
        <Stack.Screen name="AppBottom" component={AppBottom} />
        <Stack.Screen name="InnerItems" component={InnerItemsScreens} />
        <Stack.Screen name="SuperCoins" component={SuperCoins} />
        <Stack.Screen name="Demo" component={Files} />
        <Stack.Screen name="navi" component={NavigationFiles} />
        <Stack.Screen name="PhoneScreen" component={PhoneScreen} />
        <Stack.Screen name="WatchesScreen" component={WatchesScreen} />
        <Stack.Screen name="ShoesScreen" component={ShoesScreen} />
        <Stack.Screen name="SpeakerScreen" component={SpeakerScreen} />
        <Stack.Screen name="SearchScreen" component={SearchSreen} />
        <Stack.Screen
          name="ProductDescription"
          component={ProductDescription}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
