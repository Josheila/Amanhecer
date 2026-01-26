self.__BUILD_MANIFEST = {
  "/about": [
    "static/chunks/pages/about.js"
  ],
  "/now": [
    "static/chunks/pages/now.js"
  ],
  "/posts": [
    "static/chunks/pages/posts.js"
  ],
  "/posts/[slug]": [
    "static/chunks/pages/posts/[slug].js"
  ],
  "__rewrites": {
    "afterFiles": [],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/",
    "/_app",
    "/_error",
    "/about",
    "/now",
    "/posts",
    "/posts/[slug]",
    "/tags",
    "/tags/[tag]"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()