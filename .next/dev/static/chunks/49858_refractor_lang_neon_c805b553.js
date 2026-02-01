(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/neon.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = neon;
neon.displayName = 'neon';
neon.aliases = [];
function neon(Prism) {
    Prism.languages.neon = {
        comment: {
            pattern: /#.*/,
            greedy: true
        },
        datetime: {
            pattern: /(^|[[{(=:,\s])\d\d\d\d-\d\d?-\d\d?(?:(?:[Tt]| +)\d\d?:\d\d:\d\d(?:\.\d*)? *(?:Z|[-+]\d\d?(?::?\d\d)?)?)?(?=$|[\]}),\s])/,
            lookbehind: true,
            alias: 'number'
        },
        key: {
            pattern: /(^|[[{(,\s])[^,:=[\]{}()'"\s]+(?=\s*:(?:$|[\]}),\s])|\s*=)/,
            lookbehind: true,
            alias: 'atrule'
        },
        number: {
            pattern: /(^|[[{(=:,\s])[+-]?(?:0x[\da-fA-F]+|0o[0-7]+|0b[01]+|(?:\d+(?:\.\d*)?|\.?\d+)(?:[eE][+-]?\d+)?)(?=$|[\]}),:=\s])/,
            lookbehind: true
        },
        boolean: {
            pattern: /(^|[[{(=:,\s])(?:false|no|true|yes)(?=$|[\]}),:=\s])/i,
            lookbehind: true
        },
        null: {
            pattern: /(^|[[{(=:,\s])(?:null)(?=$|[\]}),:=\s])/i,
            lookbehind: true,
            alias: 'keyword'
        },
        string: {
            pattern: /(^|[[{(=:,\s])(?:('''|""")\r?\n(?:(?:[^\r\n]|\r?\n(?![\t ]*\2))*\r?\n)?[\t ]*\2|'[^'\r\n]*'|"(?:\\.|[^\\"\r\n])*")/,
            lookbehind: true,
            greedy: true
        },
        literal: {
            pattern: /(^|[[{(=:,\s])(?:[^#"',:=[\]{}()\s`-]|[:-][^"',=[\]{}()\s])(?:[^,:=\]})(\s]|:(?![\s,\]})]|$)|[ \t]+[^#,:=\]})(\s])*/,
            lookbehind: true,
            alias: 'string'
        },
        punctuation: /[,:=[\]{}()-]/
    };
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_neon_c805b553.js.map