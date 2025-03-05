import comp from "C:/Users/muysengly/Desktop/my_github/website/src/.vuepress/.temp/pages/demo/002/002.002/4.html.vue"
const data = JSON.parse("{\"path\":\"/demo/002/002.002/4.html\",\"title\":\"Apple 4\",\"lang\":\"en-US\",\"frontmatter\":{\"icon\":\"star\",\"date\":\"2022-01-04T00:00:00.000Z\",\"category\":[\"Apple\",\"Fruit\"],\"tag\":[\"red\",\"big\",\"round\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.09,\"words\":27},\"filePathRelative\":\"demo/002/002.002/4.md\",\"localizedDate\":\"January 4, 2022\",\"excerpt\":\"\\n<h2>Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<p>Here is the content.</p>\\n\"}")
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
