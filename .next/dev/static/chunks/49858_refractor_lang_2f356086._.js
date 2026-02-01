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
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/json5.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var refractorJson = __turbopack_context__.r("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/json.js [client] (ecmascript)");
module.exports = json5;
json5.displayName = 'json5';
json5.aliases = [];
function json5(Prism) {
    Prism.register(refractorJson);
    (function(Prism) {
        var string = /("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/;
        Prism.languages.json5 = Prism.languages.extend('json', {
            property: [
                {
                    pattern: RegExp(string.source + '(?=\\s*:)'),
                    greedy: true
                },
                {
                    pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/,
                    alias: 'unquoted'
                }
            ],
            string: {
                pattern: string,
                greedy: true
            },
            number: /[+-]?\b(?:NaN|Infinity|0x[a-fA-F\d]+)\b|[+-]?(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+\b)?/
        });
    })(Prism);
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_2f356086._.js.map