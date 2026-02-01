(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/arff.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = arff;
arff.displayName = 'arff';
arff.aliases = [];
function arff(Prism) {
    Prism.languages.arff = {
        comment: /%.*/,
        string: {
            pattern: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
            greedy: true
        },
        keyword: /@(?:attribute|data|end|relation)\b/i,
        number: /\b\d+(?:\.\d+)?\b/,
        punctuation: /[{},]/
    };
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_arff_d872c348.js.map