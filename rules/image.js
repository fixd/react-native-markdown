import React from "react";
import {
  Image,
} from "react-native";
import SimpleMarkdown from "simple-markdown";

const style = {};

export default {
  ...SimpleMarkdown.defaultRules.image,
  react(node, output, state) {
    return (
      <Image
        key={state.key}
        source={{uri: node.target}}
        style={style}
      />
    );
  },
};
