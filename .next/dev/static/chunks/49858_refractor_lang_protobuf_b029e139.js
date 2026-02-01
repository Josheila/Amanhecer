(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/protobuf.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = protobuf;
protobuf.displayName = 'protobuf';
protobuf.aliases = [];
function protobuf(Prism) {
    ;
    (function(Prism) {
        var builtinTypes = /\b(?:bool|bytes|double|s?fixed(?:32|64)|float|[su]?int(?:32|64)|string)\b/;
        Prism.languages.protobuf = Prism.languages.extend('clike', {
            'class-name': [
                {
                    pattern: /(\b(?:enum|extend|message|service)\s+)[A-Za-z_]\w*(?=\s*\{)/,
                    lookbehind: true
                },
                {
                    pattern: /(\b(?:rpc\s+\w+|returns)\s*\(\s*(?:stream\s+)?)\.?[A-Za-z_]\w*(?:\.[A-Za-z_]\w*)*(?=\s*\))/,
                    lookbehind: true
                }
            ],
            keyword: /\b(?:enum|extend|extensions|import|message|oneof|option|optional|package|public|repeated|required|reserved|returns|rpc(?=\s+\w)|service|stream|syntax|to)\b(?!\s*=\s*\d)/,
            function: /\b[a-z_]\w*(?=\s*\()/i
        });
        Prism.languages.insertBefore('protobuf', 'operator', {
            map: {
                pattern: /\bmap<\s*[\w.]+\s*,\s*[\w.]+\s*>(?=\s+[a-z_]\w*\s*[=;])/i,
                alias: 'class-name',
                inside: {
                    punctuation: /[<>.,]/,
                    builtin: builtinTypes
                }
            },
            builtin: builtinTypes,
            'positional-class-name': {
                pattern: /(?:\b|\B\.)[a-z_]\w*(?:\.[a-z_]\w*)*(?=\s+[a-z_]\w*\s*[=;])/i,
                alias: 'class-name',
                inside: {
                    punctuation: /\./
                }
            },
            annotation: {
                pattern: /(\[\s*)[a-z_]\w*(?=\s*=)/i,
                lookbehind: true
            }
        });
    })(Prism);
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_protobuf_b029e139.js.map