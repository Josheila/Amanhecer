(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/xml-doc.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = xmlDoc;
xmlDoc.displayName = 'xmlDoc';
xmlDoc.aliases = [];
function xmlDoc(Prism) {
    ;
    (function(Prism) {
        /**
     * If the given language is present, it will insert the given doc comment grammar token into it.
     *
     * @param {string} lang
     * @param {any} docComment
     */ function insertDocComment(lang, docComment) {
            if (Prism.languages[lang]) {
                Prism.languages.insertBefore(lang, 'comment', {
                    'doc-comment': docComment
                });
            }
        }
        var tag = Prism.languages.markup.tag;
        var slashDocComment = {
            pattern: /\/\/\/.*/,
            greedy: true,
            alias: 'comment',
            inside: {
                tag: tag
            }
        };
        var tickDocComment = {
            pattern: /'''.*/,
            greedy: true,
            alias: 'comment',
            inside: {
                tag: tag
            }
        };
        insertDocComment('csharp', slashDocComment);
        insertDocComment('fsharp', slashDocComment);
        insertDocComment('vbnet', tickDocComment);
    })(Prism);
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_xml-doc_9bebfd4d.js.map