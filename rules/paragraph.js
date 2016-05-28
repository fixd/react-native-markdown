import React from "react";
import {
  View,
} from "react-native";

const style = {
  marginTop: 10,
  marginBottom: 10,
  flexWrap: "wrap",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "flex-start",
};

export default {
  react(node, output, state) {
    return React.createElement(View, {
      key: state.key,
      style: style,
    }, output(node.content, state));
  },
};
