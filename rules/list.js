import React from "react";
import {
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
  flexWrap: "wrap",
};

const style = {
  flexDirection: "column",
  marginLeft: 15,
  marginTop: 10,
};

function renderBullet(number, output, state) {
  if (typeof number === "number") {
    const newState = {
      ...state,
      textStyle: {
        ...state.textStyle,
        ...numberStyle,
      },
    };

    return output({
      content: `${number + 1}. `,
      type: "text",
    }, newState);
  }
  else {
    const newState = {
      ...state,
      textStyle: {
        ...state.textStyle,
        ...bulletStyle,
      },
    };

    return output({
      content: "\u2022 ",
      type: "text",
    }, newState);
  }
}

function renderItems(node, output, state) {
  return node.items.map(function(item, i) {
    return (
      <View key={i} style={itemStyle}>
        {renderBullet(node.ordered && i, output, state)}
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
