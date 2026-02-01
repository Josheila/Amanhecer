(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/turtle.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = turtle;
turtle.displayName = 'turtle';
turtle.aliases = [];
function turtle(Prism) {
    Prism.languages.turtle = {
        comment: {
            pattern: /#.*/,
            greedy: true
        },
        'multiline-string': {
            pattern: /"""(?:(?:""?)?(?:[^"\\]|\\.))*"""|'''(?:(?:''?)?(?:[^'\\]|\\.))*'''/,
            greedy: true,
            alias: 'string',
            inside: {
                comment: /#.*/
            }
        },
        string: {
            pattern: /"(?:[^\\"\r\n]|\\.)*"|'(?:[^\\'\r\n]|\\.)*'/,
            greedy: true
        },
        url: {
            pattern: /<(?:[^\x00-\x20<>"{}|^`\\]|\\(?:u[\da-fA-F]{4}|U[\da-fA-F]{8}))*>/,
            greedy: true,
            inside: {
                punctuation: /[<>]/
            }
        },
        function: {
            pattern: /(?:(?![-.\d\xB7])[-.\w\xB7\xC0-\uFFFD]+)?:(?:(?![-.])(?:[-.:\w\xC0-\uFFFD]|%[\da-f]{2}|\\.)+)?/i,
            inside: {
                'local-name': {
                    pattern: /([^:]*:)[\s\S]+/,
                    lookbehind: true
                },
                prefix: {
                    pattern: /[\s\S]+/,
                    inside: {
                        punctuation: /:/
                    }
                }
            }
        },
        number: /[+-]?\b\d+(?:\.\d*)?(?:e[+-]?\d+)?/i,
        punctuation: /[{}.,;()[\]]|\^\^/,
        boolean: /\b(?:false|true)\b/,
        keyword: [
            /(?:\ba|@prefix|@base)\b|=/,
            /\b(?:base|graph|prefix)\b/i
        ],
        tag: {
            pattern: /@[a-z]+(?:-[a-z\d]+)*/i,
            inside: {
                punctuation: /@/
            }
        }
    };
    Prism.languages.trig = Prism.languages['turtle'];
}
}),
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/sparql.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var refractorTurtle = __turbopack_context__.r("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/turtle.js [client] (ecmascript)");
module.exports = sparql;
sparql.displayName = 'sparql';
sparql.aliases = [
    'rq'
];
function sparql(Prism) {
    Prism.register(refractorTurtle);
    Prism.languages.sparql = Prism.languages.extend('turtle', {
        boolean: /\b(?:false|true)\b/i,
        variable: {
            pattern: /[?$]\w+/,
            greedy: true
        }
    });
    Prism.languages.insertBefore('sparql', 'punctuation', {
        keyword: [
            /\b(?:A|ADD|ALL|AS|ASC|ASK|BNODE|BY|CLEAR|CONSTRUCT|COPY|CREATE|DATA|DEFAULT|DELETE|DESC|DESCRIBE|DISTINCT|DROP|EXISTS|FILTER|FROM|GROUP|HAVING|INSERT|INTO|LIMIT|LOAD|MINUS|MOVE|NAMED|NOT|NOW|OFFSET|OPTIONAL|ORDER|RAND|REDUCED|SELECT|SEPARATOR|SERVICE|SILENT|STRUUID|UNION|USING|UUID|VALUES|WHERE)\b/i,
            /\b(?:ABS|AVG|BIND|BOUND|CEIL|COALESCE|CONCAT|CONTAINS|COUNT|DATATYPE|DAY|ENCODE_FOR_URI|FLOOR|GROUP_CONCAT|HOURS|IF|IRI|isBLANK|isIRI|isLITERAL|isNUMERIC|isURI|LANG|LANGMATCHES|LCASE|MAX|MD5|MIN|MINUTES|MONTH|REGEX|REPLACE|ROUND|sameTerm|SAMPLE|SECONDS|SHA1|SHA256|SHA384|SHA512|STR|STRAFTER|STRBEFORE|STRDT|STRENDS|STRLANG|STRLEN|STRSTARTS|SUBSTR|SUM|TIMEZONE|TZ|UCASE|URI|YEAR)\b(?=\s*\()/i,
            /\b(?:BASE|GRAPH|PREFIX)\b/i
        ]
    });
    Prism.languages.rq = Prism.languages.sparql;
}
}),
]);

//# sourceMappingURL=49858_refractor_lang_72bd9f2e._.js.map