(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/openqasm.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = openqasm;
openqasm.displayName = 'openqasm';
openqasm.aliases = [
    'qasm'
];
function openqasm(Prism) {
    // https://qiskit.github.io/openqasm/grammar/index.html
    Prism.languages.openqasm = {
        comment: /\/\*[\s\S]*?\*\/|\/\/.*/,
        string: {
            pattern: /"[^"\r\n\t]*"|'[^'\r\n\t]*'/,
            greedy: true
        },
        keyword: /\b(?:CX|OPENQASM|U|barrier|boxas|boxto|break|const|continue|ctrl|def|defcal|defcalgrammar|delay|else|end|for|gate|gphase|if|in|include|inv|kernel|lengthof|let|measure|pow|reset|return|rotary|stretchinf|while)\b|#pragma\b/,
        'class-name': /\b(?:angle|bit|bool|creg|fixed|float|int|length|qreg|qubit|stretch|uint)\b/,
        function: /\b(?:cos|exp|ln|popcount|rotl|rotr|sin|sqrt|tan)\b(?=\s*\()/,
        constant: /\b(?:euler|pi|tau)\b|π|𝜏|ℇ/,
        number: {
            pattern: /(^|[^.\w$])(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?(?:dt|ns|us|µs|ms|s)?/i,
            lookbehind: true
        },
        operator: /->|>>=?|<<=?|&&|\|\||\+\+|--|[!=<>&|~^+\-*/%]=?|@/,
        punctuation: /[(){}\[\];,:.]/
    };
    Prism.languages.qasm = Prism.languages.openqasm;
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_openqasm_fc5c6d7a.js.map