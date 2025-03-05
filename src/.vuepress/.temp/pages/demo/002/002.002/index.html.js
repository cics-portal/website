import comp from "C:/Users/muysengly/Desktop/my_github/website/src/.vuepress/.temp/pages/demo/002/002.002/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/002/002.002/\",\"title\":\"2.2. Apple\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"2.2. Apple\",\"index\":false,\"icon\":\"star\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.02,\"words\":7},\"filePathRelative\":\"demo/002/002.002/readme.md\",\"excerpt\":\"\"}")
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
