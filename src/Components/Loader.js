import { View, Text, ActivityIndicator } from "react-native";
import React from "react";

export default Loader = ({ visible }) => {
  return (
    <>
      {visible ? (
        <ActivityIndicator
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            backgroundColor: "#00000099",
            alignSelf: "center",
          }}
          color="red"
          size={"large"}
        />
      ) : null}
    </>
  );
};
