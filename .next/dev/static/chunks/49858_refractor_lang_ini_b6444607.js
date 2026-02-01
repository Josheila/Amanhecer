(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/ini.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = ini;
ini.displayName = 'ini';
ini.aliases = [];
function ini(Prism) {
    Prism.languages.ini = {
        /**
     * The component mimics the behavior of the Win32 API parser.
     *
     * @see {@link https://github.com/PrismJS/prism/issues/2775#issuecomment-787477723}
     */ comment: {
            pattern: /(^[ \f\t\v]*)[#;][^\n\r]*/m,
            lookbehind: true
        },
        section: {
            pattern: /(^[ \f\t\v]*)\[[^\n\r\]]*\]?/m,
            lookbehind: true,
            inside: {
                'section-name': {
                    pattern: /(^\[[ \f\t\v]*)[^ \f\t\v\]]+(?:[ \f\t\v]+[^ \f\t\v\]]+)*/,
                    lookbehind: true,
                    alias: 'selector'
                },
                punctuation: /\[|\]/
            }
        },
        key: {
            pattern: /(^[ \f\t\v]*)[^ \f\n\r\t\v=]+(?:[ \f\t\v]+[^ \f\n\r\t\v=]+)*(?=[ \f\t\v]*=)/m,
            lookbehind: true,
            alias: 'attr-name'
        },
        value: {
            pattern: /(=[ \f\t\v]*)[^ \f\n\r\t\v]+(?:[ \f\t\v]+[^ \f\n\r\t\v]+)*/,
            lookbehind: true,
            alias: 'attr-value',
            inside: {
                'inner-value': {
                    pattern: /^("|').+(?=\1$)/,
                    lookbehind: true
                }
            }
        },
        punctuation: /=/
    };
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_ini_b6444607.js.map