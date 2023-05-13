import { StyleSheet } from "react-native";

export default StyleSheet.create({
  Main_Container_Styles: {
    flex: 1,
    backgroundColor: "#2874f0",
  },
  Header_Component: {
    flex: 0.08,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  Close_Icon: {
    height: 17,
    width: 17,
    tintColor: "white",
  },
  Flipkart_Image: {
    height: "50%",
    width: "30%",
    alignSelf: "center",
    tintColor: "white",
  },
  Login_Container: {
    flex: 1,
    paddingTop: 30,
    paddingRight: 30,
    paddingLeft: 30,
    backgroundColor: "white",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  Login_Text: {
    fontSize: 16,
    color: "black",
    fontWeight: 500,
    marginTop: 5,
  },
  Login_Texts: {
    marginTop: 10,
    color: "black",
  },
  Phone_Number_Text: {
    fontSize: 15,
    fontWeight: 500,
    color: "#2874f0",
  },
  Policy_Text: {
    fontSize: 12,
    marginTop: 20,
    color: "black",
    fontWeight: 400,
  },
  Continue_Button: {
    flex: 1,
    justifyContent: "flex-end",
    alignSelf: "center",
  },
  Continue_Button_Styles: {
    backgroundColor: "#fb641b",
    padding: 12,
    marginBottom: 5,
    paddingHorizontal: "41%",
  },
  Continue_Text: {
    fontSize: 14,
    color: "white",
  },
  Text_Input_Container: {
    flexDirection: "row",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#2874f0",
    marginTop: 30,
  },
  Country_Code_Styles: {
    flex: 0.2,
    flexDirection: "row",

    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  Down_Arrow_Style: { height: 10, width: 10, marginTop: 8 },
  Country_Code_Modal_Style: {
    flex: 1,
    margin: "20%",
    borderRadius: 20,
    backgroundColor: "white",
    alignSelf: "center",
  },
  Phone_Text_Style: { flex: 1, flexDirection: "row", marginHorizontal: "2%" },
  Use_Email_Text: {
    fontSize: 15,
    fontWeight: 500,
    color: "#2874f0",
  },
});
