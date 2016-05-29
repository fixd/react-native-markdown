import React from "react";
import {
  View,
} from "react-native";
import SimpleMarkdown from "simple-markdown";

const style = {
  flexDirection: "row",
  flexWrap: "wrap",
  margin: 10,
};

const textStyle = {
  fontFamily: "Menlo-Regular",
};

export default {
  ...SimpleMarkdown.defaultRules.codeBlock,
  react(node, output, state) {
    const newState = {
      ...state,
      textStyle: {
        ...state.textStyle,
        ...textStyle,
      },
    };

    return (
      <View key={state.key} style={style}>
        {output({
          content: node.content,
          type: "text",
        }, newState)}
      </View>
    );
  },
};
