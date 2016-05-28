import React from "react";
import {
  Text,
} from "react-native";

const style = {

};

export default {
  react(node, output, state) {
    return (
      <Text key={state.key} style={style}>
        {"\n"}
      </Text>
    );
  },
};
