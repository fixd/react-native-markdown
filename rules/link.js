import SimpleMarkdown from "simple-markdown";

const textStyle = {
  color: "#0000FF",
  textDecorationLine: "underline",
  textDecorationStyle: "solid",
  marginLeft: -1,
};

export default {
  ...SimpleMarkdown.defaultRules.link,
  react(node, output, state) {
    let newState;
    if (node.target) {
      newState = {
        ...state,
        textStyle: {
          ...state.textStyle,
          ...textStyle,
        },
        link: node.target,
      };
    } else {
      newState = state;
    }

    return output(node.content, newState);
  },
};
