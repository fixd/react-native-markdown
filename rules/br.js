import React from "react";
import {
  Text,
} from "react-native";
import SimpleMarkdown from "simple-markdown";

const style = {};

export default {
  ...SimpleMarkdown.defaultRules.br,
  react(node, output, state) {
    return (
      <Text
        style={style}
        key={state.key}
      >
        {"\n"}
      </Text>
    );
  },
};
