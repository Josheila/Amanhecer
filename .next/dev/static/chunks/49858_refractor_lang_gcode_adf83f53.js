(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/gcode.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = gcode;
gcode.displayName = 'gcode';
gcode.aliases = [];
function gcode(Prism) {
    Prism.languages.gcode = {
        comment: /;.*|\B\(.*?\)\B/,
        string: {
            pattern: /"(?:""|[^"])*"/,
            greedy: true
        },
        keyword: /\b[GM]\d+(?:\.\d+)?\b/,
        property: /\b[A-Z]/,
        checksum: {
            pattern: /(\*)\d+/,
            lookbehind: true,
            alias: 'number'
        },
        // T0:0:0
        punctuation: /[:*]/
    };
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_gcode_adf83f53.js.map