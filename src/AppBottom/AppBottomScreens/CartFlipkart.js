import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";
import CartStyles from "../../../Utils/Styles/CartStyles";
import CartItems from "../../../Utils/CartItems.json";

const CartFlipkart = ({ navigation }) => {
  const [DataPackage, setPackage] = useState(CartItems);
  const [Counter, setCounter] = useState(1);
  const [numberOfItem, setnumberOfItem] = useState();

  const [ItemPriceTotal, setItemPriceTotal] = useState();
  console.log(ItemPriceTotal);

  const [Token, setToken] = useState(null);

  let arrayitem = [];

  const LogOut = async () => {
    setToken(await AsyncStorage.getItem("@storage_Key"));
    await AsyncStorage.removeItem("@storage_Key").then(
      navigation.navigate("Login")
    );
  };
  const AddCounter = (idx) => {
    DataPackage[idx].Counter = DataPackage[idx].Counter + 1;
    setCounter(DataPackage[idx].Counter);
    setPackage(DataPackage);
  };
  const SubCounter = (idx) => {
    DataPackage[idx].Counter = DataPackage[idx].Counter - 1;

    setCounter(DataPackage[idx].Counter);
    setPackage(DataPackage);
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {Token ? (
        <View style={CartStyles.Main_Container}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/3523/3523887.png",
            }}
            style={CartStyles.Cart_Image_Size}
          />
          <Text style={CartStyles.Cart_Text_Title}>Missing Cart items?</Text>

          <Text style={CartStyles.Cart_Text_SubTitle}>
            Login to see the items you added previously
          </Text>

          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Register")}
              style={CartStyles.Login_Button}
            >
              <Text style={CartStyles.Text_Styles}>Login</Text>
            </TouchableOpacity>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate("FirstPage")}
                style={CartStyles.Continue_Shopping}
              >
                <Text style={{ color: "#2874f0" }}>Continue Shopping</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <FlatList
            data={CartItems}
            renderItem={({ item, index }) => {
              setnumberOfItem(index);
              const { ItemImg, ItemName, Counter, ItemPrice, ItemTitle } = item;
              let value = ItemPrice * Counter;
              arrayitem.push(value);
              setItemPriceTotal(arrayitem.reduce((prev, num) => prev + num));
              return (
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "white",
                    flexDirection: "row",
                    marginVertical: 5,
                    elevation: 10,

                    marginHorizontal: 5,
                    borderRadius: 10,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("ProductDescription", { item: item });
                    }}
                    style={{ marginHorizontal: 10, marginVertical: 5 }}
                  >
                    <Image
                      source={{ uri: ItemImg }}
                      style={{ height: 150, width: 70 }}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>

                  <View
                    style={{
                      flexDirection: "column",
                      justifyContent: "center",
                      marginLeft: 20,
                      flex: 1,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color: "black",
                        fontWeight: 500,
                        marginBottom: 10,
                      }}
                    >
                      {ItemName}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "black",
                        fontWeight: 400,
                        marginRight: 15,
                        textAlign: "justify",
                      }}
                      numberOfLines={3}
                    >
                      {ItemTitle}
                    </Text>
                    <Text
                      style={{
                        fontSize: 20,
                        color: "black",
                        fontWeight: 800,

                        justifyContent: "center",
                        marginTop: 10,
                      }}
                    >
                      ₹ {ItemPrice}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        marginVertical: 20,
                      }}
                    >
                      <TouchableOpacity
                        disabled={Counter < 2 ? true : false}
                        onPress={() => SubCounter(index)}
                        style={{
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          source={{
                            uri: "https://cdn-icons-png.flaticon.com/512/1828/1828899.png",
                          }}
                          style={{
                            height: 25,
                            width: 25,
                            tintColor: "#2874f0",
                          }}
                        />
                      </TouchableOpacity>
                      <View style={{ marginHorizontal: 10 }}>
                        <Text
                          style={{
                            fontSize: 20,
                            color: "black",
                            fontWeight: 500,
                            justifyContent: "center",
                          }}
                        >
                          {Counter}
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => AddCounter(index)}
                        style={{ justifyContent: "center" }}
                      >
                        <Image
                          source={{
                            uri: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
                          }}
                          style={{
                            height: 25,
                            width: 25,
                            tintColor: "#2874f0",
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            }}
            ListFooterComponent={() => {
              return (
                <View style={{ backgroundColor: "white" }}>
                  <View
                    style={{
                      marginVertical: 20,
                      marginHorizontal: 20,
                    }}
                  >
                    <Text
                      style={{ fontSize: 20, color: "black", fontWeight: 500 }}
                    >
                      Price Details
                    </Text>
                  </View>

                  <View
                    style={{
                      marginVertical: 20,
                      marginHorizontal: 20,
                      flexDirection: "row",
                    }}
                  >
                    <View style={{ flex: 1 }}>
                      <Text
                        style={{
                          fontSize: 14,
                          color: "black",
                          fontWeight: 500,
                        }}
                      >
                        Price ({numberOfItem + 1} items)
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "flex-end",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 14,
                          color: "black",
                          fontWeight: 500,
                        }}
                      >
                        ₹ {ItemPriceTotal}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      backgroundColor: "white",
                      flexDirection: "row",
                      marginHorizontal: 20,
                      borderTopWidth: 0.5,
                      borderStyle: "solid",
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        marginBottom: 20,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          color: "black",
                          fontWeight: 500,
                        }}
                      >
                        Total Price
                      </Text>
                    </View>

                    <View
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "flex-end",
                      }}
                    >
                      <Text
                        style={{
                          color: "black",
                          fontWeight: 700,
                          fontSize: 20,
                        }}
                      >
                        ₹ {ItemPriceTotal}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

export default CartFlipkart;
