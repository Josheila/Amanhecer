self.__BUILD_MANIFEST = {
  "/moments": [
    "static/chunks/pages/moments.js"
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