(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/ebnf.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = ebnf;
ebnf.displayName = 'ebnf';
ebnf.aliases = [];
function ebnf(Prism) {
    Prism.languages.ebnf = {
        comment: /\(\*[\s\S]*?\*\)/,
        string: {
            pattern: /"[^"\r\n]*"|'[^'\r\n]*'/,
            greedy: true
        },
        special: {
            pattern: /\?[^?\r\n]*\?/,
            greedy: true,
            alias: 'class-name'
        },
        definition: {
            pattern: /^([\t ]*)[a-z]\w*(?:[ \t]+[a-z]\w*)*(?=\s*=)/im,
            lookbehind: true,
            alias: [
                'rule',
                'keyword'
            ]
        },
        rule: /\b[a-z]\w*(?:[ \t]+[a-z]\w*)*\b/i,
        punctuation: /\([:/]|[:/]\)|[.,;()[\]{}]/,
        operator: /[-=|*/!]/
    };
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_ebnf_e2b74fbe.js.map