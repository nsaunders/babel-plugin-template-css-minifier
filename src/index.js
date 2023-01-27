import {
  minifyRawValues,
  minifyCookedValues,
} from "babel-plugin-styled-components/lib/minify/index.js";

export default function () {
  return {
    visitor: {
      TemplateLiteral(path) {
        const { leadingComments } = path.node;
        if (leadingComments) {
          const isCSS =
            leadingComments[leadingComments.length - 1].value
              .trim()
              .toLowerCase() === "css";
          if (isCSS) {
            // Borrowed from babel-plugin-styled-components
            // (c) Vladimir Danchenkov and Maximilian Stoiber

            const templateLiteral = path.node;
            const quasisLength = templateLiteral.quasis.length;

            const [rawValuesMinified] = minifyRawValues(
              templateLiteral.quasis.map(x => x.value.raw),
            );

            const [cookedValuesMinfified, eliminatedExpressionIndices] =
              minifyCookedValues(
                templateLiteral.quasis.map(x => x.value.cooked),
              );

            eliminatedExpressionIndices.forEach(
              (expressionIndex, iteration) => {
                templateLiteral.expressions.splice(
                  expressionIndex - iteration,
                  1,
                );
              },
            );

            for (let i = 0; i < quasisLength; i++) {
              const element = templateLiteral.quasis[i];

              element.value.raw = rawValuesMinified[i];
              element.value.cooked = cookedValuesMinfified[i];
            }
          }
        }
      },
    },
  };
}
