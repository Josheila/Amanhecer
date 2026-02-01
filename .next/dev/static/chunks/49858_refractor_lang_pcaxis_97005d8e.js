(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/pcaxis.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = pcaxis;
pcaxis.displayName = 'pcaxis';
pcaxis.aliases = [
    'px'
];
function pcaxis(Prism) {
    Prism.languages.pcaxis = {
        string: /"[^"]*"/,
        keyword: {
            pattern: /((?:^|;)\s*)[-A-Z\d]+(?:\s*\[[-\w]+\])?(?:\s*\("[^"]*"(?:,\s*"[^"]*")*\))?(?=\s*=)/,
            lookbehind: true,
            greedy: true,
            inside: {
                keyword: /^[-A-Z\d]+/,
                language: {
                    pattern: /^(\s*)\[[-\w]+\]/,
                    lookbehind: true,
                    inside: {
                        punctuation: /^\[|\]$/,
                        property: /[-\w]+/
                    }
                },
                'sub-key': {
                    pattern: /^(\s*)\S[\s\S]*/,
                    lookbehind: true,
                    inside: {
                        parameter: {
                            pattern: /"[^"]*"/,
                            alias: 'property'
                        },
                        punctuation: /^\(|\)$|,/
                    }
                }
            }
        },
        operator: /=/,
        tlist: {
            pattern: /TLIST\s*\(\s*\w+(?:(?:\s*,\s*"[^"]*")+|\s*,\s*"[^"]*"-"[^"]*")?\s*\)/,
            greedy: true,
            inside: {
                function: /^TLIST/,
                property: {
                    pattern: /^(\s*\(\s*)\w+/,
                    lookbehind: true
                },
                string: /"[^"]*"/,
                punctuation: /[(),]/,
                operator: /-/
            }
        },
        punctuation: /[;,]/,
        number: {
            pattern: /(^|\s)\d+(?:\.\d+)?(?!\S)/,
            lookbehind: true
        },
        boolean: /NO|YES/
    };
    Prism.languages.px = Prism.languages.pcaxis;
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_pcaxis_97005d8e.js.map