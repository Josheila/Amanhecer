(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/json.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = json;
json.displayName = 'json';
json.aliases = [
    'webmanifest'
];
function json(Prism) {
    // https://www.json.org/json-en.html
    Prism.languages.json = {
        property: {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
            lookbehind: true,
            greedy: true
        },
        string: {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
            lookbehind: true,
            greedy: true
        },
        comment: {
            pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
            greedy: true
        },
        number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
        punctuation: /[{}[\],]/,
        operator: /:/,
        boolean: /\b(?:false|true)\b/,
        null: {
            pattern: /\bnull\b/,
            alias: 'keyword'
        }
    };
    Prism.languages.webmanifest = Prism.languages.json;
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_json_87797ee3.js.map