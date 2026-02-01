(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/nand2tetris-hdl.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = nand2tetrisHdl;
nand2tetrisHdl.displayName = 'nand2tetrisHdl';
nand2tetrisHdl.aliases = [];
function nand2tetrisHdl(Prism) {
    Prism.languages['nand2tetris-hdl'] = {
        comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
        keyword: /\b(?:BUILTIN|CHIP|CLOCKED|IN|OUT|PARTS)\b/,
        boolean: /\b(?:false|true)\b/,
        function: /\b[A-Za-z][A-Za-z0-9]*(?=\()/,
        number: /\b\d+\b/,
        operator: /=|\.\./,
        punctuation: /[{}[\];(),:]/
    };
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_nand2tetris-hdl_2d703a5d.js.map