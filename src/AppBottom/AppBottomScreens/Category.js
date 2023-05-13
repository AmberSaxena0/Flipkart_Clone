import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import CategoryItems from "../../../Utils/FlipkartSection/CategoryItems.json";
import ListIcons from "../../../Utils/FlipkartSection/ListIcons.json";
import Trending from "../../../Utils/FlipkartSection/Trending.json";
import CategoryStyles from "../../../Utils/Styles/CategoryStyles";
import CartGrocery from "./CartGrocery";

const Category = ({ navigation }) => {
  const HeaderComponent = () => {
    return (
      <View>
        <FlatList
          data={CategoryItems}
          renderItem={({ item }) => {
            return (
              <View style={CategoryStyles.Category_Container}>
                <View style={CategoryStyles.Category_Image_Container}>
                  <Image
                    source={{ uri: item.ItemImg }}
                    style={CategoryStyles.Image_Size}
                  />
                </View>
                <View style={CategoryStyles.Category_Text_Container}>
                  <Text style={CategoryStyles.Category_Text_Style}>
                    {item.ItemName}
                  </Text>
                </View>
              </View>
            );
          }}
          numColumns={4}
        />
        <View style={CategoryStyles.More_On_Flipkart_Text_Container}>
          <View style={CategoryStyles.More_On_Flipkart_Text_Component} />
          <View>
            <Text style={CategoryStyles.More_On_Flipkart_Text_Style}>
              More on Flipkart
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const ListIconsRender = (data) => {
    const { name, ImgUrl } = data;

    return (
      <View style={CategoryStyles.More_On_Flipkart_Container}>
        <View style={{ flexDirection: "row" }}>
          <Image source={{ uri: ImgUrl }} style={CategoryStyles.Image_Size} />
        </View>
        <View style={CategoryStyles.More_On_Flipkart_Item}>
          <Text style={{ color: "black", fontSize: 12, fontWeight: 700 }}>
            {name}
          </Text>
        </View>
      </View>
    );
  };
  const FooterComponent = () => {
    return (
      <View>
        <View style={CategoryStyles.Trending_Store_Text_Container}>
          <View style={CategoryStyles.Trending_Store_Text_Item} />
          <View>
            <Text style={CategoryStyles.Trending_Store}>Trending Store</Text>
          </View>
        </View>
        <View>
          <FlatList
            data={Trending}
            renderItem={({ item }) => {
              return (
                <View style={CategoryStyles.Trending_Store_Container}>
                  <Text style={CategoryStyles.Trending_Store_Title}>
                    {item.TrendingTitle}
                  </Text>

                  <Text style={CategoryStyles.Trending_Store_SubTitle}>
                    {item.TrendingSubTitle}
                  </Text>

                  <View style={CategoryStyles.Trending_Store_Image_Container}>
                    <Image
                      source={{ uri: item.TrendingImg }}
                      style={CategoryStyles.Trending_Store_Image}
                    />
                  </View>
                </View>
                // </View>
              );
            }}
            numColumns={2}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={CategoryStyles.Header_Container}>
        <View style={CategoryStyles.Header_Text_Section}>
          <Text style={{ fontSize: 18, color: "white" }}>All Categories</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("SearchScreen")}
          style={CategoryStyles.Header_Search_Icon}
        >
          <Image
            source={require("../../../assets/img/search.png")}
            style={{ height: 20, width: 20, tintColor: "white" }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert("Mic Pressed")}
          style={CategoryStyles.Header_Mic_Icon}
        >
          <Image
            source={require("../../../assets/img/mic.png")}
            style={{ height: 20, width: 20, tintColor: "white" }}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={ListIcons}
        renderItem={({ item }) => ListIconsRender(item)}
        numColumns={4}
        ListHeaderComponent={<HeaderComponent />}
        ListFooterComponent={<FooterComponent />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Category;
