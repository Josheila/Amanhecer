(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/lua.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = lua;
lua.displayName = 'lua';
lua.aliases = [];
function lua(Prism) {
    Prism.languages.lua = {
        comment: /^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,
        // \z may be used to skip the following space
        string: {
            pattern: /(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[^z]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,
            greedy: true
        },
        number: /\b0x[a-f\d]+(?:\.[a-f\d]*)?(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|(?:\.\d*)?(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,
        keyword: /\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,
        function: /(?!\d)\w+(?=\s*(?:[({]))/,
        operator: [
            /[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/,
            {
                // Match ".." but don't break "..."
                pattern: /(^|[^.])\.\.(?!\.)/,
                lookbehind: true
            }
        ],
        punctuation: /[\[\](){},;]|\.+|:+/
    };
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_lua_a6834652.js.map