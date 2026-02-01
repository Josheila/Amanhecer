(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/matlab.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = matlab;
matlab.displayName = 'matlab';
matlab.aliases = [];
function matlab(Prism) {
    Prism.languages.matlab = {
        comment: [
            /%\{[\s\S]*?\}%/,
            /%.+/
        ],
        string: {
            pattern: /\B'(?:''|[^'\r\n])*'/,
            greedy: true
        },
        // FIXME We could handle imaginary numbers as a whole
        number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+)?(?:[ij])?|\b[ij]\b/,
        keyword: /\b(?:NaN|break|case|catch|continue|else|elseif|end|for|function|if|inf|otherwise|parfor|pause|pi|return|switch|try|while)\b/,
        function: /\b(?!\d)\w+(?=\s*\()/,
        operator: /\.?[*^\/\\']|[+\-:@]|[<>=~]=?|&&?|\|\|?/,
        punctuation: /\.{3}|[.,;\[\](){}!]/
    };
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_matlab_b4062ddf.js.map