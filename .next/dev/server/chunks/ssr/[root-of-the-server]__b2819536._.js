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
"[project]/lib/posts.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllPosts",
    ()=>getAllPosts,
    "getAllPostsMeta",
    ()=>getAllPostsMeta,
    "getPostBySlug",
    ()=>getPostBySlug
]);
// /lib/posts.ts
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$gray$2d$matter__$5b$external$5d$__$28$gray$2d$matter$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gray$2d$matter$40$4$2e$0$2e$3$2f$node_modules$2f$gray$2d$matter$29$__ = __turbopack_context__.i("[externals]/gray-matter [external] (gray-matter, cjs, [project]/node_modules/.pnpm/gray-matter@4.0.3/node_modules/gray-matter)");
;
;
;
const postsDirectory = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "posts");
let postsCache = null;
let postsMetaCache = null;
const postBySlugCache = new Map();
function getAllPostsMeta(tag) {
    if (postsMetaCache) {
        const cached = postsMetaCache;
        return tag ? cached.filter((post)=>post.tags.includes(tag)) : [
            ...cached
        ];
    }
    const filenames = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readdirSync(postsDirectory);
    let posts = filenames.filter((filename)=>filename.endsWith(".md")).map((filename)=>{
        const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(postsDirectory, filename);
        const fileContents = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(filePath, "utf8");
        const { data } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$gray$2d$matter__$5b$external$5d$__$28$gray$2d$matter$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gray$2d$matter$40$4$2e$0$2e$3$2f$node_modules$2f$gray$2d$matter$29$__["default"])(fileContents);
        return {
            slug: filename.replace(/\.md$/, ""),
            title: data.title,
            date: data.date,
            summary: data.summary,
            tags: data.tags || [],
            cover: data.cover || null
        };
    });
    if (tag) {
        posts = posts.filter((post)=>post.tags.includes(tag));
    }
    posts.sort((a, b)=>a.date < b.date ? 1 : -1);
    postsMetaCache = posts;
    return posts;
}
function getAllPosts(tag) {
    if (postsCache) {
        const cached = postsCache;
        return tag ? cached.filter((post)=>post.tags.includes(tag)) : [
            ...cached
        ];
    }
    const filenames = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readdirSync(postsDirectory);
    let posts = filenames.filter((filename)=>filename.endsWith(".md")).map((filename)=>{
        const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(postsDirectory, filename);
        const fileContents = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(filePath, "utf8");
        const { data, content } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$gray$2d$matter__$5b$external$5d$__$28$gray$2d$matter$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gray$2d$matter$40$4$2e$0$2e$3$2f$node_modules$2f$gray$2d$matter$29$__["default"])(fileContents);
        return {
            slug: filename.replace(/\.md$/, ""),
            title: data.title,
            date: data.date,
            summary: data.summary,
            tags: data.tags || [],
            cover: data.cover || null,
            content
        };
    });
    if (tag) {
        posts = posts.filter((post)=>post.tags.includes(tag));
    }
    // 👉 建议顺手按时间排一下
    posts.sort((a, b)=>a.date < b.date ? 1 : -1);
    postsCache = posts;
    return posts;
}
function getPostBySlug(slug) {
    if (postBySlugCache.has(slug)) {
        return postBySlugCache.get(slug) || null;
    }
    const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(postsDirectory, `${slug}.md`);
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(filePath)) return null;
    const fileContents = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(filePath, "utf8");
    const { data, content } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$gray$2d$matter__$5b$external$5d$__$28$gray$2d$matter$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gray$2d$matter$40$4$2e$0$2e$3$2f$node_modules$2f$gray$2d$matter$29$__["default"])(fileContents);
    const post = {
        slug,
        title: data.title,
        date: data.date,
        summary: data.summary,
        tags: data.tags || [],
        cover: data.cover || null,
        content
    };
    postBySlugCache.set(slug, post);
    return post;
}
}),
"[project]/lib/tags.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/tags.ts
__turbopack_context__.s([
    "tagMap",
    ()=>tagMap
]);
const tagMap = {
    daily: "にちじょうりょく",
    milestone: "O Especial",
    topic: "多谈谈问题",
    cheatsheet: "CheatSheet"
};
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
"[project]/styles/MdContent.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "mdContent": "MdContent-module__jlgNAa__mdContent",
});
}),
"[project]/styles/BlogList.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "cardContent": "BlogList-module__YLJmxG__cardContent",
  "cardDate": "BlogList-module__YLJmxG__cardDate",
  "cardGrid": "BlogList-module__YLJmxG__cardGrid",
  "cardImage": "BlogList-module__YLJmxG__cardImage",
  "cardItem": "BlogList-module__YLJmxG__cardItem",
  "cardTitle": "BlogList-module__YLJmxG__cardTitle",
  "coverBox": "BlogList-module__YLJmxG__coverBox",
  "coverImage": "BlogList-module__YLJmxG__coverImage",
  "coverWrapper": "BlogList-module__YLJmxG__coverWrapper",
  "current": "BlogList-module__YLJmxG__current",
  "dots": "BlogList-module__YLJmxG__dots",
  "iconButton": "BlogList-module__YLJmxG__iconButton",
  "link": "BlogList-module__YLJmxG__link",
  "listDate": "BlogList-module__YLJmxG__listDate",
  "listGrid": "BlogList-module__YLJmxG__listGrid",
  "listItem": "BlogList-module__YLJmxG__listItem",
  "listTitle": "BlogList-module__YLJmxG__listTitle",
  "next": "BlogList-module__YLJmxG__next",
  "pageNumber": "BlogList-module__YLJmxG__pageNumber",
  "pageNumbers": "BlogList-module__YLJmxG__pageNumbers",
  "prev": "BlogList-module__YLJmxG__prev",
  "viewSwitch": "BlogList-module__YLJmxG__viewSwitch",
});
}),
"[project]/lib/blur.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BLUR_DATA_URL",
    ()=>BLUR_DATA_URL
]);
const BLUR_DATA_URL = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><rect width='10' height='10' fill='%23eeeeee'/></svg>";
}),
"[project]/pages/posts/[slug].tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>PostPage,
    "getStaticPaths",
    ()=>getStaticPaths,
    "getStaticProps",
    ()=>getStaticProps
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
// /pages/posts/[slug].tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.4_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Header.tsx [ssr] (ecmascript)"); // 用 Header 组件
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$posts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/posts.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tags$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tags.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$date$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/date.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$remark$2d$gfm__$5b$external$5d$__$28$remark$2d$gfm$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remark$2d$gfm$40$4$2e$0$2e$1$2f$node_modules$2f$remark$2d$gfm$29$__ = __turbopack_context__.i("[externals]/remark-gfm [external] (remark-gfm, esm_import, [project]/node_modules/.pnpm/remark-gfm@4.0.1/node_modules/remark-gfm)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$MdContent$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/MdContent.module.css [ssr] (css module)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$remark$2d$breaks__$5b$external$5d$__$28$remark$2d$breaks$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remark$2d$breaks$40$4$2e$0$2e$0$2f$node_modules$2f$remark$2d$breaks$29$__ = __turbopack_context__.i("[externals]/remark-breaks [external] (remark-breaks, esm_import, [project]/node_modules/.pnpm/remark-breaks@4.0.0/node_modules/remark-breaks)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SEO$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SEO.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$BlogList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/BlogList.module.css [ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.4_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$markdown__$5b$external$5d$__$28$react$2d$markdown$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$markdown$40$10$2e$1$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$markdown$29$__ = __turbopack_context__.i("[externals]/react-markdown [external] (react-markdown, esm_import, [project]/node_modules/.pnpm/react-markdown@10.1.0_@types+react@19.2.9_react@19.2.3/node_modules/react-markdown)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$blur$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/blur.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$remark$2d$gfm__$5b$external$5d$__$28$remark$2d$gfm$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remark$2d$gfm$40$4$2e$0$2e$1$2f$node_modules$2f$remark$2d$gfm$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$remark$2d$breaks__$5b$external$5d$__$28$remark$2d$breaks$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remark$2d$breaks$40$4$2e$0$2e$0$2f$node_modules$2f$remark$2d$breaks$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$markdown__$5b$external$5d$__$28$react$2d$markdown$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$markdown$40$10$2e$1$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$markdown$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$remark$2d$gfm__$5b$external$5d$__$28$remark$2d$gfm$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remark$2d$gfm$40$4$2e$0$2e$1$2f$node_modules$2f$remark$2d$gfm$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$remark$2d$breaks__$5b$external$5d$__$28$remark$2d$breaks$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remark$2d$breaks$40$4$2e$0$2e$0$2f$node_modules$2f$remark$2d$breaks$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$markdown__$5b$external$5d$__$28$react$2d$markdown$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$markdown$40$10$2e$1$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$markdown$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
;
;
;
;
function PostPage({ post }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SEO$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: `${post.title} - KuromiPiPi | KKuromiPiPi`,
                description: post.summary
            }, void 0, false, {
                fileName: "[project]/pages/posts/[slug].tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        buttons: [
                            // { label: "HOME", href: "/" },
                            {
                                label: "POSTS",
                                href: "/posts"
                            },
                            // { label: "COZYDIARY", href: "/cozydiary" },
                            // { label: "MOMENTS", href: "/moments" },
                            {
                                label: "TAGS",
                                href: "/tags"
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/pages/posts/[slug].tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
                        children: [
                            post.cover && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$BlogList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].coverWrapper,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$BlogList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].coverBox,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: post.cover,
                                        alt: post.title,
                                        fill: true,
                                        sizes: "(max-width: 768px) 60vw, 30vw",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$BlogList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].coverImage,
                                        priority: true,
                                        placeholder: "blur",
                                        blurDataURL: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$blur$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["BLUR_DATA_URL"]
                                    }, void 0, false, {
                                        fileName: "[project]/pages/posts/[slug].tsx",
                                        lineNumber: 44,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/pages/posts/[slug].tsx",
                                    lineNumber: 43,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/pages/posts/[slug].tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "var(--color-gray-400)",
                                    fontSize: "16px",
                                    marginBottom: "1rem"
                                },
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$date$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["formatDate"])(post.date)
                            }, void 0, false, {
                                fileName: "[project]/pages/posts/[slug].tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                children: post.title
                            }, void 0, false, {
                                fileName: "[project]/pages/posts/[slug].tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$MdContent$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].mdContent,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$markdown__$5b$external$5d$__$28$react$2d$markdown$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$markdown$40$10$2e$1$2e$0_$40$types$2b$react$40$19$2e$2$2e$9_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$markdown$29$__["default"], {
                                    remarkPlugins: [
                                        __TURBOPACK__imported__module__$5b$externals$5d2f$remark$2d$gfm__$5b$external$5d$__$28$remark$2d$gfm$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remark$2d$gfm$40$4$2e$0$2e$1$2f$node_modules$2f$remark$2d$gfm$29$__["default"],
                                        __TURBOPACK__imported__module__$5b$externals$5d2f$remark$2d$breaks__$5b$external$5d$__$28$remark$2d$breaks$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remark$2d$breaks$40$4$2e$0$2e$0$2f$node_modules$2f$remark$2d$breaks$29$__["default"]
                                    ],
                                    children: post.content
                                }, void 0, false, {
                                    fileName: "[project]/pages/posts/[slug].tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/pages/posts/[slug].tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            post.tags && post.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: "2rem"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: "0.5rem",
                                        flexWrap: "wrap"
                                    },
                                    children: post.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/tags/${tag}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                style: {
                                                    padding: "0.25rem 0.5rem",
                                                    borderRadius: "5px",
                                                    // backgroundColor: "#f0f0f0",
                                                    cursor: "pointer",
                                                    fontSize: "0.85rem",
                                                    color: "#706F6C",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "0.2rem"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icon/pound.svg",
                                                        alt: "#",
                                                        width: 16,
                                                        height: 16,
                                                        style: {
                                                            width: "1em",
                                                            height: "1em"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/posts/[slug].tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 23
                                                    }, this),
                                                    " ",
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tags$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["tagMap"][tag] || tag
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/posts/[slug].tsx",
                                                lineNumber: 81,
                                                columnNumber: 21
                                            }, this)
                                        }, tag, false, {
                                            fileName: "[project]/pages/posts/[slug].tsx",
                                            lineNumber: 80,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/pages/posts/[slug].tsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/pages/posts/[slug].tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/posts/[slug].tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/posts/[slug].tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
const getStaticPaths = async ()=>{
    const posts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$posts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getAllPosts"])();
    const paths = posts.map((post)=>({
            params: {
                slug: post.slug
            }
        }));
    return {
        paths,
        fallback: false
    };
};
const getStaticProps = async ({ params })=>{
    const slug = params?.slug;
    const post = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$posts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getPostBySlug"])(slug);
    return {
        props: {
            post
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

//# sourceMappingURL=%5Broot-of-the-server%5D__b2819536._.js.map