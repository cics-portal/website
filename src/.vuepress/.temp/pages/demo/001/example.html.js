import comp from "C:/Users/muysengly/Desktop/[my] github/blog/src/.vuepress/.temp/pages/demo/001/example.html.vue"
const data = JSON.parse("{\"path\":\"/demo/001/example.html\",\"title\":\"15. Include VUE\",\"lang\":\"en-US\",\"frontmatter\":{\"order\":15,\"title\":\"15. Include VUE\",\"icon\":\"star\",\"date\":\"2024-12-14T00:00:00.000Z\",\"description\":\"Hello\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"Hello\",\"slug\":\"hello\",\"link\":\"#hello\",\"children\":[]}],\"readingTime\":{\"minutes\":0.07,\"words\":22},\"filePathRelative\":\"demo/001/example.md\",\"localizedDate\":\"December 14, 2024\",\"excerpt\":\"<h2>Hello</h2>\\n\",\"autoDesc\":true}")
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
