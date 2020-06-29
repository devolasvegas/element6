const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\ryanm\\Desktop\\element6\\src\\pages\\404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\ryanm\\Desktop\\element6\\src\\pages\\index.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("C:\\Users\\ryanm\\Desktop\\element6\\src\\templates\\blog-post.js")))
}

