import comp from "C:/Users/muysengly/Desktop/my_github/website/src/.vuepress/.temp/pages/classes/index.html.vue"
const data = JSON.parse("{\"path\":\"/classes/\",\"title\":\"Classes\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Classes\",\"article\":false,\"feed\":false,\"sitemap\":false,\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
