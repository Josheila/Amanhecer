(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/BlogListControls.tsx [client] (ecmascript, next/dynamic entry, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "static/chunks/components_BlogListControls_tsx_8932939d._.js",
  "static/chunks/components_BlogListControls_tsx_7e7ca02b._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/components/BlogListControls.tsx [client] (ecmascript, next/dynamic entry)");
    });
});
}),
"[project]/components/BlogListPagination.tsx [client] (ecmascript, next/dynamic entry, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  {
    "path": "static/chunks/styles_Pagination_module_d5a0aaec.css",
    "included": [
      "[project]/styles/Pagination.module.css [client] (css)"
    ]
  },
  "static/chunks/_45139ebc._.js",
  "static/chunks/components_BlogListPagination_tsx_7e7ca02b._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/components/BlogListPagination.tsx [client] (ecmascript, next/dynamic entry)");
    });
});
}),
]);