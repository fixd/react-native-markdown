import React from "react";
import {
  View,
} from "react-native";
import SimpleMarkdown from "simple-markdown";

export default {
  ...SimpleMarkdown.defaultRules.def,
  react() {
    return (
      <View />
    );
  },
};
