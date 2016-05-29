import React from "react";
import {
  Text,
  View,
} from "react-native";
import SimpleMarkdown from "simple-markdown";

const numberStyle = {
  fontWeight: "bold",
};

const bulletStyle = {
  fontSize: 20,
  lineHeight: 20,
};

const itemStyle = {
  flexDirection: "row",
};

const style = {};

function renderBullet(number, inheritedStyle) {
  if (number) {
    return <Text style={[numberStyle, inheritedStyle]}>{number + 1}{". "}</Text>;
  }
  else {
    return <Text style={[bulletStyle, inheritedStyle]}>{"\u2022  "}</Text>;
  }
}

function renderItems(node, output, state) {
  return node.items.map(function(item, i) {
    return (
      <View key={i} style={itemStyle}>
        {renderBullet(node.ordered && i, state.textStyle)}
        {output(item, state)}
      </View>
    );
  });
}

export default {
  ...SimpleMarkdown.defaultRules.list,
  react(node, output, state) {
    return (
      <View key={state.key} style={style}>
        {renderItems(node, output, state)}
      </View>
    );
  },
};
