(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/nasm.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = nasm;
nasm.displayName = 'nasm';
nasm.aliases = [];
function nasm(Prism) {
    Prism.languages.nasm = {
        comment: /;.*$/m,
        string: /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,
        label: {
            pattern: /(^\s*)[A-Za-z._?$][\w.?$@~#]*:/m,
            lookbehind: true,
            alias: 'function'
        },
        keyword: [
            /\[?BITS (?:16|32|64)\]?/,
            {
                pattern: /(^\s*)section\s*[a-z.]+:?/im,
                lookbehind: true
            },
            /(?:extern|global)[^;\r\n]*/i,
            /(?:CPU|DEFAULT|FLOAT).*$/m
        ],
        register: {
            pattern: /\b(?:st\d|[xyz]mm\d\d?|[cdt]r\d|r\d\d?[bwd]?|[er]?[abcd]x|[abcd][hl]|[er]?(?:bp|di|si|sp)|[cdefgs]s)\b/i,
            alias: 'variable'
        },
        number: /(?:\b|(?=\$))(?:0[hx](?:\.[\da-f]+|[\da-f]+(?:\.[\da-f]+)?)(?:p[+-]?\d+)?|\d[\da-f]+[hx]|\$\d[\da-f]*|0[oq][0-7]+|[0-7]+[oq]|0[by][01]+|[01]+[by]|0[dt]\d+|(?:\d+(?:\.\d+)?|\.\d+)(?:\.?e[+-]?\d+)?[dt]?)\b/i,
        operator: /[\[\]*+\-\/%<>=&|$!]/
    };
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_nasm_3148bf9c.js.map