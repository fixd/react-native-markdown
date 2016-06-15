import React from "react";
import {
  Text,
} from "react-native";
import SimpleMarkdown from "simple-markdown";
import { splitWordsWithPunctuation } from "../util";

const renderWord = (state, word, i) => {
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
};

export default {
  ...SimpleMarkdown.defaultRules.text,
  react(node, output, state) {
    const words = splitWordsWithPunctuation(node.content) || [];
    return words.map((word, i) => renderWord(state, word, i));
  },
};
