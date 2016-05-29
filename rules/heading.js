import React from "react";
import {
  View,
} from "react-native";
import SimpleMarkdown from "simple-markdown";

const style = {
  marginTop: 10,
  flexDirection: "row",
  flexWrap: "wrap",
};

const textStyle = {
  1: {
    fontSize: 18,
    fontWeight: "bold",
  },
  2: {
    fontSize: 17,
    fontWeight: "bold",
  },
  3: {
    fontSize: 16,
    fontWeight: "bold",
  },
  4: {
    fontSize: 15,
    fontWeight: "bold",
  },
};

export default {
  ...SimpleMarkdown.defaultRules.heading,
  react(node, output, state) {
    const newState = {
      ...state,
      textStyle: {
        ...state.textStyle,
        ...textStyle[node.level],
      },
    };
    return (
      <View key={state.key} style={style}>
        {output(node.content, newState)}
      </View>
    );
  },
};
