import React from "react";
import {
  View,
} from "react-native";
import SimpleMarkdown from "simple-markdown";

const style = {};

export default {
  ...SimpleMarkdown.defaultRules.mailto,
  react(node, output, state) {
    state.withinText = true;
    return (
      <View key={state.key} style={style}>
        {output(node.content, state)}
      </View>
    );
  },
};
