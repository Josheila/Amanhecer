module.exports = [
"[project]/components/BlogListPagination.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogListPagination
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$BlogList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/BlogList.module.css [ssr] (css module)");
;
;
function BlogListPagination({ totalPages, currentPage, onPageChange }) {
    if (totalPages <= 1) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$BlogList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].pageNumbers,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$BlogList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].pageNumber} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$BlogList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].prev}`,
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
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                        children: page === currentPage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$BlogList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].pageNumber} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$BlogList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].current}`,
                            children: page
                        }, void 0, false, {
                            fileName: "[project]/components/BlogListPagination.tsx",
                            lineNumber: 37,
                            columnNumber: 17
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$BlogList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].pageNumber,
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
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$BlogList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].pageNumber} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$BlogList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].dots}`,
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$BlogList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].pageNumber} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$BlogList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].next}`,
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
}),
"[project]/components/BlogListPagination.tsx [ssr] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/BlogListPagination.tsx [ssr] (ecmascript)"));
}),
];

//# sourceMappingURL=components_BlogListPagination_tsx_53f4ac82._.js.map