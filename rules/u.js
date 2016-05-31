import SimpleMarkdown from "simple-markdown";

const textStyle = {
  textDecorationLine: "underline",
  textDecorationStyle: "solid",
  marginLeft: -1,
};

export default {
  ...SimpleMarkdown.defaultRules.u,
  react(node, output, state) {
    // TODO: line-through and underline
    const newState = {
      ...state,
      textStyle: {
        ...state.textStyle,
        ...textStyle,
      },
    };
    return output(node.content, newState);
  },
};
