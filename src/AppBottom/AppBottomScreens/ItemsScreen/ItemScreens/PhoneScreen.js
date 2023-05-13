import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
// import Watches from "./ItemUtils/Watches.json";
import FlipKart_Styles from "../../../../../Utils/Styles/FlipkartStyles";

import Phone from "../ItemUtils/Phone.json";

export default PhoneScreen = ({ navigation, route }) => {
  const [index, setIndex] = useState();
  console.log("Item Index----------------->>>>>>>>>>>>>>>>>>>>>>>", index);
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ flexDirection: "row", flex: 0.07, backgroundColor: "white" }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{ flex: 1, flexDirection: "row" }}
        >
          <View
            style={{
              flex: 0.25,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../../../assets/img/arrow.png")}
              style={{ height: 20, width: 20 }}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                textAlign: "center",
                color: "black",
                fontWeight: 500,
              }}
            >
              {route.params.ItemName}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("SearchScreen")}
          style={{
            flex: 0.25,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../../../../assets/img/search.png")}
            style={{ height: 25, width: 25 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert("Mic Pressed")}
          style={{
            flex: 0.25,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../../../../assets/img/mic.png")}
            style={{ height: 25, width: 25 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert("Camera Pressed")}
          style={{
            flex: 0.25,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../../../../assets/img/camera.png")}
            style={{ height: 25, width: 25 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Cart")}
          style={{
            flex: 0.25,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../../../../assets/img/Cart.png")}
            style={{ height: 25, width: 25 }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 5, flex: 1 }}>
        <FlatList
          data={Phone}
          numColumns={2}
          renderItem={({ item, index }) => {
            return (
              <View
                style={[
                  FlipKart_Styles.Two_Section_Container_Item,
                  { marginBottom: 10, backgroundColor: "white" },
                ]}
              >
                <TouchableOpacity
                  onPress={() => [
                    setIndex(index),
                    navigation.navigate("ProductDescription", {
                      item: item,
                    }),
                  ]}
                  style={{ padding: 5 }}
                >
                  <Image
                    source={{
                      uri: item.ItemImg,
                    }}
                    style={{ height: 170, width: "100%" }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>

                <Text style={FlipKart_Styles.Two_Section_Container_Item_Title}>
                  {item.ItemName}
                </Text>
                <Text
                  style={FlipKart_Styles.Two_Section_Container_Item_SubTitle}
                  numberOfLines={2}
                >
                  {item.ItemTitle}
                </Text>
                <Text
                  style={[
                    FlipKart_Styles.Two_Section_Container_Item_Price,
                    { marginBottom: 20 },
                  ]}
                >
                  {item.ItemPrice}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <View></View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};
