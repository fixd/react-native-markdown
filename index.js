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
  flexWrap: "wrap",
};

class Markdown extends Component {

	constructor(props) {
		super(props);
	    this.parser = SimpleMarkdown.parserFor({...SimpleMarkdown.defaultRules, ...rules});
	    this.renderer = SimpleMarkdown.reactFor(SimpleMarkdown.ruleOutput(rules, "react"));
	}

  render() {
    const tree = this.parser(`${this.props.text}\n\n`, null, {
      inline: false,
    });
    const collapsedTree = collapseConsecutiveTextNodes(tree);
    const renderedElements = this.renderer(collapsedTree, {
      onLinkPress: this.props.onLinkPress,
	    textStyle: Object.assign({}, { fontSize: 14, lineHeight: 19, fontWeight: "100" }, this.props.textStyle),
    });
    return <View style={style}>{renderedElements}</View>;
  }
}

Markdown.propTypes = {
	textStyle: React.PropTypes.object,
  text: React.PropTypes.string,
  onLinkPress: React.PropTypes.func,
};

module.exports = Markdown
