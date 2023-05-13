import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import Watches from "../ItemUtils/Watches.json";
import FlipKart_Styles from "../../../../../Utils/Styles/FlipkartStyles";

const WatchesScreen = ({ navigation, route }) => {
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
      <View style={{ flex: 1, marginTop: 5 }}>
        <FlatList
          data={Watches}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ProductDescription", {
                    item: item,
                  })
                }
                style={[
                  FlipKart_Styles.Two_Section_Container_Item,
                  { marginBottom: 10, backgroundColor: "white" },
                ]}
              >
                <View style={{ padding: 5 }}>
                  <Image
                    source={{
                      uri: item.ItemImg,
                    }}
                    style={{ height: 170, width: "100%" }}
                    resizeMode="contain"
                  />
                </View>

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
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default WatchesScreen;
