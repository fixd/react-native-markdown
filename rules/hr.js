import React from "react";
import {
  View,
} from "react-native";

const style = {
  backgroundColor: "#cccccc",
  height: 1,
};

export default {
  react(node, output, state) {
    return React.createElement(View, { key: state.key, style: style });
  },
};
