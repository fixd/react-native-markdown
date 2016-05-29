import React from "react";
import {
  View,
} from "react-native";
import SimpleMarkdown from "simple-markdown";

const style = {
  borderColor: "#222222",
  borderBottomWidth: 1,
};

export default {
  ...SimpleMarkdown.defaultRules.u,
  react(node, output, state) {
    state.withinText = true;
    return (
      <View key={state.key} style={style}>
        {output(node.content, state)}
      </View>
    );
  },
};
