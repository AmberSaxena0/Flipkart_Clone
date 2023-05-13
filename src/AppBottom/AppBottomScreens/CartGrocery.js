import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import CartStyles from "../../../Utils/Styles/CartStyles";

export default CartGrocery = ({ navigation }) => {
  return (
    <View style={CartStyles.Main_Container}>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/3523/3523887.png",
        }}
        style={CartStyles.Cart_Image_Size}
      />
      <Text style={CartStyles.Cart_Text_Title}>Your basket is empty!</Text>

      <Text style={CartStyles.Cart_Text_SubTitle}>
        Enjoy Upto 50% Savings on Grocery
      </Text>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("SecondPage")}
          style={CartStyles.Login_Button}
        >
          <Text style={CartStyles.Text_Styles}>Shop Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
