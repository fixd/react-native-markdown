import React from "react";
import {
  Text,
} from "react-native";
import SimpleMarkdown, {
  anyScopeRegex,
} from "simple-markdown";

export default {
  ...SimpleMarkdown.defaultRules.newline,
  match: anyScopeRegex(/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/),
  react(node, output, state) {
    return <Text key={state.key}>{"\n"}</Text>;
  },
};
