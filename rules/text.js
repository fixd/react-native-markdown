import React from "react";
import {
  Text,
} from "react-native";
import SimpleMarkdown from "simple-markdown";

export default {
  ...SimpleMarkdown.defaultRules.text,
  react(node, output, state) {
    const text = node.content.
      replace(/\n/g, " ").
      replace(/ /g, "\u00A0");
    const words = text.split(/\b(?![ \u00A0])/);
    return words.map((word, i) => {
      const key = `${state.key}::${i}`;
      if (state.link && state.onLinkPress) {
        return (
          <Text
            key={key}
            style={state.textStyle}
            onPress={() => state.onLinkPress(state.link)}
          >
            {word}
          </Text>
        );
      } else {
        return (
          <Text key={key} style={state.textStyle}>
            {word}
          </Text>
        );
      }
    });
  },
};
