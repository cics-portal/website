import comp from "C:/Users/muysengly/Desktop/my_github/website/src/.vuepress/.temp/pages/demo/demo_and_feature/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/demo_and_feature/\",\"title\":\"Features & Demos\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Features & Demos\",\"index\":false,\"icon\":\"star\",\"category\":[\"Demo\"],\"order\":1,\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":11},\"filePathRelative\":\"demo/demo_and_feature/readme.md\",\"excerpt\":\"\"}")
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
