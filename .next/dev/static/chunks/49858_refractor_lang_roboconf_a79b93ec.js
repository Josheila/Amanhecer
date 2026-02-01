(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/roboconf.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = roboconf;
roboconf.displayName = 'roboconf';
roboconf.aliases = [];
function roboconf(Prism) {
    Prism.languages.roboconf = {
        comment: /#.*/,
        keyword: {
            pattern: /(^|\s)(?:(?:external|import)\b|(?:facet|instance of)(?=[ \t]+[\w-]+[ \t]*\{))/,
            lookbehind: true
        },
        component: {
            pattern: /[\w-]+(?=[ \t]*\{)/,
            alias: 'variable'
        },
        property: /[\w.-]+(?=[ \t]*:)/,
        value: {
            pattern: /(=[ \t]*(?![ \t]))[^,;]+/,
            lookbehind: true,
            alias: 'attr-value'
        },
        optional: {
            pattern: /\(optional\)/,
            alias: 'builtin'
        },
        wildcard: {
            pattern: /(\.)\*/,
            lookbehind: true,
            alias: 'operator'
        },
        punctuation: /[{},.;:=]/
    };
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_roboconf_a79b93ec.js.map