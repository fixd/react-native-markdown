import React from "react";
import {
  Text,
} from "react-native";
import SimpleMarkdown from "simple-markdown";

const style = {

};

export default {
  ...SimpleMarkdown.defaultRules.newline,
  react(node, output, state) {
    return (
      <Text key={state.key} style={[style, state.textStyle]}>
        {"\n"}
      </Text>
    );
  },
};
