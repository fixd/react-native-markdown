import React from "react";
import {
  Text,
} from "react-native";
import SimpleMarkdown from "simple-markdown";

const style = {
  fontFamily: "Courier",
  fontWeight: "500",
};

export default {
  ...SimpleMarkdown.defaultRules.codeBlock,
  react(node, output, state) {
    state.withinText = true;
    return (
      <Text key={state.key} style={style}>
        {node.content}
      </Text>
    );
  },
};
