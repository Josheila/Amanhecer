(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/t4-templating.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = t4Templating;
t4Templating.displayName = 't4Templating';
t4Templating.aliases = [];
function t4Templating(Prism) {
    ;
    (function(Prism) {
        function createBlock(prefix, inside, contentAlias) {
            return {
                pattern: RegExp('<#' + prefix + '[\\s\\S]*?#>'),
                alias: 'block',
                inside: {
                    delimiter: {
                        pattern: RegExp('^<#' + prefix + '|#>$'),
                        alias: 'important'
                    },
                    content: {
                        pattern: /[\s\S]+/,
                        inside: inside,
                        alias: contentAlias
                    }
                }
            };
        }
        function createT4(insideLang) {
            var grammar = Prism.languages[insideLang];
            var className = 'language-' + insideLang;
            return {
                block: {
                    pattern: /<#[\s\S]+?#>/,
                    inside: {
                        directive: createBlock('@', {
                            'attr-value': {
                                pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/,
                                inside: {
                                    punctuation: /^=|^["']|["']$/
                                }
                            },
                            keyword: /\b\w+(?=\s)/,
                            'attr-name': /\b\w+/
                        }),
                        expression: createBlock('=', grammar, className),
                        'class-feature': createBlock('\\+', grammar, className),
                        standard: createBlock('', grammar, className)
                    }
                }
            };
        }
        Prism.languages['t4-templating'] = Object.defineProperty({}, 'createT4', {
            value: createT4
        });
    })(Prism);
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_t4-templating_1fc739ec.js.map