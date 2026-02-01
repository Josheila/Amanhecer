(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/properties.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = properties;
properties.displayName = 'properties';
properties.aliases = [];
function properties(Prism) {
    Prism.languages.properties = {
        comment: /^[ \t]*[#!].*$/m,
        'attr-value': {
            pattern: /(^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+(?: *[=:] *(?! )| ))(?:\\(?:\r\n|[\s\S])|[^\\\r\n])+/m,
            lookbehind: true
        },
        'attr-name': /^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+(?= *[=:]| )/m,
        punctuation: /[=:]/
    };
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_properties_dd37e457.js.map