import React from "react";
import {
  View,
} from "react-native";
import SimpleMarkdown from "simple-markdown";

const style = {
  marginLeft: 3,
  paddingLeft: 3,
  borderWidth: 1,
};

export default {
  ...SimpleMarkdown.defaultRules.blockQuote,
  react(node, output, state) {
    return (
      <View key={state.key} style={style}>
        {output(node.content, state)}
      </View>
    );
  },
};
