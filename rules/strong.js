import SimpleMarkdown from "simple-markdown";

const textStyle = {
  fontWeight: "bold",
};

export default {
  ...SimpleMarkdown.defaultRules.strong,
  react(node, output, state) {
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
