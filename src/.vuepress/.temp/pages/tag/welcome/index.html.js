import comp from "C:/Users/muysengly/Desktop/my_github/cics/src/.vuepress/.temp/pages/tag/welcome/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/welcome/\",\"title\":\"Tag: Welcome\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Tag: Welcome\",\"dir\":{\"index\":false},\"index\":false,\"feed\":false,\"sitemap\":false,\"blog\":{\"type\":\"category\",\"name\":\"Welcome\",\"key\":\"tag\"},\"layout\":\"BlogCategory\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
