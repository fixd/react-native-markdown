import React from "react";
import {
  View,
} from "react-native";
import SimpleMarkdown from "simple-markdown";

const style = {};

export default {
  ...SimpleMarkdown.defaultRules.url,
  react(node, output, state) {
    return (
      <View key={state.key} style={style}>
        {output(node.content, state)}
      </View>
    );
  },
};
