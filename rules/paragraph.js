import React from "react";
import {
  View,
} from "react-native";
import SimpleMarkdown from "simple-markdown";

const style = {
  marginTop: 10,
  marginBottom: 10,
  flexWrap: "wrap",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "flex-start",
};

export default {
  ...SimpleMarkdown.defaultRules.paragraph,
  react(node, output, state) {
    return (
      <View key={state.key} style={style}>
        {output(node.content, state)}
      </View>
    );
  },
};
