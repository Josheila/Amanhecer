(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/editorconfig.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = editorconfig;
editorconfig.displayName = 'editorconfig';
editorconfig.aliases = [];
function editorconfig(Prism) {
    Prism.languages.editorconfig = {
        // https://editorconfig-specification.readthedocs.io
        comment: /[;#].*/,
        section: {
            pattern: /(^[ \t]*)\[.+\]/m,
            lookbehind: true,
            alias: 'selector',
            inside: {
                regex: /\\\\[\[\]{},!?.*]/,
                // Escape special characters with '\\'
                operator: /[!?]|\.\.|\*{1,2}/,
                punctuation: /[\[\]{},]/
            }
        },
        key: {
            pattern: /(^[ \t]*)[^\s=]+(?=[ \t]*=)/m,
            lookbehind: true,
            alias: 'attr-name'
        },
        value: {
            pattern: /=.*/,
            alias: 'attr-value',
            inside: {
                punctuation: /^=/
            }
        }
    };
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_editorconfig_a183a02a.js.map