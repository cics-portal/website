import comp from "C:/Users/muysengly/Desktop/my_github/cics/src/.vuepress/.temp/pages/404.html.vue"
const data = JSON.parse("{\"path\":\"/404.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"layout\":\"NotFound\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.01,\"words\":3},\"filePathRelative\":null,\"excerpt\":\"<p>404 Not Found</p>\\n\"}")
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
