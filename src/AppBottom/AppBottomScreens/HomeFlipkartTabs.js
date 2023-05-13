import {
  View,
  Text,
  Switch,
  TextInput,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import ListIcons from "../../../Utils/FlipkartSection/ListIcons.json";
import CarouselImage from "../../../Utils/FlipkartSection/CarouselImage.json";
import { ImageSlider } from "react-native-image-slider-banner";
import SponsoredList from "../../../Utils/FlipkartSection/SponsoredList.json";
import FlipKart_Styles from "../../../Utils/Styles/FlipkartStyles";
import { TabActions } from "@react-navigation/native";

const HomeFlipkartTabs = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const renderitems = (data, index) => {
    const { name, ImgUrl } = data;
    return (
      <SafeAreaView>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("SuperCoins", { ItemIndex: index })
          }
        >
          <View>
            <Image
              source={{ uri: ImgUrl }}
              style={{
                borderWidth: 2,
                borderColor: "#cfe1ff",
                borderRadius: 5,
                height: 60,
                width: 60,
                alignSelf: "center",
                justifyContent: "center",
                alignContent: "center",
              }}
            />
          </View>
          <View>
            <Text
              style={{
                color: "black",
                alignContent: "center",
                justifyContent: "center",
                alignContent: "center",
                fontSize: 12,
                fontWeight: 700,
                marginHorizontal: 20,
                marginTop: 10,
                marginBottom: 20,
              }}
            >
              {name}
            </Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };

  const FlatlistHeader = () => {
    return (
      <View style={{ height: "100%", width: "100%", backgroundColor: "white" }}>
        <View style={FlipKart_Styles.Search_Container}>
          <View style={FlipKart_Styles.Search_Container_Switch}>
            <Text style={FlipKart_Styles.Search_Container_Switch_Text}>
              Brand Mall
            </Text>
            <Switch
              trackColor={{ false: "grey", true: "black" }}
              thumbColor={isEnabled ? "white" : "wite"}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

          <View style={FlipKart_Styles.Search_Container_Search_Box}>
            <View style={FlipKart_Styles.Search_Container_Search_Box_Image}>
              <Image
                source={require("../../../assets/img/search.png")}
                style={{ height: 25, width: 25, tintColor: "#000" }}
              />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("SearchScreen")}
              style={FlipKart_Styles.Search_Container_Search_Box_Text}
            >
              <Text
                style={{
                  fontFamily: "Pacifico-Regular",
                  color: "black",
                  fontWeight: 500,
                  fontSize: 16,
                  textAlign: "center",
                }}
              >
                Search for Products
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => alert("Mic Pressed")}
              style={FlipKart_Styles.Search_Container_Search_Box_Icon_Image}
            >
              <Image
                source={require("../../../assets/img/mic.png")}
                style={
                  FlipKart_Styles.Search_Container_Search_Box_Icon_Image_Size
                }
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => alert("Camera Pressed")}
              style={FlipKart_Styles.Search_Container_Search_Box_Icon_Image}
            >
              <Image
                source={require("../../../assets/img/camera.png")}
                style={
                  FlipKart_Styles.Search_Container_Search_Box_Icon_Image_Size
                }
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flex: 0.43 }}>
          <ImageSlider
            data={CarouselImage}
            autoPlay={true}
            indicatorContainerStyle={{ marginBottom: -10 }}
            showHeader={false}
          />
        </View>
        <View style={FlipKart_Styles.Margin_Top_20}>
          <FlatList
            data={ListIcons}
            renderItem={({ item, index }) => renderitems(item, index)}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={FlipKart_Styles.Three_Section_Container}>
          <TouchableOpacity
            onPress={() => navigation.navigate("SecondPage")}
            style={FlipKart_Styles.Three_Section_Container_Item}
          >
            <Image
              source={{
                uri: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2021-12/211213-wee-groceries-se-405p-a36212.jpg",
              }}
              style={FlipKart_Styles.Three_Section_Container_Item_Image}
            />
            <Text style={FlipKart_Styles.Three_Section_Container_Item_Title}>
              Extra ₹75 Off*
            </Text>
            <Text style={FlipKart_Styles.Three_Section_Container_Item_SubTitle}>
              Lowest Price
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("PhoneScreen", { ItemName: " Smart Phones" })
            }
            style={FlipKart_Styles.Three_Section_Container_Item}
          >
            <Image
              source={{
                uri: "https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-f/f14-5g/sec_05_d_v1.jpg?$ORIGIN_JPG$",
              }}
              style={FlipKart_Styles.Three_Section_Container_Item_Image}
            />
            <Text style={FlipKart_Styles.Three_Section_Container_Item_Title}>
              Smart Phones
            </Text>
            <Text style={FlipKart_Styles.Three_Section_Container_Item_SubTitle}>
              ₹12,990
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("WatchesScreen", {
                ItemName: " Smart Watches",
              });
            }}
            style={FlipKart_Styles.Three_Section_Container_Item}
          >
            <Image
              source={{
                uri: "https://m.economictimes.com/thumb/msid-93171891,width-1200,height-800,resizemode-4,imgsize-33064/luxury-watch.jpg",
              }}
              style={FlipKart_Styles.Three_Section_Container_Item_Image}
            />
            <Text style={FlipKart_Styles.Three_Section_Container_Item_Title}>
              Smart Watches
            </Text>
            <Text style={FlipKart_Styles.Three_Section_Container_Item_SubTitle}>
              ₹1,999
            </Text>
          </TouchableOpacity>
        </View>
        <View style={FlipKart_Styles.Two_Section_Container}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ShoesScreen", {
                ItemName: "Men's Shoes, Sandals...",
              })
            }
            style={FlipKart_Styles.Two_Section_Container_Item}
          >
            <Image
              source={{
                uri: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51qMYJEfdVL._UY500_.jpg",
              }}
              style={FlipKart_Styles.Two_Section_Container_Item_Image}
            />

            <Text style={FlipKart_Styles.Two_Section_Container_Item_Title}>
              Men's Shoes, Sandals...
            </Text>
            <Text style={FlipKart_Styles.Two_Section_Container_Item_SubTitle}>
              Sparx, Bata, Paragon & more
            </Text>
            <Text style={FlipKart_Styles.Two_Section_Container_Item_Price}>
              From ₹149
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("SpeakerScreen", {
                ItemName: "Headphones & Speakers",
              })
            }
            style={FlipKart_Styles.Two_Section_Container_Item}
          >
            <Image
              source={{
                uri: "https://i.rtings.com/assets/pages/zQH3wEfg/best-jbl-speakers2-medium.jpg",
              }}
              style={FlipKart_Styles.Two_Section_Container_Item_Image}
            />

            <Text style={FlipKart_Styles.Two_Section_Container_Item_Title}>
              Headphones & Speakers
            </Text>
            <Text style={FlipKart_Styles.Two_Section_Container_Item_SubTitle}>
              NCEMI* | Exch. Off
            </Text>
            <Text style={FlipKart_Styles.Two_Section_Container_Item_Price}>
              Upto 80% Off
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList ListFooterComponent={FlatListFooter} />
      </View>
    );
  };
  const SpecificItem = (index) => {
    console.log(index);
  };
  const FlatListFooter = () => {
    return (
      <View>
        <View style={FlipKart_Styles.Sponsored_Container}>
          <Text style={FlipKart_Styles.Sponsored_Container_Text}>
            Sponsored
          </Text>
        </View>
        <FlatList
          data={SponsoredList}
          numColumns={3}
          renderItem={({ item, index }) => {
            return (
              <View style={FlipKart_Styles.Sponsored_Container_Item}>
                <View style={{ flex: 1, marginBottom: 30 }}>
                  <TouchableOpacity
                    onPress={() => SpecificItem(index)}
                    style={FlipKart_Styles.Sponsored_Container_Style}
                  >
                    <Image
                      source={{
                        uri: item.sponsoredImg,
                      }}
                      style={FlipKart_Styles.Sponsored_Container_Item_Image}
                    />
                    <Text
                      style={FlipKart_Styles.Sponsored_Container_Item_Title}
                    >
                      {item.sponsoredTitle}
                    </Text>
                    <Text
                      style={FlipKart_Styles.Sponsored_Container_Item_Offer}
                    >
                      {item.sponsoredSubTitle}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  };
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <FlatList ListHeaderComponent={FlatlistHeader} />
    </View>
  );
};

export default HomeFlipkartTabs;
