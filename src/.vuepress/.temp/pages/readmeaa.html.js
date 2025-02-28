import comp from "C:/Users/muysengly/Desktop/my_github/cics/src/.vuepress/.temp/pages/readmeaa.html.vue"
const data = JSON.parse("{\"path\":\"/readmeaa.html\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"portfolio\":true,\"title\":\"Home\",\"icon\":\"home\",\"name\":\"Sengly MUY\",\"avatar\":\"logo.png\",\"titles\":[\"Hello World!\"],\"footer\":false,\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.06,\"words\":18},\"filePathRelative\":\"readmeaa.md\",\"excerpt\":\"\"}")
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
