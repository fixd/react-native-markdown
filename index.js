import React, { Component } from "react";
import {
  View,
} from "react-native";
import _ from "lodash";
import SimpleMarkdown from "simple-markdown";
import rules from "./rules";

class Markdown extends Component {
  componentWillMount() {
    this.parser = SimpleMarkdown.parserFor({...SimpleMarkdown.defaultRules, ...rules});
    this.renderer = SimpleMarkdown.reactFor(SimpleMarkdown.ruleOutput(rules, "react"));
  }

  render() {
    const child = _.isArray(this.props.children)
      ? this.props.children.join("") : this.props.children;
    const tree = this.parser(`${child}\n\n`, {inline: false});
    return <View>{this.renderer(tree)}</View>;
  }
}

Markdown.propTypes = {
  children: React.PropTypes.node,
};

export default Markdown;
