import comp from "C:/Users/muysengly/Desktop/my_github/website/src/.vuepress/.temp/pages/demo/002/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/002/\",\"title\":\"2. Other Demo\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"2. Other Demo\",\"index\":false,\"icon\":\"star\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.03,\"words\":10},\"filePathRelative\":\"demo/002/readme.md\",\"excerpt\":\"\"}")
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
