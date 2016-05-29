import React from "react";
import {
  View,
} from "react-native";
import SimpleMarkdown from "simple-markdown";

const style = {};

const textStyle = {
  textDecorationLine: "underline",
  textDecorationStyle: "solid",
};

export default {
  ...SimpleMarkdown.defaultRules.u,
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
        {output(node.content, newState)}
      </View>
    );
  },
};
