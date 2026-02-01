(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/diff.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = diff;
diff.displayName = 'diff';
diff.aliases = [];
function diff(Prism) {
    ;
    (function(Prism) {
        Prism.languages.diff = {
            coord: [
                // Match all kinds of coord lines (prefixed by "+++", "---" or "***").
                /^(?:\*{3}|-{3}|\+{3}).*$/m,
                /^@@.*@@$/m,
                /^\d.*$/m
            ] // deleted, inserted, unchanged, diff
        };
        /**
     * A map from the name of a block to its line prefix.
     *
     * @type {Object<string, string>}
     */ var PREFIXES = {
            'deleted-sign': '-',
            'deleted-arrow': '<',
            'inserted-sign': '+',
            'inserted-arrow': '>',
            unchanged: ' ',
            diff: '!'
        } // add a token for each prefix
        ;
        Object.keys(PREFIXES).forEach(function(name) {
            var prefix = PREFIXES[name];
            var alias = [];
            if (!/^\w+$/.test(name)) {
                // "deleted-sign" -> "deleted"
                alias.push(/\w+/.exec(name)[0]);
            }
            if (name === 'diff') {
                alias.push('bold');
            }
            Prism.languages.diff[name] = {
                pattern: RegExp('^(?:[' + prefix + '].*(?:\r\n?|\n|(?![\\s\\S])))+', 'm'),
                alias: alias,
                inside: {
                    line: {
                        pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
                        lookbehind: true
                    },
                    prefix: {
                        pattern: /[\s\S]/,
                        alias: /\w+/.exec(name)[0]
                    }
                }
            };
        }); // make prefixes available to Diff plugin
        Object.defineProperty(Prism.languages.diff, 'PREFIXES', {
            value: PREFIXES
        });
    })(Prism);
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_diff_d68154a7.js.map