import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import AllItems from "../Utils/AllItems.json";
import { ImageSlider } from "react-native-image-slider-banner";
import CarouselImage from "../../../../../../Utils/FlipkartSection/CarouselImage.json";
import LatestOffers from "../Utils/LatestOffers.json";
import FlipKart_Styles from "../../../../../../Utils/Styles/FlipkartStyles";

import LifeStyleCoupons from "../Utils/LifeStyleCoupons.json";
const AllSuperCoins = () => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <FlatList
        data={AllItems}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity style={styles.Category_Container}>
              <View style={styles.Category_Image_Container}>
                <Image
                  source={{ uri: item.ItemImage }}
                  style={styles.Image_Size}
                />
              </View>
              <View style={styles.Category_Text_Container}>
                <Text style={styles.Category_Text_Style}>{item.ItemName}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
        numColumns={4}
        ListFooterComponent={() => {
          return (
            <View style={{}}>
              <View>
                <ImageSlider
                  data={CarouselImage}
                  autoPlay={true}
                  indicatorContainerStyle={{ marginBottom: -10 }}
                  showHeader={false}
                  caroselImageStyle={{
                    borderRadius: 10,
                  }}
                />
              </View>
              <View
                style={{
                  marginTop: 40,
                  marginBottom: 20,
                  flex: 1,
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 0.7, marginLeft: 15 }}>
                    <Text
                      style={{ fontSize: 18, fontWeight: 700, color: "black" }}
                    >
                      Popular in Rewards
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={{
                      flex: 0.2,
                      alignItems: "flex-end",
                    }}
                  >
                    <Image
                      source={{
                        uri: "https://cdn-icons-png.flaticon.com/512/318/318476.png",
                      }}
                      style={{ height: 30, width: 30, tintColor: "#2874f0" }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: "#ff6161",
                  borderTopRightRadius: 30,
                }}
              >
                <View style={{}}>
                  <Text
                    style={{
                      marginLeft: 20,
                      fontSize: 24,
                      color: "white",
                      fontWeight: 700,
                    }}
                  >
                    Latest Offers
                  </Text>
                </View>
                <FlatList
                  data={LatestOffers}
                  renderItem={({ item, index }) => {
                    return (
                      <View
                        style={[
                          FlipKart_Styles.Two_Section_Container_Item,
                          {
                            marginVertical: 20,
                            backgroundColor: "#dd5354",
                            borderColor: "#ff6161",
                          },
                        ]}
                      >
                        <Image
                          source={{
                            uri: item.Image,
                          }}
                          style={
                            FlipKart_Styles.Two_Section_Container_Item_Image
                          }
                        />

                        <Text
                          style={[
                            FlipKart_Styles.Two_Section_Container_Item_SubTitle,
                            { color: "white" },
                          ]}
                        >
                          {item.Title}
                        </Text>
                        <Text
                          style={[
                            FlipKart_Styles.Two_Section_Container_Item_Title,
                            { marginBottom: 10, color: "white" },
                          ]}
                        >
                          {item.SubTitle}
                        </Text>
                      </View>
                    );
                  }}
                  numColumns={2}
                />
              </View>
              <View>
                {/* <FlatList
                  data={LifeStyleCoupons}
                  horizontal
                  renderItem={({ item, index }) => {
                    // console.log(item.LSCName);
                    return (
                      <View
                        style={FlipKart_Styles.Three_Section_Container_Item}
                      >
                        <Image
                          source={{
                            uri: "https://www.90mobiles.com/dataup/2022/07/newly-launched-noise-colorfit-pro-4-max-18-biggest-display-bluetooth.jpg",
                          }}
                          resizeMode="center"
                          style={
                            FlipKart_Styles.Three_Section_Container_Item_Image
                          }
                        />
                        <Text
                          style={
                            FlipKart_Styles.Three_Section_Container_Item_Title
                          }
                        >
                          {item.LSCName}
                        </Text>
                        <Text
                          style={
                            FlipKart_Styles.Three_Section_Container_Item_SubTitle
                          }
                        >
                          {item.LSCSubTitle}
                        </Text>
                      </View>
                    );
                  }}
                /> */}
              </View>
            </View>
          );
        }}
      />

     
    </View>
  );
};

export default AllSuperCoins;
const styles = StyleSheet.create({
  Image_Size: {
    height: 50,
    width: 50,
  },
  Category_Container: {
    marginHorizontal: 10,
    marginVertical: 20,
    alignItems: "center",
    height: 90,
    width: 77,
  },
  Category_Text_Container: {
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 10,
  },
  Category_Text_Style: {
    color: "black",
    fontSize: 12,
    fontWeight: 700,
    textAlign: "center",
  },

  Three_Section_Container_Item: {
    margin: 5,
    borderWidth: 0.5,
    borderColor: "grey",
    borderRadius: 10,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  Three_Section_Container_Item_Image: {
    height: 80,
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  Three_Section_Container_Item_Title: {
    alignContent: "center",
    alignSelf: "center",
    fontWeight: 500,
    color: "black",
  },
});
