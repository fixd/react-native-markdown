import React from "react";
import {
  Text,
} from "react-native";
import SimpleMarkdown from "simple-markdown";

export default {
  ...SimpleMarkdown.defaultRules.text,
  react(node, output, state) {
    if (state.noWrap) {
      return (
        <Text key={state.key} style={state.textStyle}>
          {node.content}
        </Text>
      );
    } else {
      const words = node.content.split(" ");
      return words.map((word, i) => {
        if (i != words.length - 1) {
          word = word + " ";
        }
        return <Text key={`${state.key}::${i}`} style={state.textStyle}>{word}</Text>;
      });
    }
  },
};
