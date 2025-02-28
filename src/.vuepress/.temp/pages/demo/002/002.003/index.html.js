import comp from "C:/Users/muysengly/Desktop/my_github/cics/src/.vuepress/.temp/pages/demo/002/002.003/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/002/002.003/\",\"title\":\"2.3. Banana\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"2.3. Banana\",\"index\":false,\"icon\":\"star\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.02,\"words\":7},\"filePathRelative\":\"demo/002/002.003/readme.md\",\"excerpt\":\"\"}")
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
