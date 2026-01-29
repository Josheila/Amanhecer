(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/styles/Pagination.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "current": "Pagination-module__s0C0Zq__current",
  "dots": "Pagination-module__s0C0Zq__dots",
  "next": "Pagination-module__s0C0Zq__next",
  "pageNumber": "Pagination-module__s0C0Zq__pageNumber",
  "pageNumbers": "Pagination-module__s0C0Zq__pageNumbers",
  "prev": "Pagination-module__s0C0Zq__prev",
});
}),
"[project]/components/BlogListPagination.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogListPagination
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react@19.2.3/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Pagination$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/Pagination.module.css [client] (css module)");
;
;
function BlogListPagination({ totalPages, currentPage, onPageChange }) {
    if (totalPages <= 1) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Pagination$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].pageNumbers,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Pagination$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].pageNumber} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Pagination$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].prev}`,
                    onClick: ()=>onPageChange(Math.max(currentPage - 1, 1)),
                    disabled: currentPage === 1,
                    children: "«"
                }, void 0, false, {
                    fileName: "[project]/components/BlogListPagination.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/BlogListPagination.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            Array.from({
                length: totalPages
            }, (_, i)=>i + 1).map((page)=>{
                if (page === 1 || page === totalPages || page >= currentPage - 1 && page <= currentPage + 1) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: page === currentPage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Pagination$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].pageNumber} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Pagination$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].current}`,
                            children: page
                        }, void 0, false, {
                            fileName: "[project]/components/BlogListPagination.tsx",
                            lineNumber: 37,
                            columnNumber: 17
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Pagination$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].pageNumber,
                            onClick: ()=>onPageChange(page),
                            children: page
                        }, void 0, false, {
                            fileName: "[project]/components/BlogListPagination.tsx",
                            lineNumber: 41,
                            columnNumber: 17
                        }, this)
                    }, page, false, {
                        fileName: "[project]/components/BlogListPagination.tsx",
                        lineNumber: 35,
                        columnNumber: 13
                    }, this);
                }
                if (page === currentPage - 2 || page === currentPage + 2) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Pagination$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].pageNumber} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Pagination$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].dots}`,
                            children: "…"
                        }, void 0, false, {
                            fileName: "[project]/components/BlogListPagination.tsx",
                            lineNumber: 54,
                            columnNumber: 15
                        }, this)
                    }, page, false, {
                        fileName: "[project]/components/BlogListPagination.tsx",
                        lineNumber: 53,
                        columnNumber: 13
                    }, this);
                }
                return null;
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Pagination$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].pageNumber} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Pagination$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].next}`,
                    onClick: ()=>onPageChange(Math.min(currentPage + 1, totalPages)),
                    disabled: currentPage === totalPages,
                    children: "»"
                }, void 0, false, {
                    fileName: "[project]/components/BlogListPagination.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/BlogListPagination.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/BlogListPagination.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = BlogListPagination;
var _c;
__turbopack_context__.k.register(_c, "BlogListPagination");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/BlogListPagination.tsx [client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/BlogListPagination.tsx [client] (ecmascript)"));
}),
]);

//# sourceMappingURL=_45139ebc._.js.map