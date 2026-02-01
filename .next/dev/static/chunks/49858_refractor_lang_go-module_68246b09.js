(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/go-module.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = goModule;
goModule.displayName = 'goModule';
goModule.aliases = [];
function goModule(Prism) {
    // https://go.dev/ref/mod#go-mod-file-module
    Prism.languages['go-mod'] = Prism.languages['go-module'] = {
        comment: {
            pattern: /\/\/.*/,
            greedy: true
        },
        version: {
            pattern: /(^|[\s()[\],])v\d+\.\d+\.\d+(?:[+-][-+.\w]*)?(?![^\s()[\],])/,
            lookbehind: true,
            alias: 'number'
        },
        'go-version': {
            pattern: /((?:^|\s)go\s+)\d+(?:\.\d+){1,2}/,
            lookbehind: true,
            alias: 'number'
        },
        keyword: {
            pattern: /^([ \t]*)(?:exclude|go|module|replace|require|retract)\b/m,
            lookbehind: true
        },
        operator: /=>/,
        punctuation: /[()[\],]/
    };
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_go-module_68246b09.js.map