import SimpleMarkdown from "simple-markdown";

export default {
  ...SimpleMarkdown.defaultRules.newline,
  react(node, output, state) {
    return output({
      content: "\n",
      type: "text",
    }, state);
  },
};
