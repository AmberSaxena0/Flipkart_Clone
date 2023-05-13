import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { ImageSlider } from "react-native-image-slider-banner";
import CategoryList from "../../../Utils/GrocerySection/CategoryList.json";
import CarouselItem from "../../../Utils/GrocerySection/CarouselItem.json";
import LimitedTimeOffer from "../../../Utils/GrocerySection/LimitedTimeOffer.json";
import EasyOrdering from "../../../Utils/GrocerySection/EasyOrdering.json";
import GroceryStyles from "../../../Utils/Styles/GroceryStyles";

const HomeGroceryTabs = ({ navigation }) => {
  const FlatlistHeader = () => {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={GroceryStyles.Search_Box_Container}>
          <View style={GroceryStyles.Search_Box_Search_Icon}>
            <Image
              source={require("../../../assets/img/search.png")}
              style={{ height: 25, width: 25 }}
            />
          </View>
          <View style={{ flex: 0.8 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("SearchScreen")}
              style={{ fontSize: 16, color: "black", paddingVertical: 10 }}
            >
              <Text
                style={{
                  color: "black",
                  fontWeight: 500,
                  fontSize: 16,
                  textAlign: "center",
                }}
              >
                Search for Products
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => alert("Mic Presed")}
            style={GroceryStyles.Search_Box_Mic_Icon}
          >
            <Image
              source={require("../../../assets/img/mic.png")}
              style={{ height: 25, width: 25 }}
            />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 0.3, justifyContent: "center" }}>
          <Image
            source={{
              uri: "https://rukminim1.flixcart.com/fk-p-flap/844/140/image/797a191301cde1fc.jpg?q=50",
            }}
            style={{ height: 100, width: "100%" }}
            resizeMode="contain"
          />
        </View>

        <View
          style={{
            flex: 0.2,
            flexDirection: "row",
            elevation: 3,
          }}
        >
          <View
            style={{
              flex: 0.2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/484/484167.png",
              }}
              style={{
                height: 30,
                width: 30,
                alignContent: "center",
                tintColor: "blue",
              }}
            />
          </View>
          <View
            style={{
              justifyContent: "center",
              flex: 0.7,

              // backgroundColor: "red",
            }}
          >
            <Text style={{ fontSize: 16, color: "black" }}>
              Delivery to <Text style={{ fontWeight: 500 }}>201301, Noida</Text>
            </Text>
          </View>

          <TouchableOpacity style={GroceryStyles.Location_Button_Section}>
            <Text style={{ fontSize: 16, color: "#2874f0", fontWeight: 600 }}>
              Change
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 0.4 }}>
          <FlatList
            data={CategoryList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <SafeAreaView>
                  <Image
                    source={{ uri: item.ImgUrl }}
                    style={GroceryStyles.Category_Image}
                  />

                  <Text style={GroceryStyles.Category_Text}>{item.name}</Text>
                </SafeAreaView>
              );
            }}
          />
        </View>

        <ImageSlider
          data={CarouselItem}
          autoPlay={true}
          indicatorContainerStyle={{ marginBottom: -10 }}
          showHeader={false}
        />

        <View style={GroceryStyles.Limited_Time_Offer_Section}>
          <View
            style={{
              marginLeft: 15,
            }}
          >
            <Text style={GroceryStyles.Common_Text_Style}>
              Limited Period Deals
            </Text>
            <Text style={GroceryStyles.Common_Text_Style_two}>
              Only for Today
            </Text>
          </View>
        </View>
      </View>
    );
  };
  const FlatlistFooter = () => {
    return (
      <View style={GroceryStyles.Easy_Ordering_Container}>
        <View style={GroceryStyles.Easy_Ordering_Text_Container}>
          <View
            style={{
              marginLeft: 15,
              flex: 0.76,
            }}
          >
            <Text style={GroceryStyles.Common_Text_Style}>Easy Ordering</Text>
            <Text style={GroceryStyles.Common_Text_Style_two}>
              Based on your past purchase and activity
            </Text>
          </View>

          <TouchableOpacity style={GroceryStyles.Easy_Ordering_View_All_Button}>
            <View>
              <Text style={{ color: "white", fontWeight: 500 }}>View all</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 20 }}>
          <FlatList
            data={EasyOrdering}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <View style={GroceryStyles.Easy_Ordering_Item_Container}>
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingVertical: 10,
                    }}
                  >
                    <Image
                      source={{ uri: item.OrderImg }}
                      style={GroceryStyles.Easy_Ordering_Item_Container_Image}
                    />
                  </View>
                  <Text
                    style={GroceryStyles.Easy_Ordering_Item_Container_Title}
                  >
                    {item.OrderName}
                  </Text>
                  <Text style={GroceryStyles.Easy_Ordering_Container_SubTitle}>
                    {item.OrderTitle}
                  </Text>
                  <Text style={GroceryStyles.Easy_Ordering_Container_Weight}>
                    {item.OrderWeight}
                  </Text>
                  <Text style={GroceryStyles.Easy_Ordering_Container_Price}>
                    {item.OrderPrice}
                  </Text>
                  <View
                    style={GroceryStyles.Easy_Ordering_Add_to_Cart_Container}
                  >
                    <View
                      style={
                        GroceryStyles.Easy_Ordering_Add_to_Cart_Container_Item
                      }
                    >
                      <Text
                        style={
                          GroceryStyles.Easy_Ordering_Add_to_Cart_Container_Text
                        }
                      >
                        Add
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={
                        GroceryStyles.Easy_Ordering_Add_to_Cart_Container_Icon
                      }
                    >
                      <View style={{ backgroundColor: "#cfe1ff" }}>
                        <Text style={{ fontSize: 20, textAlign: "center" }}>
                          +
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <View style={{ backgroundColor: "white", marginTop: 20 }}>
          <ImageSlider
            data={CarouselItem}
            autoPlay={true}
            indicatorContainerStyle={{ marginBottom: -20 }}
            showHeader={false}
            caroselImageStyle={{
              borderRadius: 10,
            }}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        ListHeaderComponent={FlatlistHeader}
        ListFooterComponent={FlatlistFooter}
        data={LimitedTimeOffer}
        renderItem={({ item }) => {
          return (
            <View
              style={GroceryStyles.Limited_Time_Offer_Section_Item_Container}
            >
              <View style={GroceryStyles.Limited_Time_Offer_Section_Item_Image}>
                <Image
                  source={{ uri: item.OfferImg }}
                  style={{ height: 120, width: 120 }}
                />
              </View>
              <View
                style={{
                  flex: 0.8,
                  paddingVertical: 10,
                }}
              >
                <Text
                  style={{ fontSize: 12, color: "black", marginVertical: 10 }}
                >
                  {item.OfferTitle}
                </Text>
                <Text style={GroceryStyles.Common_Text_Style}>
                  {item.OfferSubTitle}
                </Text>
                <Text style={{ marginVertical: 5 }}>{item.OfferSize}</Text>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                  }}
                >
                  <View style={{ flex: 0.2 }}>
                    <Text
                      style={
                        GroceryStyles.Limited_Time_Offer_Section_order_Price
                      }
                    >
                      {item.OfferPrice}
                    </Text>
                  </View>
                  <View
                    style={
                      GroceryStyles.Limited_Time_Offer_Section_Order_Price_Off
                    }
                  >
                    <Text style={{ color: "white" }}>{item.OfferOff}</Text>
                  </View>
                  <View
                    style={{
                      flex: 0.5,
                      marginLeft: 20,
                    }}
                  >
                    <View style={{ flex: 1, flexDirection: "row" }}>
                      <View
                        style={
                          GroceryStyles.Limited_Time_Offer_Section_Add_To_Cart_Container
                        }
                      >
                        <Text style={{ fontSize: 16, textAlign: "center" }}>
                          Add
                        </Text>
                      </View>
                      <TouchableOpacity
                        style={
                          GroceryStyles.Limited_Time_Offer_Section_Add_To_Cart_Icon
                        }
                      >
                        <View style={{ backgroundColor: "#cfe1ff" }}>
                          <Text style={{ fontSize: 20, textAlign: "center" }}>
                            +
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default HomeGroceryTabs;
