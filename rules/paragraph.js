import React from "react";
import {
  View,
} from "react-native";
import SimpleMarkdown, { blockRegex } from "simple-markdown";

const style = {
  marginTop: 3,
  marginBottom: 3,
  flexWrap: "wrap",
  flexDirection: "row",
};

export default {
  ...SimpleMarkdown.defaultRules.paragraph,
  match: blockRegex(/^((?:[^\n]|\n(?! *\n| *>))+)(?:\n *)+(?:\n|(?=>))/),
  react(node, output, state) {
    return (
      <View key={state.key} style={style}>
        {output(node.content, state)}
      </View>
    );
  },
};
