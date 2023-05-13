import { StyleSheet } from "react-native";

export default StyleSheet.create({
  Header_Container: {
    flexDirection: "row",
    backgroundColor: "#2874f0",
    height: "8%",
  },
  Header_Container_Text_Container: {
    flex: 0.8,
    justifyContent: "center",
    alignContent: "center",
    marginLeft: 20,
  },
  Image_Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Image_Size: {
    height: 150,
    width: "100%",
  },
  Text_Container_Styles: {
    // padding: 20,
    marginVertical: 10,
    marginHorizontal: 70,
    textAlign: "center",
  },
});
