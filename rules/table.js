import React from "react";
import {
  Text,
  View,
} from "react-native";

const headerCellStyle = {
  color: "#ffffff",
  fontWeight: "bold",
  padding: 5,
};

const headerRowStyle = {
  backgroundColor: "#222222",
  flexDirection: "row",
  justifyContent: "space-around",
};

const cellStyle = {
  padding: 5,
};

const rowStyle = {
  borderBottomWidth: 1,
  borderColor: "#222222",
  flexDirection: "row",
  justifyContent: "space-around",
};

const lastRowStyle = {
  borderColor: "transparent",
};

const style = {
  borderWidth: 1,
  borderColor: "#222222",
  borderRadius: 3,
};

export default {
  react(node, output, state) {
    var headers = node.header.map(function(content) {
      return React.createElement(Text, {
        style: headerCellStyle,
      }, output(content, state));
    });

    var header = React.createElement(View, { style: headerRowStyle }, headers);

    var rows = node.cells.map(function(row, r) {
      var cells = row.map(function(content, c) {
        return React.createElement(View, {
          key: c,
          style: cellStyle,
        }, output(content, state));
      });
      var rowStyles = [rowStyle];
      if (node.cells.length - 1 == r) {
        rowStyles.push(lastRowStyle);
      }
      return React.createElement(View, { key: r, style: rowStyles }, cells);
    });

    return React.createElement(View, { key: state.key, style: style }, [ header, rows ]);
  },
};
