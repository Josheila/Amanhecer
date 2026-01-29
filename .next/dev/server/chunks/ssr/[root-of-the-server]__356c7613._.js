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
"[project]/styles/AvatarSection.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "avatar": "AvatarSection-module__6tOn5G__avatar",
  "avatarSection": "AvatarSection-module__6tOn5G__avatarSection",
  "avatarText": "AvatarSection-module__6tOn5G__avatarText",
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
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$AvatarSection$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/AvatarSection.module.css [ssr] (css module)");
;
;
;
function AvatarSection() {
    const [avatar, setAvatar] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("/avatar.jpg");
    // 点击切换
    const toggleAvatar = ()=>{
        setAvatar((prev)=>prev === "/avatar.jpg" ? "/avatar_2.jpg" : "/avatar.jpg");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$AvatarSection$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].avatarSection,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                src: avatar,
                alt: "Avatar",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$AvatarSection$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].avatar,
                onClick: toggleAvatar
            }, void 0, false, {
                fileName: "[project]/components/AvatarSection.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$AvatarSection$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].avatarText,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        children: "KuromiPiPi 🐱"
                    }, void 0, false, {
                        fileName: "[project]/components/AvatarSection.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: "quero amanhecer, entardecer e anoitecer com você :)"
                    }, void 0, false, {
                        fileName: "[project]/components/AvatarSection.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/AvatarSection.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AvatarSection.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
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
"[project]/styles/BlogList.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "cardContent": "BlogList-module__YLJmxG__cardContent",
  "cardDate": "BlogList-module__YLJmxG__cardDate",
  "cardGrid": "BlogList-module__YLJmxG__cardGrid",
  "cardItem": "BlogList-module__YLJmxG__cardItem",
  "cardTitle": "BlogList-module__YLJmxG__cardTitle",
  "coverImage": "BlogList-module__YLJmxG__coverImage",
  "coverImageDiary": "BlogList-module__YLJmxG__coverImageDiary",
  "coverWrapper": "BlogList-module__YLJmxG__coverWrapper",
  "current": "BlogList-module__YLJmxG__current",
  "dots": "BlogList-module__YLJmxG__dots",
  "iconButton": "BlogList-module__YLJmxG__iconButton",
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
"[project]/components/BlogList.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogList
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$date$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/date.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$BlogList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/BlogList.module.css [ssr] (css module)");
;
;
;
;
function BlogList({ items, pageSize = 9, defaultView = "card" }) {
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(defaultView);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(1);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        // 判断是否移动端
        const handleResize = ()=>setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return ()=>window.removeEventListener("resize", handleResize);
    }, []);
    const totalPages = Math.ceil(items.length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const paginatedItems = items.slice(startIndex, startIndex + pageSize);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$BlogList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].viewSwitch,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                        src: "/icon/view_gallery.svg",
                        alt: "卡片视图",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$BlogList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].iconButton,
                        onClick: ()=>setViewMode("card")
                    }, void 0, false, {
                        fileName: "[project]/components/BlogList.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                        src: "/icon/view_list.svg",
                        alt: "列表视图",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$BlogList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].iconButton,
                        onClick: ()=>setViewMode("list")
                    }, void 0, false, {
                        fileName: "[project]/components/BlogList.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/BlogList.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: viewMode === "card" ? __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$BlogList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].cardGrid : __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$BlogList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].listGrid,
                style: viewMode === "card" && isMobile ? {
                    gridTemplateColumns: "repeat(2, 1fr)"
                } : undefined,
                children: paginatedItems.map((item)=>{
                    if (!("slug" in item)) return null;
                    const href = "summary" in item ? `/posts/${item.slug}` : `/cozydiary/${item.slug}`;
                    return viewMode === "card" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                        href: href,
                        style: {
                            textDecoration: "none",
                            color: "inherit"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$BlogList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].cardItem,
                            children: [
                                item.cover && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                    src: item.cover,
                                    alt: item.title
                                }, void 0, false, {
                                    fileName: "[project]/components/BlogList.tsx",
                                    lineNumber: 77,
                                    columnNumber: 32
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$BlogList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].cardContent,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$BlogList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].cardTitle,
                                            children: item.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/BlogList.tsx",
                                            lineNumber: 79,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$BlogList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].cardDate,
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$date$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["formatDate"])(item.date)
                                        }, void 0, false, {
                                            fileName: "[project]/components/BlogList.tsx",
                                            lineNumber: 80,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BlogList.tsx",
                                    lineNumber: 78,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BlogList.tsx",
                            lineNumber: 76,
                            columnNumber: 15
                        }, this)
                    }, item.slug, false, {
                        fileName: "[project]/components/BlogList.tsx",
                        lineNumber: 71,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                        href: href,
                        style: {
                            textDecoration: "none",
                            color: "inherit"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$BlogList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].listItem,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$BlogList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].listTitle,
                                    children: item.title
                                }, void 0, false, {
                                    fileName: "[project]/components/BlogList.tsx",
                                    lineNumber: 91,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$BlogList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].listDate,
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$date$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["formatDate"])(item.date)
                                }, void 0, false, {
                                    fileName: "[project]/components/BlogList.tsx",
                                    lineNumber: 92,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BlogList.tsx",
                            lineNumber: 90,
                            columnNumber: 15
                        }, this)
                    }, item.slug, false, {
                        fileName: "[project]/components/BlogList.tsx",
                        lineNumber: 85,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/BlogList.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$BlogList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].pageNumbers,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$BlogList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].pageNumber} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$BlogList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].prev}`,
                            onClick: ()=>setCurrentPage((p)=>Math.max(p - 1, 1)),
                            disabled: currentPage === 1,
                            children: "«"
                        }, void 0, false, {
                            fileName: "[project]/components/BlogList.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/BlogList.tsx",
                        lineNumber: 102,
                        columnNumber: 11
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
                                    fileName: "[project]/components/BlogList.tsx",
                                    lineNumber: 121,
                                    columnNumber: 21
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$BlogList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].pageNumber,
                                    onClick: ()=>setCurrentPage(page),
                                    children: page
                                }, void 0, false, {
                                    fileName: "[project]/components/BlogList.tsx",
                                    lineNumber: 125,
                                    columnNumber: 21
                                }, this)
                            }, page, false, {
                                fileName: "[project]/components/BlogList.tsx",
                                lineNumber: 119,
                                columnNumber: 17
                            }, this);
                        }
                        if (page === currentPage - 2 || page === currentPage + 2) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$BlogList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].pageNumber} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$BlogList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].dots}`,
                                    children: "…"
                                }, void 0, false, {
                                    fileName: "[project]/components/BlogList.tsx",
                                    lineNumber: 138,
                                    columnNumber: 19
                                }, this)
                            }, page, false, {
                                fileName: "[project]/components/BlogList.tsx",
                                lineNumber: 137,
                                columnNumber: 17
                            }, this);
                        }
                        return null;
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$BlogList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].pageNumber} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$BlogList$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].next}`,
                            onClick: ()=>setCurrentPage((p)=>Math.min(p + 1, totalPages)),
                            disabled: currentPage === totalPages,
                            children: "»"
                        }, void 0, false, {
                            fileName: "[project]/components/BlogList.tsx",
                            lineNumber: 148,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/BlogList.tsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/BlogList.tsx",
                lineNumber: 101,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/BlogList.tsx",
        lineNumber: 37,
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
function getAllPostsMeta(tag) {
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
    return posts;
}
function getAllPosts(tag) {
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
    return posts;
}
function getPostBySlug(slug) {
    const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(postsDirectory, `${slug}.md`);
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(filePath)) return null;
    const fileContents = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(filePath, "utf8");
    const { data, content } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$gray$2d$matter__$5b$external$5d$__$28$gray$2d$matter$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gray$2d$matter$40$4$2e$0$2e$3$2f$node_modules$2f$gray$2d$matter$29$__["default"])(fileContents);
    return {
        slug,
        title: data.title,
        date: data.date,
        summary: data.summary,
        tags: data.tags || [],
        cover: data.cover || null,
        content
    };
}
}),
"[project]/pages/posts.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PostsPage,
    "getStaticProps",
    ()=>getStaticProps
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Header.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AvatarSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AvatarSection.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BlogList$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BlogList.tsx [ssr] (ecmascript)"); // ✅ 改成 BlogList
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$posts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/posts.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SEO$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SEO.tsx [ssr] (ecmascript)");
;
;
;
;
;
;
function PostsPage({ posts }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SEO$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: "POSTS - KuromiPiPi"
            }, void 0, false, {
                fileName: "[project]/pages/posts.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        // style={{ justifyContent: "center" }}
                        buttons: [
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
                            // { label: "TAGS", href: "/tags" },
                            {
                                label: "NOW",
                                href: "/now"
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/pages/posts.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AvatarSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/pages/posts.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BlogList$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        items: posts
                    }, void 0, false, {
                        fileName: "[project]/pages/posts.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/posts.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
const getStaticProps = async ()=>{
    const posts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$posts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getAllPostsMeta"])(); // 读取 posts 目录下所有 Markdown 元数据
    return {
        props: {
            posts
        }
    };
};
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__356c7613._.js.map