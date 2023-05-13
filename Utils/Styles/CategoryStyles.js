import { StyleSheet } from "react-native";

export default StyleSheet.create({
  Header_Container: {
    flexDirection: "row",
    backgroundColor: "#2874f0",
    height: "8%",
  },
  Header_Text_Section: {
    flex: 0.8,
    justifyContent: "center",
    alignContent: "center",
    marginLeft: 20,
  },
  Header_Search_Icon: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  Header_Mic_Icon: {
    flex: 0.2,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  More_On_Flipkart_Container: {
    marginHorizontal: 10,
    marginVertical: 20,
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    height: 90,
    width: 77,
  },
  More_On_Flipkart_Text_Container: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  More_On_Flipkart_Text_Component: {
    flex: 1,
    height: 0.7,
    backgroundColor: "black",
  },
  More_On_Flipkart_Text_Style: {
    fontSize: 22,
    fontWeight: "700",
    color: "black",
    marginVertical: 20,
    margin: 10,
  },
  Image_Size: {
    height: 50,
    width: 50,
  },
  More_On_Flipkart_Item: {
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  Trending_Store: {
    fontSize: 22,
    fontWeight: "700",
    color: "black",
    marginVertical: 20,
    margin: 10,
  },

  Trending_Store_Text_Container: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  Trending_Store_Text_Item: { flex: 1, height: 0.7, backgroundColor: "grey" },
  Trending_Store_Container: {
    flex: 1,
    backgroundColor: "#99e6fc",
    marginVertical: 20,
    marginHorizontal: 10,
    borderRadius: 20,
    padding: 10,
  },
  Trending_Store_Title: {
    fontFamily: "Lobster-Regular",
    fontSize: 20,
    color: "black",
    fontWeight: 600,
  },
  Trending_Store_SubTitle: {
    fontSize: 14,
    color: "black",
    fontSize: 16,
  },
  Trending_Store_Image_Container: {
    flex: 1,

    alignSelf: "flex-end",
    justifyContent: "flex-end",
    marginTop: 20,
  },
  Trending_Store_Image: { height: 120, width: 120 },

  Category_Container: {
    marginHorizontal: 10,
    marginVertical: 20,
    alignItems: "center",
    height: 90,
    width: 77,
  },
  Category_Image_Container: {
    flexDirection: "row",
    backgroundColor: "#D0DDED",
    padding: 10,

    borderRadius: 100,
  },
  Category_Text_Container: {
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 10,
  },
  Category_Text_Style: {
    fontFamily: "Lobster-Regular",
    color: "black",
    fontSize: 12,
    fontWeight: 700,
  },
});
