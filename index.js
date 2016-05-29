import React, { Component } from "react";
import {
  View,
} from "react-native";
import SimpleMarkdown from "simple-markdown";
import rules from "./rules";

function collapseConsecutiveTextNodes(nodes) {
  let collapsedNodes = [];
  let previousText = "";

  for (const node of nodes) {
    if (node.type === "text") {
      previousText += node.content;
    } else if (typeof node.content === "object" && node.content.length) {
      if (previousText.length) {
        collapsedNodes.push({
          content: previousText,
          type: "text",
        });
        previousText = "";
      }
      const collapsedNode = {
        ...node,
        content: collapseConsecutiveTextNodes(node.content),
      };
      collapsedNodes.push(collapsedNode);
    } else {
      if (previousText.length) {
        collapsedNodes.push({
          content: previousText,
          type: "text",
        });
        previousText = "";
      }
      collapsedNodes.push(node);
    }
  }

  if (previousText.length) {
    collapsedNodes.push({
      content: previousText,
      type: "text",
    });
  }

  return collapsedNodes;
}

const style = {
  flexDirection: "column",
};

class Markdown extends Component {
  componentWillMount() {
    this.parser = SimpleMarkdown.parserFor({...SimpleMarkdown.defaultRules, ...rules});
    this.renderer = SimpleMarkdown.reactFor(SimpleMarkdown.ruleOutput(rules, "react"));
  }

  render() {
    const tree = this.parser(`${this.props.text}\n\n`, {inline: false});
    const collapsedTree = collapseConsecutiveTextNodes(tree);
    return <View style={style}>{this.renderer(collapsedTree)}</View>;
  }
}

Markdown.propTypes = {
  text: React.PropTypes.string,
};

export default Markdown;
