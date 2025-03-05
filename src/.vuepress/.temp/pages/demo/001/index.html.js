import comp from "C:/Users/muysengly/Desktop/my_github/website/src/.vuepress/.temp/pages/demo/001/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/001/\",\"title\":\"Features & Demos\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Features & Demos\",\"index\":false,\"icon\":\"star\",\"category\":[\"Demo\"],\"order\":1,\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":13},\"filePathRelative\":\"demo/001/readme.md\",\"excerpt\":\"\"}")
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
