import React from "react";
import {
  Text,
} from "react-native";

const style = {
  backgroundColor: "#eeeeee",
  borderColor: "#dddddd",
  borderRadius: 3,
  borderWidth: 1,
  fontFamily: "Courier",
  fontWeight: "bold",
};

export default {
  react(node, output, state) {
    state.withinText = true;
    return (
      <Text key={state.key} style={style}>
        {output(node.content, state)}
      </Text>
    );
  },
};
