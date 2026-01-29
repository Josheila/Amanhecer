self.__BUILD_MANIFEST = {
  "/": [
    "static/chunks/pages/index.js"
  ],
  "/cozydiary": [
    "static/chunks/pages/cozydiary.js"
  ],
  "/moments": [
    "static/chunks/pages/moments.js"
  ],
  "/now": [
    "static/chunks/pages/now.js"
  ],
  "/posts": [
    "static/chunks/pages/posts.js"
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