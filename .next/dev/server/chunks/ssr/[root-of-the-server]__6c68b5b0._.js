module.exports = [
"[project]/styles/AvatarSection.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "avatar": "AvatarSection-module__6tOn5G__avatar",
  "avatarSection": "AvatarSection-module__6tOn5G__avatarSection",
});
}),
"[project]/components/AvatarSection.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AvatarSection
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
// /components/AvatarSection.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$AvatarSection$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/AvatarSection.module.css [ssr] (css module)");
;
;
function AvatarSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$AvatarSection$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].avatarSection,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                src: "/avatar.jpg",
                alt: "Avatar",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$AvatarSection$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].avatar
            }, void 0, false, {
                fileName: "[project]/components/AvatarSection.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                children: " KuromiPiPi 🐱"
            }, void 0, false, {
                fileName: "[project]/components/AvatarSection.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                children: "quero amanhecer, entardecer e anoitecer com você"
            }, void 0, false, {
                fileName: "[project]/components/AvatarSection.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AvatarSection.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/date.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// /lib/date.ts
__turbopack_context__.s([
    "formatDate",
    ()=>formatDate
]);
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const year = date.getFullYear() % 100; // 取年份后两位
    const month = date.toLocaleString("en-US", {
        month: "short"
    }); // Jan, Feb...
    const day = date.getDate();
    return `${month} ${day}, ${year.toString().padStart(2, "0")}`;
}
}),
"[project]/styles/PostList.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "cardGrid": "PostList-module__ImdqVq__cardGrid",
  "current": "PostList-module__ImdqVq__current",
  "dots": "PostList-module__ImdqVq__dots",
  "iconButton": "PostList-module__ImdqVq__iconButton",
  "listGrid": "PostList-module__ImdqVq__listGrid",
  "next": "PostList-module__ImdqVq__next",
  "pageButton": "PostList-module__ImdqVq__pageButton",
  "pageInfo": "PostList-module__ImdqVq__pageInfo",
  "pageInput": "PostList-module__ImdqVq__pageInput",
  "pageNavForm": "PostList-module__ImdqVq__pageNavForm",
  "pageNumber": "PostList-module__ImdqVq__pageNumber",
  "pageNumbers": "PostList-module__ImdqVq__pageNumbers",
  "pagination": "PostList-module__ImdqVq__pagination",
  "prev": "PostList-module__ImdqVq__prev",
  "toggle": "PostList-module__ImdqVq__toggle",
  "viewSwitch": "PostList-module__ImdqVq__viewSwitch",
});
}),
"[project]/components/BlogList.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogList
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$date$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/date.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$PostList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/PostList.module.css [ssr] (css module)");
;
;
;
;
const isMobile = ("TURBOPACK compile-time value", "undefined") !== "undefined" && window.innerWidth < 768;
function BlogList({ items, pageSize = 9 }) {
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("card");
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(1);
    const totalPages = Math.ceil(items.length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const paginatedItems = items.slice(startIndex, startIndex + pageSize);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$PostList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].viewSwitch,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                        src: "/icon/view_gallery.svg",
                        alt: "卡片视图",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$PostList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].iconButton,
                        onClick: ()=>setViewMode("card")
                    }, void 0, false, {
                        fileName: "[project]/components/BlogList.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                        src: "/icon/view_list.svg",
                        alt: "列表视图",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$PostList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].iconButton,
                        onClick: ()=>setViewMode("list")
                    }, void 0, false, {
                        fileName: "[project]/components/BlogList.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/BlogList.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: viewMode === "card" ? ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "repeat(3, 1fr)" : "1fr",
                    gap: "1rem"
                },
                children: paginatedItems.map((item)=>{
                    // 类型守卫
                    if (!("slug" in item)) return null;
                    const href = "summary" in item ? `/posts/${item.slug}` : `/cozydiary/${item.slug}`;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                        href: href,
                        style: {
                            textDecoration: "none",
                            color: "inherit"
                        },
                        children: viewMode === "card" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                border: "1px solid var(--color-gray-200)",
                                borderRadius: "10px",
                                overflow: "hidden",
                                cursor: "pointer",
                                display: "flex",
                                flexDirection: "column"
                            },
                            children: [
                                item.cover && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: "100%",
                                        width: "100%",
                                        overflow: "hidden"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                        src: item.cover,
                                        alt: item.title,
                                        style: {
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/BlogList.tsx",
                                        lineNumber: 89,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/BlogList.tsx",
                                    lineNumber: 82,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: "0.5rem 1rem"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            style: {
                                                margin: "0 0 0.5rem 0",
                                                fontWeight: 400,
                                                fontSize: "1rem",
                                                color: "var(--color-gray-500)"
                                            },
                                            children: item.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/BlogList.tsx",
                                            lineNumber: 101,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            style: {
                                                margin: 0,
                                                fontSize: "0.9rem",
                                                color: "var(--color-gray-400)"
                                            },
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$date$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["formatDate"])(item.date),
                                                " "
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BlogList.tsx",
                                            lineNumber: 111,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BlogList.tsx",
                                    lineNumber: 100,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BlogList.tsx",
                            lineNumber: 71,
                            columnNumber: 17
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                borderBottom: "0.5px solid var(--color-gray-200)",
                                padding: "0.5rem 4px",
                                cursor: "pointer",
                                display: "grid",
                                gridTemplateColumns: "1fr auto",
                                alignItems: "center",
                                justifyContent: "space-between"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontWeight: 400,
                                        color: "var(--color-gray-500)"
                                    },
                                    children: item.title
                                }, void 0, false, {
                                    fileName: "[project]/components/BlogList.tsx",
                                    lineNumber: 134,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: "0.9rem",
                                        color: "var(--color-gray-400)"
                                    },
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$date$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["formatDate"])(item.date),
                                        " "
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BlogList.tsx",
                                    lineNumber: 139,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BlogList.tsx",
                            lineNumber: 123,
                            columnNumber: 17
                        }, this)
                    }, item.slug, false, {
                        fileName: "[project]/components/BlogList.tsx",
                        lineNumber: 65,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/BlogList.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$PostList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].pageNumbers,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$PostList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].pageNumber} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$PostList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].prev}`,
                            onClick: ()=>setCurrentPage((p)=>Math.max(p - 1, 1)),
                            disabled: currentPage === 1,
                            children: "«"
                        }, void 0, false, {
                            fileName: "[project]/components/BlogList.tsx",
                            lineNumber: 158,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/BlogList.tsx",
                        lineNumber: 157,
                        columnNumber: 11
                    }, this),
                    Array.from({
                        length: totalPages
                    }, (_, i)=>i + 1).map((page)=>{
                        if (page === 1 || page === totalPages || page >= currentPage - 1 && page <= currentPage + 1) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                children: page === currentPage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$PostList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].pageNumber} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$PostList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].current}`,
                                    children: page
                                }, void 0, false, {
                                    fileName: "[project]/components/BlogList.tsx",
                                    lineNumber: 176,
                                    columnNumber: 21
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$PostList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].pageNumber,
                                    onClick: ()=>setCurrentPage(page),
                                    children: page
                                }, void 0, false, {
                                    fileName: "[project]/components/BlogList.tsx",
                                    lineNumber: 180,
                                    columnNumber: 21
                                }, this)
                            }, page, false, {
                                fileName: "[project]/components/BlogList.tsx",
                                lineNumber: 174,
                                columnNumber: 17
                            }, this);
                        }
                        if (page === currentPage - 2 || page === currentPage + 2) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$PostList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].pageNumber} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$PostList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].dots}`,
                                    children: "…"
                                }, void 0, false, {
                                    fileName: "[project]/components/BlogList.tsx",
                                    lineNumber: 193,
                                    columnNumber: 19
                                }, this)
                            }, page, false, {
                                fileName: "[project]/components/BlogList.tsx",
                                lineNumber: 192,
                                columnNumber: 17
                            }, this);
                        }
                        return null;
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$PostList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].pageNumber} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$PostList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].next}`,
                            onClick: ()=>setCurrentPage((p)=>Math.min(p + 1, totalPages)),
                            disabled: currentPage === totalPages,
                            children: "»"
                        }, void 0, false, {
                            fileName: "[project]/components/BlogList.tsx",
                            lineNumber: 203,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/BlogList.tsx",
                        lineNumber: 202,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/BlogList.tsx",
                lineNumber: 156,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/BlogList.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[project]/lib/diary.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllDiaries",
    ()=>getAllDiaries,
    "getDiaryBySlug",
    ()=>getDiaryBySlug
]);
// /lib/diary.ts
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$gray$2d$matter__$5b$external$5d$__$28$gray$2d$matter$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gray$2d$matter$40$4$2e$0$2e$3$2f$node_modules$2f$gray$2d$matter$29$__ = __turbopack_context__.i("[externals]/gray-matter [external] (gray-matter, cjs, [project]/node_modules/.pnpm/gray-matter@4.0.3/node_modules/gray-matter)");
;
;
;
// 👉 cozydiary 目录
const diaryDirectory = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "cozydiary");
function getAllDiaries() {
    const filenames = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readdirSync(diaryDirectory);
    const diaries = filenames.filter((filename)=>filename.endsWith(".md")).map((filename)=>{
        const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(diaryDirectory, filename);
        const fileContents = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(filePath, "utf8");
        const { data, content } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$gray$2d$matter__$5b$external$5d$__$28$gray$2d$matter$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gray$2d$matter$40$4$2e$0$2e$3$2f$node_modules$2f$gray$2d$matter$29$__["default"])(fileContents);
        return {
            slug: filename.replace(/\.md$/, ""),
            title: data.title,
            date: data.date,
            cover: data.cover || null,
            content
        };
    });
    // 👉 按时间倒序
    diaries.sort((a, b)=>a.date < b.date ? 1 : -1);
    return diaries;
}
function getDiaryBySlug(slug) {
    const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(diaryDirectory, `${slug}.md`);
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(filePath)) return null;
    const fileContents = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(filePath, "utf8");
    const { data, content } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$gray$2d$matter__$5b$external$5d$__$28$gray$2d$matter$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gray$2d$matter$40$4$2e$0$2e$3$2f$node_modules$2f$gray$2d$matter$29$__["default"])(fileContents);
    return {
        slug,
        title: data.title,
        date: data.date,
        cover: data.cover || null,
        content
    };
}
}),
"[project]/pages/cozydiary.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CozyDiary,
    "getStaticProps",
    ()=>getStaticProps
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AvatarSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AvatarSection.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BlogList$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BlogList.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$diary$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/diary.ts [ssr] (ecmascript)");
;
;
;
;
function CozyDiary({ diaries }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AvatarSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/cozydiary.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                style: {
                    margin: "1rem 0",
                    fontSize: "1.5rem",
                    fontWeight: "bold"
                },
                children: "Cozy Diary"
            }, void 0, false, {
                fileName: "[project]/pages/cozydiary.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BlogList$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                items: diaries,
                pageSize: 9
            }, void 0, false, {
                fileName: "[project]/pages/cozydiary.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/cozydiary.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
const getStaticProps = async ()=>{
    const diaries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$diary$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getAllDiaries"])(); // 自动读取 CozyDiary 目录下所有 Markdown 文件
    return {
        props: {
            diaries
        }
    };
};
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6c68b5b0._.js.map