import React from "react";
import {
  View,
} from "react-native";
import SimpleMarkdown from "simple-markdown";

const style = {
  marginTop: 10,
  marginBottom: 10,
  marginLeft: 5,
  paddingLeft: 5,
  borderLeftWidth: 5,
  borderColor: "#B3B3B3",
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
