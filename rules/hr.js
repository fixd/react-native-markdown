import React from "react";
import {
  View,
} from "react-native";
import SimpleMarkdown from "simple-markdown";

const style = {
  backgroundColor: "#cccccc",
  height: 1,
};

export default {
  ...SimpleMarkdown.defaultRules.hr,
  react(node, output, state) {
    return <View key={state.key} style={style} />;
  },
};
