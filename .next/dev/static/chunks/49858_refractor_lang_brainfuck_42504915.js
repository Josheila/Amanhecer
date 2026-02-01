(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/brainfuck.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = brainfuck;
brainfuck.displayName = 'brainfuck';
brainfuck.aliases = [];
function brainfuck(Prism) {
    Prism.languages.brainfuck = {
        pointer: {
            pattern: /<|>/,
            alias: 'keyword'
        },
        increment: {
            pattern: /\+/,
            alias: 'inserted'
        },
        decrement: {
            pattern: /-/,
            alias: 'deleted'
        },
        branching: {
            pattern: /\[|\]/,
            alias: 'important'
        },
        operator: /[.,]/,
        comment: /\S+/
    };
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_brainfuck_42504915.js.map