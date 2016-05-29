import React from "react";
import {
  View,
} from "react-native";
import SimpleMarkdown from "simple-markdown";

const style = {};
const textStyle = {
  fontWeight: "bold",
};

export default {
  ...SimpleMarkdown.defaultRules.strong,
  react(node, output, state) {
    state.textStyle = {
      ...state.textStyle,
      ...textStyle,
    };
    return (
      <View key={state.key} style={style}>
        {output(node.content, state)}
      </View>
    );
  },
};
