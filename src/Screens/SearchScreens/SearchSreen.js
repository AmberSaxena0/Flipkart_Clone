import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import React from "react";
import FlipKart_Styles from "../../../Utils/Styles/FlipkartStyles";
import SearchItems from "../SearchScreens/SearchItems.json";
import DiscoverMore from "../../AppBottom/AppBottomScreens/ItemsScreen/ItemUtils/DiscoverMore.json";
const SearchSreen = () => {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View
        style={{
          flex: 0.06,
          backgroundColor: "#F1F1F1",
          flexDirection: "row",
          borderWidth: 1,
          borderColor: "#c2c2c2",
          backgroundColor: "white",
        }}
      >
        <View style={FlipKart_Styles.Search_Container_Search_Box_Image}>
          <Image
            source={require("../../../assets/img/search.png")}
            style={{ height: 20, width: 20, tintColor: "#000" }}
          />
        </View>

        <View
          //   onPress={() => navigation.navigate("SearchScreen")}
          style={FlipKart_Styles.Search_Container_Search_Box_Text}
        >
          <TextInput
            placeholder="Search for Products"
            style={{
              //   color: "black",

              fontSize: 16,
              //   textAlign: "center",
            }}
          />
        </View>

        <TouchableOpacity
          onPress={() => alert("Mic Pressed")}
          style={FlipKart_Styles.Search_Container_Search_Box_Icon_Image}
        >
          <Image
            source={require("../../../assets/img/mic.png")}
            style={FlipKart_Styles.Search_Container_Search_Box_Icon_Image_Size}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert("Camera Pressed")}
          style={FlipKart_Styles.Search_Container_Search_Box_Icon_Image}
        >
          <Image
            source={require("../../../assets/img/camera.png")}
            style={FlipKart_Styles.Search_Container_Search_Box_Icon_Image_Size}
          />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        <FlatList
          data={SearchItems}
          numColumns={3}
          ListHeaderComponent={() => {
            return (
              <View style={{ marginBottom: 20, backgroundColor: "#f0f5ff" }}>
                <Text style={{ marginLeft: 15, marginTop: 10 }}>
                  Upload an image to search for similar products
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    flex: 1,
                    paddingVertical: 15,
                    // backgroundColor: "red",
                  }}
                >
                  <View
                    style={{
                      flex: 0.4,
                      justifyContent: "center",
                      alignContent: "center",
                      alignItems: "center",
                      backgroundColor: "white",
                      padding: 10,
                      elevation: 5,
                      marginLeft: 10,
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                      }}
                    >
                      <View
                        style={{
                          alignContent: "center",
                          alignItems: "center",
                          alignContent: "center",
                        }}
                      >
                        <Image
                          source={{
                            uri: "https://cdn-icons-png.flaticon.com/512/45/45010.png",
                          }}
                          style={{
                            height: 20,
                            width: 20,
                            tintColor: "#2370f4",
                            marginRight: 10,
                          }}
                        />
                      </View>
                      <View>
                        <Text
                          style={{
                            color: "#2370f4",
                            fontWeight: 500,
                            fontSize: 14,
                          }}
                        >
                          Take a photo
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 0.6,
                      justifyContent: "center",
                      alignContent: "center",
                      alignItems: "center",
                      backgroundColor: "white",
                      elevation: 5,
                      paddingVertical: 10,
                      marginLeft: 10,
                      marginRight: 10,
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        flex: 1,
                        flexDirection: "row",
                      }}
                    >
                      <View
                        style={{
                          alignContent: "center",
                          alignItems: "center",

                          alignContent: "center",
                        }}
                      >
                        <Image
                          source={{
                            uri: "https://cdn-icons-png.flaticon.com/512/3033/3033215.png",
                          }}
                          style={{
                            height: 20,
                            width: 20,
                            tintColor: "#2370f4",
                            marginRight: 10,
                          }}
                        />
                      </View>
                      <View>
                        <Text
                          style={{
                            color: "#2370f4",
                            fontWeight: 500,
                            fontSize: 14,
                          }}
                        >
                          Choose From Galery
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{ backgroundColor: "white" }}>
                  <Text
                    style={{
                      margin: 15,
                      color: "black",
                      fontWeight: 500,
                      fontSize: 18,
                    }}
                  >
                    Popular Products
                  </Text>
                </View>
              </View>
            );
          }}
          renderItem={({ item }) => {
            return (
              <View style={{ backgroundColor: "white", flex: 1, elevation: 5 }}>
                <View
                  onPress={() => navigation.navigate("SecondPage")}
                  style={FlipKart_Styles.Three_Section_Container_Item}
                >
                  <Image
                    source={{
                      uri: item.PopularImg,
                    }}
                    resizeMode="contain"
                    style={FlipKart_Styles.Three_Section_Container_Item_Image}
                  />
                  <Text
                    style={FlipKart_Styles.Three_Section_Container_Item_Title}
                  >
                    {item.PopularTitle}
                  </Text>
                  <Text
                    style={{
                      color: "grey",
                      fontSize: 12,
                      marginBottom: 20,
                      marginTop: 5,
                    }}
                  >
                    {item.PopularSubTitle}
                  </Text>
                </View>
              </View>
            );
          }}
          ListFooterComponent={() => {
            return (
              <View style={{ marginTop: 20, elevation: 5 }}>
                <View style={{ flexDirection: "row", flex: 1 }}>
                  <View
                    style={{
                      flex: 0.1,
                      alignContent: "center",

                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={{
                        uri: "https://cdn-icons-png.flaticon.com/512/3742/3742162.png",
                      }}
                      style={{ height: 20, width: 20 }}
                    />
                  </View>
                  <View style={{ flex: 0.8 }}>
                    <Text
                      style={{ fontSize: 16, fontWeight: 500, color: "black" }}
                    >
                      Discover More
                    </Text>
                  </View>
                </View>
                <View>
                  <FlatList
                    data={DiscoverMore}
                    numColumns={4}
                    renderItem={({ item }) => {
                      return (
                        <View
                          style={{
                            backgroundColor: "#f0f0f0",
                            margin: 10,
                            padding: 10,
                            borderRadius: 25,
                          }}
                        >
                          <Text
                            style={{
                              fontWeight: 400,
                              fontSize: 12,
                              color: "black",
                            }}
                          >
                            {item}
                          </Text>
                        </View>
                      );
                    }}
                  />
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default SearchSreen;
