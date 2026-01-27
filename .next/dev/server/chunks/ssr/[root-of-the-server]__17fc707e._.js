module.exports = [
"[project]/status.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"date":"2026-01-27 23:12","content":"ontem só fui dormir às cinco da manhã, hoje tô morrendo… \n mas quando chega de madrugada, fico toda elétrica de novo 😵‍💫"}]);}),
"[project]/lib/date.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// /lib/date.ts
/**
 * 格式化日期
 * @param dateStr - 日期字符串
 * @param type - 格式类型：1 = Jan 24, 26 (默认), 2 = 20-01-02 23:44
 */ __turbopack_context__.s([
    "formatDate",
    ()=>formatDate
]);
function formatDate(dateStr, type = 1) {
    const date = new Date(dateStr);
    const year = (date.getFullYear() % 100).toString().padStart(2, "0"); // 20
    const monthNum = (date.getMonth() + 1).toString().padStart(2, "0"); // 01
    const day = date.getDate().toString().padStart(2, "0"); // 02
    if (type === 2) {
        const hours = date.getHours().toString().padStart(2, "0"); // 23
        const minutes = date.getMinutes().toString().padStart(2, "0"); // 44
        return `${year}-${monthNum}-${day} ${hours}:${minutes}`;
    }
    // type === 1
    const monthText = date.toLocaleString("en-US", {
        month: "short"
    }); // Jan
    return `${monthText} ${day}, ${year}`;
}
}),
"[project]/styles/Status.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "current": "Status-module__mYkSqG__current",
  "dots": "Status-module__mYkSqG__dots",
  "next": "Status-module__mYkSqG__next",
  "pageInput": "Status-module__mYkSqG__pageInput",
  "pageNavForm": "Status-module__mYkSqG__pageNavForm",
  "pageNumber": "Status-module__mYkSqG__pageNumber",
  "pageNumbers": "Status-module__mYkSqG__pageNumbers",
  "prev": "Status-module__mYkSqG__prev",
  "statusCard": "Status-module__mYkSqG__statusCard",
  "statusList": "Status-module__mYkSqG__statusList",
});
}),
"[project]/components/Status.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Status
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
// components/Status.tsx
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$date$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/date.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Status$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/Status.module.css [ssr] (css module)");
;
;
;
;
function Status({ statuses, pageSize = 10 }) {
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(1);
    // 按日期倒序显示最新在前
    const sorted = [
        ...statuses
    ].sort((a, b)=>a.date < b.date ? 1 : -1);
    const totalPages = Math.ceil(sorted.length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const paginatedItems = sorted.slice(startIndex, startIndex + pageSize);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Status$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].statusList,
                children: paginatedItems.map((status, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Status$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].statusCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                style: {
                                    whiteSpace: "pre-line"
                                },
                                children: status.content
                            }, void 0, false, {
                                fileName: "[project]/components/Status.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("small", {
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$date$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["formatDate"])(status.date, 2)
                            }, void 0, false, {
                                fileName: "[project]/components/Status.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/components/Status.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Status.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Status$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].pageNumbers,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Status$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].pageNumber} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Status$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].prev}`,
                            onClick: ()=>setCurrentPage((p)=>Math.max(p - 1, 1)),
                            disabled: currentPage === 1,
                            children: "«"
                        }, void 0, false, {
                            fileName: "[project]/components/Status.tsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Status.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this),
                    Array.from({
                        length: totalPages
                    }, (_, i)=>i + 1).map((page)=>{
                        if (page === 1 || page === totalPages || page >= currentPage - 1 && page <= currentPage + 1) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                children: page === currentPage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Status$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].pageNumber} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Status$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].current}`,
                                    children: page
                                }, void 0, false, {
                                    fileName: "[project]/components/Status.tsx",
                                    lineNumber: 60,
                                    columnNumber: 21
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Status$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].pageNumber,
                                    onClick: ()=>setCurrentPage(page),
                                    children: page
                                }, void 0, false, {
                                    fileName: "[project]/components/Status.tsx",
                                    lineNumber: 64,
                                    columnNumber: 21
                                }, this)
                            }, page, false, {
                                fileName: "[project]/components/Status.tsx",
                                lineNumber: 58,
                                columnNumber: 17
                            }, this);
                        }
                        if (page === currentPage - 2 || page === currentPage + 2) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Status$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].pageNumber} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Status$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].dots}`,
                                    children: "…"
                                }, void 0, false, {
                                    fileName: "[project]/components/Status.tsx",
                                    lineNumber: 77,
                                    columnNumber: 19
                                }, this)
                            }, page, false, {
                                fileName: "[project]/components/Status.tsx",
                                lineNumber: 76,
                                columnNumber: 17
                            }, this);
                        }
                        return null;
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Status$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].pageNumber} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Status$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].next}`,
                            onClick: ()=>setCurrentPage((p)=>Math.min(p + 1, totalPages)),
                            disabled: currentPage === totalPages,
                            children: "»"
                        }, void 0, false, {
                            fileName: "[project]/components/Status.tsx",
                            lineNumber: 87,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Status.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Status.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Status.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
"[project]/styles/Header.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "header": "Header-module__vcZAwq__header",
  "myHeaderOverride": "Header-module__vcZAwq__myHeaderOverride",
  "navButton": "Header-module__vcZAwq__navButton",
  "navButtons": "Header-module__vcZAwq__navButtons",
  "navText": "Header-module__vcZAwq__navText",
});
}),
"[project]/components/Header.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.4_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Header$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/Header.module.css [ssr] (css module)");
;
;
;
function Header({ buttons = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "Posts",
        href: "/posts"
    },
    {
        label: "CozyDiary",
        href: "/cozydiary"
    },
    {
        label: "Moment",
        href: "/moment"
    },
    {
        label: "Tags",
        href: "/tags"
    },
    {
        label: "Now",
        href: "/now"
    },
    {
        label: "About",
        href: "/about"
    }
], style }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Header$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].header,
        style: style,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Header$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].navButtons,
            children: buttons.map((btn)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: btn.href,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Header$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].navButton,
                        children: btn.label
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 27,
                        columnNumber: 13
                    }, this)
                }, btn.href, false, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 26,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/Header.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Header.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
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
                lineNumber: 23,
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
"[project]/pages/moments.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatusPage
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$status$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/status.json (json)"); // 根目录 status.json
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Status$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Status.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Status$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/Status.module.css [ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Header.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AvatarSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AvatarSection.tsx [ssr] (ecmascript)");
;
;
;
;
;
;
function StatusPage() {
    const statuses = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$status$2e$json__$28$json$29$__["default"]
    ].sort((a, b)=>a.date < b.date ? 1 : -1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                // style={{ justifyContent: "center" }}
                buttons: [
                    {
                        label: "Home",
                        href: "/"
                    },
                    {
                        label: "Posts",
                        href: "/posts"
                    },
                    {
                        label: "CozyDiary",
                        href: "/cozydiary"
                    },
                    // { label: "Moments", href: "/moments" },
                    //   { label: "Tags", href: "/tags" },
                    {
                        label: "Now",
                        href: "/now"
                    },
                    {
                        label: "About",
                        href: "/about"
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/pages/moments.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AvatarSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/moments.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Status$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].statusPage,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Status$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    statuses: statuses
                }, void 0, false, {
                    fileName: "[project]/pages/moments.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/moments.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/moments.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__17fc707e._.js.map