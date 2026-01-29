module.exports = [
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

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
"[project]/styles/Header.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "header": "Header-module__vcZAwq__header",
  "menu": "Header-module__vcZAwq__menu",
  "menuButton": "Header-module__vcZAwq__menuButton",
  "menuItem": "Header-module__vcZAwq__menuItem",
  "selected": "Header-module__vcZAwq__selected",
  "topRow": "Header-module__vcZAwq__topRow",
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.4_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Header$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/Header.module.css [ssr] (css module)");
;
;
;
;
;
function Header({ buttons = [
    {
        label: "HOME",
        href: "/"
    },
    {
        label: "POSTS",
        href: "/posts"
    },
    {
        label: "COZYDIARY",
        href: "/cozydiary"
    },
    {
        label: "MOMENTS",
        href: "/moments"
    },
    {
        label: "TAGS",
        href: "/tags"
    },
    {
        label: "NOW",
        href: "/now"
    }
], style, defaultOpen = false, hideToggle = false }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(defaultOpen);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Header$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].header,
        style: style,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Header$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].topRow,
                children: !hideToggle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Header$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].menuButton,
                    onClick: ()=>setOpen(!open),
                    "aria-label": "Toggle menu",
                    children: "💭"
                }, void 0, false, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 34,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Header$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].menu,
                children: buttons.map((btn)=>{
                    const isSelected = router.pathname === btn.href;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: btn.href,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Header$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].menuItem} ${isSelected ? __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Header$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].selected : ""}`,
                            onClick: ()=>setOpen(false),
                            children: btn.label
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 52,
                            columnNumber: 17
                        }, this)
                    }, btn.href, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 51,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Header.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[project]/styles/MdContent.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "mdContent": "MdContent-module__jlgNAa__mdContent",
});
}),
"[project]/pages/cozydiary/[diary].tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>DiaryPage,
    "getStaticPaths",
    ()=>getStaticPaths,
    "getStaticProps",
    ()=>getStaticProps
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.4_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$diary$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/diary.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$date$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/date.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Header.tsx [ssr] (ecmascript)"); // 用 Header 组件
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$MdContent$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/MdContent.module.css [ssr] (css module)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$markdown__$5b$external$5d$__$28$react$2d$markdown$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$markdown$40$10$2e$1$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$markdown$29$__ = __turbopack_context__.i("[externals]/react-markdown [external] (react-markdown, esm_import, [project]/node_modules/.pnpm/react-markdown@10.1.0_@types+react@19.2.9_react@19.2.3/node_modules/react-markdown)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$remark$2d$gfm__$5b$external$5d$__$28$remark$2d$gfm$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remark$2d$gfm$40$4$2e$0$2e$1$2f$node_modules$2f$remark$2d$gfm$29$__ = __turbopack_context__.i("[externals]/remark-gfm [external] (remark-gfm, esm_import, [project]/node_modules/.pnpm/remark-gfm@4.0.1/node_modules/remark-gfm)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$remark$2d$breaks__$5b$external$5d$__$28$remark$2d$breaks$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remark$2d$breaks$40$4$2e$0$2e$0$2f$node_modules$2f$remark$2d$breaks$29$__ = __turbopack_context__.i("[externals]/remark-breaks [external] (remark-breaks, esm_import, [project]/node_modules/.pnpm/remark-breaks@4.0.0/node_modules/remark-breaks)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SEO$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SEO.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$markdown__$5b$external$5d$__$28$react$2d$markdown$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$markdown$40$10$2e$1$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$markdown$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$remark$2d$gfm__$5b$external$5d$__$28$remark$2d$gfm$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remark$2d$gfm$40$4$2e$0$2e$1$2f$node_modules$2f$remark$2d$gfm$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$remark$2d$breaks__$5b$external$5d$__$28$remark$2d$breaks$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remark$2d$breaks$40$4$2e$0$2e$0$2f$node_modules$2f$remark$2d$breaks$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$markdown__$5b$external$5d$__$28$react$2d$markdown$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$markdown$40$10$2e$1$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$markdown$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$remark$2d$gfm__$5b$external$5d$__$28$remark$2d$gfm$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remark$2d$gfm$40$4$2e$0$2e$1$2f$node_modules$2f$remark$2d$gfm$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$remark$2d$breaks__$5b$external$5d$__$28$remark$2d$breaks$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remark$2d$breaks$40$4$2e$0$2e$0$2f$node_modules$2f$remark$2d$breaks$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
function DiaryPage({ diary }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // fallback 时显示加载
    if (router.isFallback) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/pages/cozydiary/[diary].tsx",
            lineNumber: 21,
            columnNumber: 12
        }, this);
    }
    if (!diary) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            children: "Diary not found"
        }, void 0, false, {
            fileName: "[project]/pages/cozydiary/[diary].tsx",
            lineNumber: 25,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SEO$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: `${diary.title} - KuromiPiPi | KKuromiPiPi`
            }, void 0, false, {
                fileName: "[project]/pages/cozydiary/[diary].tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "container",
                style: {
                    padding: "1rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        buttons: [
                            // { label: "HOME", href: "/" },
                            // { label: "POSTS", href: "/posts" },
                            {
                                label: "COZYDIARY",
                                href: "/cozydiary"
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/pages/cozydiary/[diary].tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    diary.cover && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: "1rem"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                            src: diary.cover,
                            alt: diary.title,
                            style: {
                                maxHeight: "400px",
                                objectFit: "cover",
                                width: "50%",
                                // height: "250px",
                                aspectRatio: "1 / 1",
                                borderRadius: "16px",
                                marginBottom: "1rem"
                            }
                        }, void 0, false, {
                            fileName: "[project]/pages/cozydiary/[diary].tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/cozydiary/[diary].tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        style: {
                            color: "var(--color-gray-400)",
                            marginBottom: "1rem"
                        },
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$date$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["formatDate"])(diary.date)
                    }, void 0, false, {
                        fileName: "[project]/pages/cozydiary/[diary].tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        style: {
                            fontSize: "1.7rem",
                            marginBottom: "2rem"
                        },
                        children: diary.title
                    }, void 0, false, {
                        fileName: "[project]/pages/cozydiary/[diary].tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$MdContent$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].mdContent,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$markdown__$5b$external$5d$__$28$react$2d$markdown$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$markdown$40$10$2e$1$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$markdown$29$__["default"], {
                            remarkPlugins: [
                                __TURBOPACK__imported__module__$5b$externals$5d2f$remark$2d$gfm__$5b$external$5d$__$28$remark$2d$gfm$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remark$2d$gfm$40$4$2e$0$2e$1$2f$node_modules$2f$remark$2d$gfm$29$__["default"],
                                __TURBOPACK__imported__module__$5b$externals$5d2f$remark$2d$breaks__$5b$external$5d$__$28$remark$2d$breaks$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remark$2d$breaks$40$4$2e$0$2e$0$2f$node_modules$2f$remark$2d$breaks$29$__["default"]
                            ],
                            children: diary.content
                        }, void 0, false, {
                            fileName: "[project]/pages/cozydiary/[diary].tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/cozydiary/[diary].tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/cozydiary/[diary].tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
const getStaticPaths = async ()=>{
    const diaries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$diary$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getAllDiaries"])(); // 读取 CozyDiary 文件夹所有日记
    const paths = diaries.map((d)=>({
            params: {
                diary: d.slug
            }
        }));
    return {
        paths,
        fallback: false
    };
};
const getStaticProps = async ({ params })=>{
    const slug = params?.diary;
    const diary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$diary$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getDiaryBySlug"])(slug);
    return {
        props: {
            diary
        }
    };
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0c90b5a0._.js.map