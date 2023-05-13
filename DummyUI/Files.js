import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import DataDummy from "./DataDummy.json";

const Files = ({ navigation }) => {
  const [counter, setcounter] = useState(0);

  const fetchIndex = (index) => {
    // console.log("------------------------->>>>>>>>>>>>>>>>>>", index);
    setcounter(counter + 1);
  };

  const renderItems = (data, index) => {
    // console.log("========>>>>>>>>>", index);
    return (
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("navi", { itemIndex: index })}
        >
          <Text style={{ fontSize: 25, fontWeight: 500, color: "blue" }}>
            {data.name}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={DataDummy}
        renderItem={({ item, index }) => renderItems(item, index)}
      />
      <View style={{ marginTop: 50 }}>
        {counter == 0 ? (
          <Text>No Items Added</Text>
        ) : (
          <Text style={{ fontSize: 30, color: "red", fontWeight: 700 }}>
            {counter}
          </Text>
        )}
      </View>
    </View>
  );
};

export default Files;
