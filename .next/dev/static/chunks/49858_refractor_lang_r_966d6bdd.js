(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/r.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = r;
r.displayName = 'r';
r.aliases = [];
function r(Prism) {
    Prism.languages.r = {
        comment: /#.*/,
        string: {
            pattern: /(['"])(?:\\.|(?!\1)[^\\\r\n])*\1/,
            greedy: true
        },
        'percent-operator': {
            // Includes user-defined operators
            // and %%, %*%, %/%, %in%, %o%, %x%
            pattern: /%[^%\s]*%/,
            alias: 'operator'
        },
        boolean: /\b(?:FALSE|TRUE)\b/,
        ellipsis: /\.\.(?:\.|\d+)/,
        number: [
            /\b(?:Inf|NaN)\b/,
            /(?:\b0x[\dA-Fa-f]+(?:\.\d*)?|\b\d+(?:\.\d*)?|\B\.\d+)(?:[EePp][+-]?\d+)?[iL]?/
        ],
        keyword: /\b(?:NA|NA_character_|NA_complex_|NA_integer_|NA_real_|NULL|break|else|for|function|if|in|next|repeat|while)\b/,
        operator: /->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/,
        punctuation: /[(){}\[\],;]/
    };
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_r_966d6bdd.js.map