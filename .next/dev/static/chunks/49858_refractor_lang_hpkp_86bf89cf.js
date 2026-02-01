(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/hpkp.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = hpkp;
hpkp.displayName = 'hpkp';
hpkp.aliases = [];
function hpkp(Prism) {
    /**
   * Original by Scott Helme.
   *
   * Reference: https://scotthelme.co.uk/hpkp-cheat-sheet/
   */ Prism.languages.hpkp = {
        directive: {
            pattern: /\b(?:includeSubDomains|max-age|pin-sha256|preload|report-to|report-uri|strict)(?=[\s;=]|$)/i,
            alias: 'property'
        },
        operator: /=/,
        punctuation: /;/
    };
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_hpkp_86bf89cf.js.map