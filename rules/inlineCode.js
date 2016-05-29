import SimpleMarkdown from "simple-markdown";

const textStyle = {
  fontFamily: "Menlo-Regular",
};

export default {
  ...SimpleMarkdown.defaultRules.inlineCode,
  react(node, output, state) {
    const newState = {
      ...state,
      textStyle: {
        ...state.textStyle,
        ...textStyle,
      },
    };

    return output({
      content: node.content,
      type: "text",
    }, newState);
  },
};
