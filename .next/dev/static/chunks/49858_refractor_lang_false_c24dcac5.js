(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/false.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = $false;
$false.displayName = '$false';
$false.aliases = [];
function $false(Prism) {
    ;
    (function(Prism) {
        /**
     * Based on the manual by Wouter van Oortmerssen.
     *
     * @see {@link https://github.com/PrismJS/prism/issues/2801#issue-829717504}
     */ Prism.languages['false'] = {
            comment: {
                pattern: /\{[^}]*\}/
            },
            string: {
                pattern: /"[^"]*"/,
                greedy: true
            },
            'character-code': {
                pattern: /'(?:[^\r]|\r\n?)/,
                alias: 'number'
            },
            'assembler-code': {
                pattern: /\d+`/,
                alias: 'important'
            },
            number: /\d+/,
            operator: /[-!#$%&'*+,./:;=>?@\\^_`|~ßø]/,
            punctuation: /\[|\]/,
            variable: /[a-z]/,
            'non-standard': {
                pattern: /[()<BDO®]/,
                alias: 'bold'
            }
        };
    })(Prism);
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_false_c24dcac5.js.map