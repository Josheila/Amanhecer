(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/erlang.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = erlang;
erlang.displayName = 'erlang';
erlang.aliases = [];
function erlang(Prism) {
    Prism.languages.erlang = {
        comment: /%.+/,
        string: {
            pattern: /"(?:\\.|[^\\"\r\n])*"/,
            greedy: true
        },
        'quoted-function': {
            pattern: /'(?:\\.|[^\\'\r\n])+'(?=\()/,
            alias: 'function'
        },
        'quoted-atom': {
            pattern: /'(?:\\.|[^\\'\r\n])+'/,
            alias: 'atom'
        },
        boolean: /\b(?:false|true)\b/,
        keyword: /\b(?:after|case|catch|end|fun|if|of|receive|try|when)\b/,
        number: [
            /\$\\?./,
            /\b\d+#[a-z0-9]+/i,
            /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i
        ],
        function: /\b[a-z][\w@]*(?=\()/,
        variable: {
            // Look-behind is used to prevent wrong highlighting of atoms containing "@"
            pattern: /(^|[^@])(?:\b|\?)[A-Z_][\w@]*/,
            lookbehind: true
        },
        operator: [
            /[=\/<>:]=|=[:\/]=|\+\+?|--?|[=*\/!]|\b(?:and|andalso|band|bnot|bor|bsl|bsr|bxor|div|not|or|orelse|rem|xor)\b/,
            {
                // We don't want to match <<
                pattern: /(^|[^<])<(?!<)/,
                lookbehind: true
            },
            {
                // We don't want to match >>
                pattern: /(^|[^>])>(?!>)/,
                lookbehind: true
            }
        ],
        atom: /\b[a-z][\w@]*/,
        punctuation: /[()[\]{}:;,.#|]|<<|>>/
    };
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_erlang_e23ecf7e.js.map