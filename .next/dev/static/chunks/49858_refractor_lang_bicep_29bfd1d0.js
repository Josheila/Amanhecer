(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/bicep.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = bicep;
bicep.displayName = 'bicep';
bicep.aliases = [];
function bicep(Prism) {
    // based loosely upon: https://github.com/Azure/bicep/blob/main/src/textmate/bicep.tmlanguage
    Prism.languages.bicep = {
        comment: [
            {
                // multiline comments eg /* ASDF */
                pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                lookbehind: true,
                greedy: true
            },
            {
                // singleline comments eg // ASDF
                pattern: /(^|[^\\:])\/\/.*/,
                lookbehind: true,
                greedy: true
            }
        ],
        property: [
            {
                pattern: /([\r\n][ \t]*)[a-z_]\w*(?=[ \t]*:)/i,
                lookbehind: true
            },
            {
                pattern: /([\r\n][ \t]*)'(?:\\.|\$(?!\{)|[^'\\\r\n$])*'(?=[ \t]*:)/,
                lookbehind: true,
                greedy: true
            }
        ],
        string: [
            {
                pattern: /'''[^'][\s\S]*?'''/,
                greedy: true
            },
            {
                pattern: /(^|[^\\'])'(?:\\.|\$(?!\{)|[^'\\\r\n$])*'/,
                lookbehind: true,
                greedy: true
            }
        ],
        'interpolated-string': {
            pattern: /(^|[^\\'])'(?:\\.|\$(?:(?!\{)|\{[^{}\r\n]*\})|[^'\\\r\n$])*'/,
            lookbehind: true,
            greedy: true,
            inside: {
                interpolation: {
                    pattern: /\$\{[^{}\r\n]*\}/,
                    inside: {
                        expression: {
                            pattern: /(^\$\{)[\s\S]+(?=\}$)/,
                            lookbehind: true
                        },
                        punctuation: /^\$\{|\}$/
                    }
                },
                string: /[\s\S]+/
            }
        },
        datatype: {
            pattern: /(\b(?:output|param)\b[ \t]+\w+[ \t]+)\w+\b/,
            lookbehind: true,
            alias: 'class-name'
        },
        boolean: /\b(?:false|true)\b/,
        // https://github.com/Azure/bicep/blob/114a3251b4e6e30082a58729f19a8cc4e374ffa6/src/textmate/bicep.tmlanguage#L184
        keyword: /\b(?:existing|for|if|in|module|null|output|param|resource|targetScope|var)\b/,
        decorator: /@\w+\b/,
        function: /\b[a-z_]\w*(?=[ \t]*\()/i,
        number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i,
        operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
        punctuation: /[{}[\];(),.:]/
    };
    Prism.languages.bicep['interpolated-string'].inside['interpolation'].inside['expression'].inside = Prism.languages.bicep;
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_bicep_29bfd1d0.js.map