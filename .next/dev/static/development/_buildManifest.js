self.__BUILD_MANIFEST = {
  "/": [
    "static/chunks/pages/index.js"
  ],
  "/cozydiary": [
    "static/chunks/pages/cozydiary.js"
  ],
  "/cozydiary/[diary]": [
    "static/chunks/pages/cozydiary/[diary].js"
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
    "/cozydiary",
    "/cozydiary/[diary]",
    "/moments",
    "/now",
    "/posts",
    "/posts/[slug]",
    "/tags",
    "/tags/[tag]"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()