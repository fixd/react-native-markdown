import React from "react";
import {
  Text,
} from "react-native";
import SimpleMarkdown from "simple-markdown";

const style = {
  fontWeight: "bold",
};

export default {
  ...SimpleMarkdown.defaultRules.strong,
  react(node, output, state) {
    state.withinText = true;
    return (
      <Text key={state.key} style={style}>
        {output(node.content, state)}
      </Text>
    );
  },
};
