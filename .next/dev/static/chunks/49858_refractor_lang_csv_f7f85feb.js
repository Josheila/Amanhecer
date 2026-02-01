(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/csv.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = csv;
csv.displayName = 'csv';
csv.aliases = [];
function csv(Prism) {
    // https://tools.ietf.org/html/rfc4180
    Prism.languages.csv = {
        value: /[^\r\n,"]+|"(?:[^"]|"")*"(?!")/,
        punctuation: /,/
    };
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_csv_f7f85feb.js.map