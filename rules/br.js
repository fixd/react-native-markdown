import SimpleMarkdown from "simple-markdown";
export default {
  ...SimpleMarkdown.defaultRules.br,
  react(node, output, state) {
    return output({
      content: "\n",
      type: "text",
    }, state);
  },
};
