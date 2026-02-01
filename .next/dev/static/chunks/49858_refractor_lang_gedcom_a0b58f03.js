(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/gedcom.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = gedcom;
gedcom.displayName = 'gedcom';
gedcom.aliases = [];
function gedcom(Prism) {
    Prism.languages.gedcom = {
        'line-value': {
            // Preceded by level, optional pointer, and tag
            pattern: /(^[\t ]*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?\w+ ).+/m,
            lookbehind: true,
            inside: {
                pointer: {
                    pattern: /^@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@$/,
                    alias: 'variable'
                }
            }
        },
        tag: {
            // Preceded by level and optional pointer
            pattern: /(^[\t ]*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?)\w+/m,
            lookbehind: true,
            alias: 'string'
        },
        level: {
            pattern: /(^[\t ]*)\d+/m,
            lookbehind: true,
            alias: 'number'
        },
        pointer: {
            pattern: /@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@/,
            alias: 'variable'
        }
    };
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_gedcom_a0b58f03.js.map