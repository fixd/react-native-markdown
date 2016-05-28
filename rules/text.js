import React from "react";
import {
  Text,
  View,
} from "react-native";

const style = {
  color: "#222222",
};

export default {
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
