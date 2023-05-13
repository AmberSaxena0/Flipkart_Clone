import { FlatList, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

const ProductDescription = ({ navigation, route }) => {
  const { ItemName, ItemImg, ItemTitle, ItemPrice } = route.params.item;
  const [HeartPressed, setHeartPressed] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <FlatList
        ListHeaderComponent={() => {
          return (
            <View style={{ flex: 1 }}>
              <View
                style={{
                  height: 55,
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
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
                      {ItemName}
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
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  marginTop: 20,
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    flex: 0.97,

                    height: 400,
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={{ uri: ItemImg }}
                    style={{
                      height: "100%",
                      width: "84%",
                      alignContent: "center",
                      alignItems: "center",
                    }}
                    resizeMode="contain"
                  />
                </View>
                <View style={{ flex: 0.1, marginRight: 5 }}>
                  <TouchableOpacity
                    onPress={() => setHeartPressed(!HeartPressed)}
                  >
                    <Image
                      source={{
                        uri: "https://cdn-icons-png.flaticon.com/512/535/535234.png",
                      }}
                      style={{
                        height: 30,
                        width: 30,
                        marginBottom: 20,

                        tintColor: HeartPressed ? "#e4001e" : "grey",
                      }}
                    />
                  </TouchableOpacity>
                  <Image
                    source={{
                      uri: "https://cdn-icons-png.flaticon.com/512/2958/2958791.png",
                    }}
                    style={{ height: 30, width: 30, tintColor: "#2874f0" }}
                  />
                </View>
              </View>
              <View style={{ marginHorizontal: 20 }}>
                <Text
                  style={{
                    fontSize: 14,
                    marginTop: 20,
                    color: "blue",
                  }}
                >
                  View more from {ItemName}
                </Text>
                <Text style={{ fontSize: 16, color: "black", marginTop: 20 }}>
                  {ItemName}
                </Text>
                <Text style={{ fontSize: 14, color: "black", marginTop: 10 }}>
                  {ItemTitle}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    color: "black",
                    fontWeight: 500,
                    marginTop: 50,
                    marginBottom: 20,
                  }}
                >
                  {ItemPrice}
                </Text>
              </View>
            </View>
          );
        }}
      />
      <View
        style={{
          flexDirection: "row",
          borderTopWidth: 0.5,
          borderColor: "grey",
        }}
      >
        <TouchableOpacity
          style={{
            flex: 0.5,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            padding: 15,
          }}
        >
          <Text style={{ fontSize: 16, color: "black", fontWeight: 500 }}>
            Add To Cart
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 0.5,
            padding: 15,
            backgroundColor: "#ffc200",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16, color: "black", fontWeight: 500 }}>
            Buy Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDescription;
