import comp from "C:/Users/muysengly/Desktop/my_github/website/src/.vuepress/.temp/pages/demo/002/002.002/2.html.vue"
const data = JSON.parse("{\"path\":\"/demo/002/002.002/2.html\",\"title\":\"Apple 2\",\"lang\":\"en-US\",\"frontmatter\":{\"icon\":\"star\",\"date\":\"2022-01-02T00:00:00.000Z\",\"category\":[\"Apple\"],\"tag\":[\"red\",\"big\",\"round\"],\"star\":true,\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.11,\"words\":34},\"filePathRelative\":\"demo/002/002.002/2.md\",\"localizedDate\":\"January 2, 2022\",\"excerpt\":\"\\n<p>A apple article being stared.</p>\\n\"}")
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
