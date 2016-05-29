import React from "react";
import {
  View,
} from "react-native";
import SimpleMarkdown from "simple-markdown";

const style = {};

const textStyle = {
  textDecorationLine: "line-through",
  textDecorationStyle: "solid",
};

export default {
  ...SimpleMarkdown.defaultRules.del,
  react(node, output, state) {
    // TODO: line-through and underline
    const newState = {
      ...state,
      textStyle: {
        ...state.textStyle,
        ...textStyle,
      },
    };

    return (
      <View key={state.key} style={style}>
        {output(node.content, newState)[0]}
      </View>
    );
  },
};
