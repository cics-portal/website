import comp from "C:/Users/muysengly/Desktop/my_github/cics/src/.vuepress/.temp/pages/demo/002/001_template.html.vue"
const data = JSON.parse("{\"path\":\"/demo/002/001_template.html\",\"title\":\"2.1. Template\",\"lang\":\"en-US\",\"frontmatter\":{\"author\":\"Sengly MUY\",\"sticky\":false,\"star\":false,\"footer\":false,\"copyright\":false,\"index\":true,\"breadcrumb\":true,\"contributors\":false,\"watermark\":{\"width\":200,\"height\":200,\"content\":\"Your content\",\"opacity\":0.5},\"title\":\"2.1. Template\",\"icon\":\"star\",\"category\":[\"Welcome\"],\"tag\":[\"Welcome\"],\"date\":\"2024-12-10T00:00:00.000Z\",\"order\":1,\"gitInclude\":[\"001_template.html\"]},\"headers\":[{\"level\":2,\"title\":\"This is the header template\",\"slug\":\"this-is-the-header-template\",\"link\":\"#this-is-the-header-template\",\"children\":[]}],\"readingTime\":{\"minutes\":0.23,\"words\":69},\"filePathRelative\":\"demo/002/001_template.md\",\"localizedDate\":\"December 10, 2024\",\"excerpt\":\"<h2>This is the header template</h2>\\n<p>001_template.html</p>\\n\"}")
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
