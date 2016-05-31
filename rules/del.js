import SimpleMarkdown from "simple-markdown";

const textStyle = {
  textDecorationLine: "line-through",
  textDecorationStyle: "solid",
};

export default {
  ...SimpleMarkdown.defaultRules.del,
  react(node, output, state) {
    // TODO: line-through and underline
    const newState = {
      ...state,
      textStyle: {
        ...state.textStyle,
        ...textStyle,
      },
    };

    return output(node.content, newState)[0];
  },
};
