(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/ignore.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = ignore;
ignore.displayName = 'ignore';
ignore.aliases = [
    'gitignore',
    'hgignore',
    'npmignore'
];
function ignore(Prism) {
    ;
    (function(Prism) {
        Prism.languages.ignore = {
            // https://git-scm.com/docs/gitignore
            comment: /^#.*/m,
            entry: {
                pattern: /\S(?:.*(?:(?:\\ )|\S))?/,
                alias: 'string',
                inside: {
                    operator: /^!|\*\*?|\?/,
                    regex: {
                        pattern: /(^|[^\\])\[[^\[\]]*\]/,
                        lookbehind: true
                    },
                    punctuation: /\//
                }
            }
        };
        Prism.languages.gitignore = Prism.languages.ignore;
        Prism.languages.hgignore = Prism.languages.ignore;
        Prism.languages.npmignore = Prism.languages.ignore;
    })(Prism);
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_ignore_f97a81ba.js.map