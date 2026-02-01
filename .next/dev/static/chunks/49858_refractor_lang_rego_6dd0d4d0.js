(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/rego.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = rego;
rego.displayName = 'rego';
rego.aliases = [];
function rego(Prism) {
    // https://www.openpolicyagent.org/docs/latest/policy-reference/
    Prism.languages.rego = {
        comment: /#.*/,
        property: {
            pattern: /(^|[^\\.])(?:"(?:\\.|[^\\"\r\n])*"|`[^`]*`|\b[a-z_]\w*\b)(?=\s*:(?!=))/i,
            lookbehind: true,
            greedy: true
        },
        string: {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"|`[^`]*`/,
            lookbehind: true,
            greedy: true
        },
        keyword: /\b(?:as|default|else|import|not|null|package|set(?=\s*\()|some|with)\b/,
        boolean: /\b(?:false|true)\b/,
        function: {
            pattern: /\b[a-z_]\w*\b(?:\s*\.\s*\b[a-z_]\w*\b)*(?=\s*\()/i,
            inside: {
                namespace: /\b\w+\b(?=\s*\.)/,
                punctuation: /\./
            }
        },
        number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
        operator: /[-+*/%|&]|[<>:=]=?|!=|\b_\b/,
        punctuation: /[,;.\[\]{}()]/
    };
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_rego_6dd0d4d0.js.map