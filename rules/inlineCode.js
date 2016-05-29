import React from "react";
import {
  View,
} from "react-native";
import SimpleMarkdown from "simple-markdown";

const style = {
  backgroundColor: "#eeeeee",
  borderColor: "#dddddd",
  borderRadius: 3,
  borderWidth: 1,
};
const textStyle = {
  fontFamily: "Courier",
  fontWeight: "bold",
};

export default {
  ...SimpleMarkdown.defaultRules.inlineCode,
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
