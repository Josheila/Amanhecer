module.exports = [
"[project]/status.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":1,"date":"2026-01-26","content":"Acordei animado hoje 🥳"},{"id":2,"date":"2026-01-25","content":"120 caracteres é pouco 😆"},{"id":3,"date":"2026-01-24","content":"Hoje é dia de código e café ☕"}]);}),
"[project]/styles/Status.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "statusCard": "Status-module__mYkSqG__statusCard",
  "statusPage": "Status-module__mYkSqG__statusPage",
});
}),
"[project]/lib/date.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// /lib/date.ts
/**
 * 格式化日期
 * @param dateStr - 日期字符串
 * @param type - 格式类型：1 = Jan 24, 26 (默认), 2 = Jan 24, 26 8h05
 */ __turbopack_context__.s([
    "formatDate",
    ()=>formatDate
]);
function formatDate(dateStr, type = 1) {
    const date = new Date(dateStr);
    const year = date.getFullYear() % 100; // 年份后两位
    const month = date.toLocaleString("en-US", {
        month: "short"
    }); // Jan, Feb...
    const day = date.getDate().toString().padStart(2, "0");
    if (type === 2) {
        const hours = date.getHours(); // 不补零
        const minutes = date.getMinutes().toString().padStart(2, "0"); // 分钟补零
        return `${month} ${day}, ${year} ${hours}h${minutes}`;
    }
    // type === 1
    return `${month} ${day}, ${year}`; // 原格式
}
}),
"[project]/components/Status.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Status
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
// components/Status.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Status$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/Status.module.css [ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$date$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/date.ts [ssr] (ecmascript)");
;
;
;
function Status({ statuses }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: statuses.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Status$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].statusCard,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: status.content
                    }, void 0, false, {
                        fileName: "[project]/components/Status.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("small", {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$date$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["formatDate"])(status.date, 2)
                    }, void 0, false, {
                        fileName: "[project]/components/Status.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this)
                ]
            }, status.id, true, {
                fileName: "[project]/components/Status.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this))
    }, void 0, false);
}
}),
"[project]/pages/status.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatusPage
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$status$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/status.json (json)"); // 根目录 status.json
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Status$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Status.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Status$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/Status.module.css [ssr] (css module)");
;
;
;
;
function StatusPage() {
    const statuses = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$status$2e$json__$28$json$29$__["default"]
    ].sort((a, b)=>a.date < b.date ? 1 : -1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Status$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].statusPage,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Status$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            statuses: statuses
        }, void 0, false, {
            fileName: "[project]/pages/status.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/pages/status.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__025cd79e._.js.map