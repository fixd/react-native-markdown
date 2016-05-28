import React from "react";
import {
  Text,
} from "react-native";

const style = {

};

export default {
  react(node, output, state) {
    return React.createElement(Text, {
      key: state.key,
      style: style,
    }, "\n");
  },
};
