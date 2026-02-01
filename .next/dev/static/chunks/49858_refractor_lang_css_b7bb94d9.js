(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/css.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = css;
css.displayName = 'css';
css.aliases = [];
function css(Prism) {
    ;
    (function(Prism) {
        var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
        Prism.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
                pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
                inside: {
                    rule: /^@[\w-]+/,
                    'selector-function-argument': {
                        pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                        lookbehind: true,
                        alias: 'selector'
                    },
                    keyword: {
                        pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                        lookbehind: true
                    } // See rest below
                }
            },
            url: {
                // https://drafts.csswg.org/css-values-3/#urls
                pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
                greedy: true,
                inside: {
                    function: /^url/i,
                    punctuation: /^\(|\)$/,
                    string: {
                        pattern: RegExp('^' + string.source + '$'),
                        alias: 'url'
                    }
                }
            },
            selector: {
                pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
                lookbehind: true
            },
            string: {
                pattern: string,
                greedy: true
            },
            property: {
                pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
                lookbehind: true
            },
            important: /!important\b/i,
            function: {
                pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
                lookbehind: true
            },
            punctuation: /[(){};:,]/
        };
        Prism.languages.css['atrule'].inside.rest = Prism.languages.css;
        var markup = Prism.languages.markup;
        if (markup) {
            markup.tag.addInlined('style', 'css');
            markup.tag.addAttribute('style', 'css');
        }
    })(Prism);
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_css_b7bb94d9.js.map