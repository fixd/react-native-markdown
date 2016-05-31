import SimpleMarkdown, {
  inlineRegex,
} from "simple-markdown";

const textStyle = {
  fontStyle: "italic",
};

export default {
  ...SimpleMarkdown.defaultRules.em,
  // Overriding this rule to allow spaces before bold stars.
  match: inlineRegex(
    new RegExp(
      // only match _s surrounding words.
      "^\\b_" +
      "((?:__|\\\\[\\s\\S]|[^\\_])+?)_" +
      "\\b" +
      // Or match *s:
      "|" +
      // Only match *s that are followed by a non-space:
      "^\\*(?=\\S)(" +
      // Match any of:
      //  - `**`: so that bolds inside italics don't close the
      //          italics
      //  - whitespace: if it's not followed by a * (we don't
      //          want ' *' to close an italics--it might
      //          start a list)
      //  - non-whitespace, non-* characters
      "(?:\\s*\\*\\*|\\s+[^\\*\\s]|[^\\s\\*])*?" +
      //  ^^^^ These characters are new
      // followed by a non-space, non-* then *
      "[^\\s\\*])\\*(?!\\*)"
    )
  ),
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
