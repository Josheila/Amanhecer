(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/hsts.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = hsts;
hsts.displayName = 'hsts';
hsts.aliases = [];
function hsts(Prism) {
    /**
   * Original by Scott Helme.
   *
   * Reference: https://scotthelme.co.uk/hsts-cheat-sheet/
   */ Prism.languages.hsts = {
        directive: {
            pattern: /\b(?:includeSubDomains|max-age|preload)(?=[\s;=]|$)/i,
            alias: 'property'
        },
        operator: /=/,
        punctuation: /;/
    };
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_hsts_f414a934.js.map