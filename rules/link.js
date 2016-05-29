import React from "react";
import {
  TouchableOpacity,
} from "react-native";
import SimpleMarkdown from "simple-markdown";

const style = {
  flexDirection: "row",
  flexWrap: "wrap",
};

const textStyle = {
  color: "#0000FF",
  textDecorationLine: "underline",
  textDecorationStyle: "solid",
};

export default {
  ...SimpleMarkdown.defaultRules.link,
  react(node, output, state) {
    const newState = {
      ...state,
      textStyle: {
        ...state.textStyle,
        ...textStyle,
      },
      noWrap: true,
    };

    return (
      <TouchableOpacity style={style} key={state.key}>
        {output(node.content, newState)}
      </TouchableOpacity>
    );
  },
};
