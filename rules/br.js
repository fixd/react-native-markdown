import React from "react";
import {
  Text,
} from "react-native";

const style = {};

export default {
  react(node, output, state) {
    return (
      <Text
        style={style}
        key={state.key}
      >
        {"\n"}
      </Text>
    );
  },
};
