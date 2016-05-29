import React from "react";
import {
  Text,
} from "react-native";
import SimpleMarkdown from "simple-markdown";

const style = {
  containerBackgroundColor: "#222222",
};

export default {
  ...SimpleMarkdown.defaultRules.del,
  react(node, output, state) {
    state.withinText = true;
    return (
      <Text key={state.key} style={style}>
        {output(node.content, state)}
      </Text>
    );
  },
};
