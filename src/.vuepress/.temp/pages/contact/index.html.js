import comp from "C:/Users/muysengly/Desktop/my_github/cics/src/.vuepress/.temp/pages/contact/index.html.vue"
const data = JSON.parse("{\"path\":\"/contact/\",\"title\":\"Contact\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Contact\",\"article\":false,\"feed\":false,\"sitemap\":false,\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
