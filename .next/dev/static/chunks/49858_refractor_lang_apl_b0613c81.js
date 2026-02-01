(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/apl.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = apl;
apl.displayName = 'apl';
apl.aliases = [];
function apl(Prism) {
    Prism.languages.apl = {
        comment: /(?:⍝|#[! ]).*$/m,
        string: {
            pattern: /'(?:[^'\r\n]|'')*'/,
            greedy: true
        },
        number: /¯?(?:\d*\.?\b\d+(?:e[+¯]?\d+)?|¯|∞)(?:j¯?(?:(?:\d+(?:\.\d+)?|\.\d+)(?:e[+¯]?\d+)?|¯|∞))?/i,
        statement: /:[A-Z][a-z][A-Za-z]*\b/,
        'system-function': {
            pattern: /⎕[A-Z]+/i,
            alias: 'function'
        },
        constant: /[⍬⌾#⎕⍞]/,
        function: /[-+×÷⌈⌊∣|⍳⍸?*⍟○!⌹<≤=>≥≠≡≢∊⍷∪∩~∨∧⍱⍲⍴,⍪⌽⊖⍉↑↓⊂⊃⊆⊇⌷⍋⍒⊤⊥⍕⍎⊣⊢⍁⍂≈⍯↗¤→]/,
        'monadic-operator': {
            pattern: /[\\\/⌿⍀¨⍨⌶&∥]/,
            alias: 'operator'
        },
        'dyadic-operator': {
            pattern: /[.⍣⍠⍤∘⌸@⌺⍥]/,
            alias: 'operator'
        },
        assignment: {
            pattern: /←/,
            alias: 'keyword'
        },
        punctuation: /[\[;\]()◇⋄]/,
        dfn: {
            pattern: /[{}⍺⍵⍶⍹∇⍫:]/,
            alias: 'builtin'
        }
    };
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_apl_b0613c81.js.map