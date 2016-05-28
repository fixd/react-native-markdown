import React from "react";
import {
  Text,
  View,
} from "react-native";

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

export default {
  react(node, output, state) {

    var items = node.items.map(function(item, i) {
      var bullet;
      if (node.ordered) {
        bullet = React.createElement(Text, { style: numberStyle }, (i + 1) + ". ");
      }
      else {
        bullet = React.createElement(Text, { style: bulletStyle }, "\u2022 ");
      }
      return React.createElement(View, {
        key: i,
        style: itemStyle,
      }, [bullet, output(item, state)]);
    });

    return React.createElement(View, { key: state.key, style: style }, items);
  },
};
