import React from "react";
import {
  View,
} from "react-native";

const style = {
  borderColor: "#222222",
  borderBottomWidth: 1,
};

export default {
  react(node, output, state) {
    state.withinText = true;
    return (
      <View key={state.key} style={style}>
        {output(node.content, state)}
      </View>
    );
  },
};
