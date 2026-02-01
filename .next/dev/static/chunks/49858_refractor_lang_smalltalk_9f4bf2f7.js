(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/smalltalk.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = smalltalk;
smalltalk.displayName = 'smalltalk';
smalltalk.aliases = [];
function smalltalk(Prism) {
    Prism.languages.smalltalk = {
        comment: {
            pattern: /"(?:""|[^"])*"/,
            greedy: true
        },
        char: {
            pattern: /\$./,
            greedy: true
        },
        string: {
            pattern: /'(?:''|[^'])*'/,
            greedy: true
        },
        symbol: /#[\da-z]+|#(?:-|([+\/\\*~<>=@%|&?!])\1?)|#(?=\()/i,
        'block-arguments': {
            pattern: /(\[\s*):[^\[|]*\|/,
            lookbehind: true,
            inside: {
                variable: /:[\da-z]+/i,
                punctuation: /\|/
            }
        },
        'temporary-variables': {
            pattern: /\|[^|]+\|/,
            inside: {
                variable: /[\da-z]+/i,
                punctuation: /\|/
            }
        },
        keyword: /\b(?:new|nil|self|super)\b/,
        boolean: /\b(?:false|true)\b/,
        number: [
            /\d+r-?[\dA-Z]+(?:\.[\dA-Z]+)?(?:e-?\d+)?/,
            /\b\d+(?:\.\d+)?(?:e-?\d+)?/
        ],
        operator: /[<=]=?|:=|~[~=]|\/\/?|\\\\|>[>=]?|[!^+\-*&|,@]/,
        punctuation: /[.;:?\[\](){}]/
    };
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_smalltalk_9f4bf2f7.js.map