import { View, Text, Switch, Image, TextInput } from "react-native";
import React, { useState } from "react";

const Demo = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View
      style={{
        height: "8%",
        width: "100%",
        backgroundColor: "#F1F1F1",
        flexDirection: "row",
        padding: 10,
      }}
    >
      <View
        style={{
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          marginRight: 10,
        }}
      >
        <Text style={{ fontSize: 12 }}>Brand Mall</Text>
        <Switch
          trackColor={{ false: "grey", true: "black" }}
          thumbColor={isEnabled ? "white" : "wite"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#F1F1F1",
          flexDirection: "row",
          borderWidth: 1,
          borderColor: "#c2c2c2",
        }}
      >
        <View
          style={{
            flex: 0.1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("./assets/img/search.png")}
            style={{ height: 30, width: 30, tintColor: "#000" }}
          />
        </View>
        <View
          style={{
            flex: 0.7,
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <TextInput placeholder="Enter the Item" style={{ fontSize: 14 }} />
        </View>
        <View
          style={{
            flex: 0.1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("./assets/img/mic.png")}
            style={{ height: 20, width: 20, tintColor: "#000" }}
          />
        </View>
        <View
          style={{
            flex: 0.1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("./assets/img/camera.png")}
            style={{ height: 20, width: 20, tintColor: "#000" }}
          />
        </View>
      </View>
    </View>
  );
};

export default Demo;
