(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/bnf.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = bnf;
bnf.displayName = 'bnf';
bnf.aliases = [
    'rbnf'
];
function bnf(Prism) {
    Prism.languages.bnf = {
        string: {
            pattern: /"[^\r\n"]*"|'[^\r\n']*'/
        },
        definition: {
            pattern: /<[^<>\r\n\t]+>(?=\s*::=)/,
            alias: [
                'rule',
                'keyword'
            ],
            inside: {
                punctuation: /^<|>$/
            }
        },
        rule: {
            pattern: /<[^<>\r\n\t]+>/,
            inside: {
                punctuation: /^<|>$/
            }
        },
        operator: /::=|[|()[\]{}*+?]|\.{3}/
    };
    Prism.languages.rbnf = Prism.languages.bnf;
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_bnf_c2cf95bc.js.map