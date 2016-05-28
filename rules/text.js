import React from "react";
import {
  Text,
} from "react-native";

const plainTextStyle = {};

const textStyle = {
  color: "#222222",
};

export default {
  react(node, output, state) {
        // Breaking words up in order to allow for text reflowing in flexbox
    var words = node.content.split(" ");
    words = words.map(function(word, i) {
      if (i != words.length - 1) {
        word = word + " ";
      }
      var textStyles = [textStyle];
      if (!state.withinText) {
        textStyles.push(plainTextStyle);
      }
      return React.createElement(Text, {
        style: textStyles,
      }, word);
    });
    return words;
  },
};
