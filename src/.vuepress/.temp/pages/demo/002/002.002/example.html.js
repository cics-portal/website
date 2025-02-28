import comp from "C:/Users/muysengly/Desktop/[my] github/blog/src/.vuepress/.temp/pages/demo/002/002.002/example.html.vue"
const data = JSON.parse("{\"path\":\"/demo/002/002.002/example.html\",\"title\":\"example\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"example\",\"icon\":\"star\",\"date\":\"2024-12-14T00:00:00.000Z\",\"description\":\"Hello\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"Hello\",\"slug\":\"hello\",\"link\":\"#hello\",\"children\":[]}],\"readingTime\":{\"minutes\":0.06,\"words\":18},\"filePathRelative\":\"demo/002/002.002/example.md\",\"localizedDate\":\"December 14, 2024\",\"excerpt\":\"<h2>Hello</h2>\\n\",\"autoDesc\":true}")
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
