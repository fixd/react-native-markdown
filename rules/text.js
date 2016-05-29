import React from "react";
import {
  Text,
  View,
} from "react-native";
import SimpleMarkdown from "simple-markdown";

const style = {
  color: "#222222",
};

export default {
  ...SimpleMarkdown.defaultRules.text,
  react(node) {
    return (
      <View>
        <Text style={style}>
          {node.content}
        </Text>
      </View>
    );
  },
};
