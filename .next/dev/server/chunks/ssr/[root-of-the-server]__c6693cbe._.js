module.exports = [
"[project]/status.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":1,"date":"2026-01-26","content":"Acordei animado hoje 🥳"},{"id":2,"date":"2026-01-25","content":"120 caracteres é pouco 😆"},{"id":3,"date":"2026-01-24","content":"Hoje é dia de código e café ☕"}]);}),
"[project]/styles/Status.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "statusCard": "Status-module__mYkSqG__statusCard",
  "statusPage": "Status-module__mYkSqG__statusPage",
});
}),
"[project]/pages/status.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatusPage
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$status$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/status.json (json)"); // 根目录 status.json
(()=>{
    const e = new Error("Cannot find module '../components/StatusCard'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
        children: statuses.map((st)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StatusCard, {
                status: st
            }, st.id, false, {
                fileName: "[project]/pages/status.tsx",
                lineNumber: 11,
                columnNumber: 9
            }, this))
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

//# sourceMappingURL=%5Broot-of-the-server%5D__c6693cbe._.js.map