module.exports = [
"[project]/styles/Status.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "statusButton": "Status-module__mYkSqG__statusButton",
  "statusCard": "Status-module__mYkSqG__statusCard",
  "statusFeed": "Status-module__mYkSqG__statusFeed",
  "statusForm": "Status-module__mYkSqG__statusForm",
  "statusInput": "Status-module__mYkSqG__statusInput",
  "statusPage": "Status-module__mYkSqG__statusPage",
  "statusTime": "Status-module__mYkSqG__statusTime",
});
}),
"[project]/components/Status.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Status.tsx
__turbopack_context__.s([
    "default",
    ()=>Status
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Status$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/Status.module.css [ssr] (css module)");
;
;
function Status({ statuses }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: statuses.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Status$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].statusCard,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: status.text
                    }, void 0, false, {
                        fileName: "[project]/components/Status.tsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Status$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].statusTime,
                        children: status.time
                    }, void 0, false, {
                        fileName: "[project]/components/Status.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this)
                ]
            }, status.id, true, {
                fileName: "[project]/components/Status.tsx",
                lineNumber: 14,
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
// pages/status.tsx
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Status$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Status.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Status$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/Status.module.css [ssr] (css module)");
;
;
;
;
function StatusPage() {
    const [statuses, setStatuses] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [newStatus, setNewStatus] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const handlePost = (e)=>{
        e.preventDefault();
        if (!newStatus.trim()) return;
        setStatuses([
            {
                id: Date.now(),
                text: newStatus,
                time: new Date().toLocaleString()
            },
            ...statuses
        ]);
        setNewStatus("");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Status$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].statusPage,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                onSubmit: handlePost,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Status$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].statusForm,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("textarea", {
                        placeholder: "Escreva até 140 caracteres...",
                        maxLength: 140,
                        value: newStatus,
                        onChange: (e)=>setNewStatus(e.target.value),
                        rows: 3,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Status$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].statusInput
                    }, void 0, false, {
                        fileName: "[project]/pages/status.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Status$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].statusButton,
                        children: "Publicar"
                    }, void 0, false, {
                        fileName: "[project]/pages/status.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/status.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Status$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].statusFeed,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Status$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    statuses: statuses
                }, void 0, false, {
                    fileName: "[project]/pages/status.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/status.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/status.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e2d31e9a._.js.map