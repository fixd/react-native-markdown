import SimpleMarkdown from "simple-markdown";

const textStyle = {
  fontStyle: "italic",
};

export default {
  ...SimpleMarkdown.defaultRules.em,
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
