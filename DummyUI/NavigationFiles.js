import { View, Text } from "react-native";
import React from "react";

const NavigationFiles = ({ navigation, route }) => {
  return (
    <View>
      <Text>Index is {route.params.itemIndex}</Text>
    </View>
  );
};

export default NavigationFiles;
