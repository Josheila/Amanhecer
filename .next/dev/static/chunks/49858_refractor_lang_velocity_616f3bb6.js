(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/velocity.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = velocity;
velocity.displayName = 'velocity';
velocity.aliases = [];
function velocity(Prism) {
    ;
    (function(Prism) {
        Prism.languages.velocity = Prism.languages.extend('markup', {});
        var velocity = {
            variable: {
                pattern: /(^|[^\\](?:\\\\)*)\$!?(?:[a-z][\w-]*(?:\([^)]*\))?(?:\.[a-z][\w-]*(?:\([^)]*\))?|\[[^\]]+\])*|\{[^}]+\})/i,
                lookbehind: true,
                inside: {} // See below
            },
            string: {
                pattern: /"[^"]*"|'[^']*'/,
                greedy: true
            },
            number: /\b\d+\b/,
            boolean: /\b(?:false|true)\b/,
            operator: /[=!<>]=?|[+*/%-]|&&|\|\||\.\.|\b(?:eq|g[et]|l[et]|n(?:e|ot))\b/,
            punctuation: /[(){}[\]:,.]/
        };
        velocity.variable.inside = {
            string: velocity['string'],
            function: {
                pattern: /([^\w-])[a-z][\w-]*(?=\()/,
                lookbehind: true
            },
            number: velocity['number'],
            boolean: velocity['boolean'],
            punctuation: velocity['punctuation']
        };
        Prism.languages.insertBefore('velocity', 'comment', {
            unparsed: {
                pattern: /(^|[^\\])#\[\[[\s\S]*?\]\]#/,
                lookbehind: true,
                greedy: true,
                inside: {
                    punctuation: /^#\[\[|\]\]#$/
                }
            },
            'velocity-comment': [
                {
                    pattern: /(^|[^\\])#\*[\s\S]*?\*#/,
                    lookbehind: true,
                    greedy: true,
                    alias: 'comment'
                },
                {
                    pattern: /(^|[^\\])##.*/,
                    lookbehind: true,
                    greedy: true,
                    alias: 'comment'
                }
            ],
            directive: {
                pattern: /(^|[^\\](?:\\\\)*)#@?(?:[a-z][\w-]*|\{[a-z][\w-]*\})(?:\s*\((?:[^()]|\([^()]*\))*\))?/i,
                lookbehind: true,
                inside: {
                    keyword: {
                        pattern: /^#@?(?:[a-z][\w-]*|\{[a-z][\w-]*\})|\bin\b/,
                        inside: {
                            punctuation: /[{}]/
                        }
                    },
                    rest: velocity
                }
            },
            variable: velocity['variable']
        });
        Prism.languages.velocity['tag'].inside['attr-value'].inside.rest = Prism.languages.velocity;
    })(Prism);
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_velocity_616f3bb6.js.map