(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/hoon.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = hoon;
hoon.displayName = 'hoon';
hoon.aliases = [];
function hoon(Prism) {
    Prism.languages.hoon = {
        comment: {
            pattern: /::.*/,
            greedy: true
        },
        string: {
            pattern: /"[^"]*"|'[^']*'/,
            greedy: true
        },
        constant: /%(?:\.[ny]|[\w-]+)/,
        'class-name': /@(?:[a-z0-9-]*[a-z0-9])?|\*/i,
        function: /(?:\+[-+] {2})?(?:[a-z](?:[a-z0-9-]*[a-z0-9])?)/,
        keyword: /\.[\^\+\*=\?]|![><:\.=\?!]|=[>|:,\.\-\^<+;/~\*\?]|\?[>|:\.\-\^<\+&~=@!]|\|[\$_%:\.\-\^~\*=@\?]|\+[|\$\+\*]|:[_\-\^\+~\*]|%[_:\.\-\^\+~\*=]|\^[|:\.\-\+&~\*=\?]|\$[|_%:<>\-\^&~@=\?]|;[:<\+;\/~\*=]|~[>|\$_%<\+\/&=\?!]|--|==/
    };
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_hoon_9b9848ea.js.map