(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/jexl.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = jexl;
jexl.displayName = 'jexl';
jexl.aliases = [];
function jexl(Prism) {
    Prism.languages.jexl = {
        string: /(["'])(?:\\[\s\S]|(?!\1)[^\\])*\1/,
        transform: {
            pattern: /(\|\s*)[a-zA-Zа-яА-Я_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$][\wа-яА-Я\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$]*/,
            alias: 'function',
            lookbehind: true
        },
        function: /[a-zA-Zа-яА-Я_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$][\wа-яА-Я\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$]*\s*(?=\()/,
        number: /\b\d+(?:\.\d+)?\b|\B\.\d+\b/,
        operator: /[<>!]=?|-|\+|&&|==|\|\|?|\/\/?|[?:*^%]/,
        boolean: /\b(?:false|true)\b/,
        keyword: /\bin\b/,
        punctuation: /[{}[\](),.]/
    };
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_jexl_ec975044.js.map