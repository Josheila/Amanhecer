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
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/jsonp.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var refractorJson = __turbopack_context__.r("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/json.js [client] (ecmascript)");
module.exports = jsonp;
jsonp.displayName = 'jsonp';
jsonp.aliases = [];
function jsonp(Prism) {
    Prism.register(refractorJson);
    Prism.languages.jsonp = Prism.languages.extend('json', {
        punctuation: /[{}[\]();,.]/
    });
    Prism.languages.insertBefore('jsonp', 'punctuation', {
        function: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*\()/
    });
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_b4f83da0._.js.map