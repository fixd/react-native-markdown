import React, { Component } from "react";
import {
  View,
} from "react-native";
import _ from "lodash";
import SimpleMarkdown from "simple-markdown";

class Markdown extends Component {
  componentWillMount() {
    var rules = require("./rules");
    rules = _.merge({}, SimpleMarkdown.defaultRules, rules);

    var parser = SimpleMarkdown.parserFor(rules);
    this.parse = function(source) {
      var blockSource = source + "\n\n";
      return parser(blockSource, {inline: false});
    };
    this.renderer = SimpleMarkdown.reactFor(SimpleMarkdown.ruleOutput(rules, "react"));
  }

  render() {
    var child = _.isArray(this.props.children)
      ? this.props.children.join("") : this.props.children;
    var tree = this.parse(child);
    return <View>{this.renderer(tree)}</View>;
  }
}

Markdown.propTypes = {
  children: React.PropTypes.node,
};

export default Markdown;
