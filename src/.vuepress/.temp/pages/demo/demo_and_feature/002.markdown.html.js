import comp from "C:/Users/muysengly/Desktop/my_github/website/src/.vuepress/.temp/pages/demo/demo_and_feature/002.markdown.html.vue"
const data = JSON.parse("{\"path\":\"/demo/demo_and_feature/002.markdown.html\",\"title\":\"2. Markdown Enhance\",\"lang\":\"en-US\",\"frontmatter\":{\"order\":2,\"title\":\"2. Markdown Enhance\",\"icon\":\"fab fa-markdown\",\"category\":[\"Guide\"],\"tag\":[\"Markdown\"],\"gitInclude\":[\"README.md\"]},\"headers\":[{\"level\":2,\"title\":\"Markdown Introduction\",\"slug\":\"markdown-introduction\",\"link\":\"#markdown-introduction\",\"children\":[]},{\"level\":2,\"title\":\"Markdown Config\",\"slug\":\"markdown-config\",\"link\":\"#markdown-config\",\"children\":[]},{\"level\":2,\"title\":\"Markdown Extension\",\"slug\":\"markdown-extension\",\"link\":\"#markdown-extension\",\"children\":[{\"level\":3,\"title\":\"VuePress Enhancement\",\"slug\":\"vuepress-enhancement\",\"link\":\"#vuepress-enhancement\",\"children\":[]},{\"level\":3,\"title\":\"Theme Enhancement\",\"slug\":\"theme-enhancement\",\"link\":\"#theme-enhancement\",\"children\":[]}]}],\"readingTime\":{\"minutes\":2.63,\"words\":790},\"filePathRelative\":\"demo/demo_and_feature/002.markdown.md\",\"excerpt\":\"<p>VuePress basically generate pages from Markdown files. So you can use it to generate documentation or blog sites easily.</p>\\n<p>You should create and write Markdown files, so that VuePress can convert them to different pages according to file structure.</p>\\n\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
