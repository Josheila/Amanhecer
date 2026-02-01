(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/jsstacktrace.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = jsstacktrace;
jsstacktrace.displayName = 'jsstacktrace';
jsstacktrace.aliases = [];
function jsstacktrace(Prism) {
    Prism.languages.jsstacktrace = {
        'error-message': {
            pattern: /^\S.*/m,
            alias: 'string'
        },
        'stack-frame': {
            pattern: /(^[ \t]+)at[ \t].*/m,
            lookbehind: true,
            inside: {
                'not-my-code': {
                    pattern: /^at[ \t]+(?!\s)(?:node\.js|<unknown>|.*(?:node_modules|\(<anonymous>\)|\(<unknown>|<anonymous>$|\(internal\/|\(node\.js)).*/m,
                    alias: 'comment'
                },
                filename: {
                    pattern: /(\bat\s+(?!\s)|\()(?:[a-zA-Z]:)?[^():]+(?=:)/,
                    lookbehind: true,
                    alias: 'url'
                },
                function: {
                    pattern: /(\bat\s+(?:new\s+)?)(?!\s)[_$a-zA-Z\xA0-\uFFFF<][.$\w\xA0-\uFFFF<>]*/,
                    lookbehind: true,
                    inside: {
                        punctuation: /\./
                    }
                },
                punctuation: /[()]/,
                keyword: /\b(?:at|new)\b/,
                alias: {
                    pattern: /\[(?:as\s+)?(?!\s)[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\]/,
                    alias: 'variable'
                },
                'line-number': {
                    pattern: /:\d+(?::\d+)?\b/,
                    alias: 'number',
                    inside: {
                        punctuation: /:/
                    }
                }
            }
        }
    };
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_jsstacktrace_267937ed.js.map