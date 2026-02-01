(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/actionscript.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = actionscript;
actionscript.displayName = 'actionscript';
actionscript.aliases = [];
function actionscript(Prism) {
    Prism.languages.actionscript = Prism.languages.extend('javascript', {
        keyword: /\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,
        operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/
    });
    Prism.languages.actionscript['class-name'].alias = 'function'; // doesn't work with AS because AS is too complex
    delete Prism.languages.actionscript['parameter'];
    delete Prism.languages.actionscript['literal-property'];
    if (Prism.languages.markup) {
        Prism.languages.insertBefore('actionscript', 'string', {
            xml: {
                pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
                lookbehind: true,
                inside: Prism.languages.markup
            }
        });
    }
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_actionscript_62d8303a.js.map