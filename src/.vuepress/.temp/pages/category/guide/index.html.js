import comp from "C:/Users/muysengly/Desktop/my_github/cics/src/.vuepress/.temp/pages/category/guide/index.html.vue"
const data = JSON.parse("{\"path\":\"/category/guide/\",\"title\":\"Guide Category\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Guide Category\",\"dir\":{\"index\":false},\"index\":false,\"feed\":false,\"sitemap\":false,\"blog\":{\"type\":\"category\",\"name\":\"Guide\",\"key\":\"category\"},\"layout\":\"BlogCategory\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
