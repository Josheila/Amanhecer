(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/bbcode.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = bbcode;
bbcode.displayName = 'bbcode';
bbcode.aliases = [
    'shortcode'
];
function bbcode(Prism) {
    Prism.languages.bbcode = {
        tag: {
            pattern: /\[\/?[^\s=\]]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))?(?:\s+[^\s=\]]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))*\s*\]/,
            inside: {
                tag: {
                    pattern: /^\[\/?[^\s=\]]+/,
                    inside: {
                        punctuation: /^\[\/?/
                    }
                },
                'attr-value': {
                    pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+)/,
                    inside: {
                        punctuation: [
                            /^=/,
                            {
                                pattern: /^(\s*)["']|["']$/,
                                lookbehind: true
                            }
                        ]
                    }
                },
                punctuation: /\]/,
                'attr-name': /[^\s=\]]+/
            }
        }
    };
    Prism.languages.shortcode = Prism.languages.bbcode;
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_bbcode_77a436ae.js.map