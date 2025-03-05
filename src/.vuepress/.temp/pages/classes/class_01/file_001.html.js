import comp from "C:/Users/muysengly/Desktop/my_github/website/src/.vuepress/.temp/pages/classes/class_01/file_001.html.vue"
const data = JSON.parse("{\"path\":\"/classes/class_01/file_001.html\",\"title\":\"File_01\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"File_01\",\"icon\":\"star\",\"date\":\"2024-12-12T00:00:00.000Z\",\"heroText\":\"\",\"tagline\":\"\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"Author\",\"slug\":\"author\",\"link\":\"#author\",\"children\":[]},{\"level\":2,\"title\":\"Coauthor\",\"slug\":\"coauthor\",\"link\":\"#coauthor\",\"children\":[]},{\"level\":2,\"title\":\"Member\",\"slug\":\"member\",\"link\":\"#member\",\"children\":[]}],\"readingTime\":{\"minutes\":0.07,\"words\":22},\"filePathRelative\":\"classes/class_01/file_001.md\",\"localizedDate\":\"December 12, 2024\",\"excerpt\":\"<h2>Author</h2>\\n<p>bla bla bla</p>\\n<h2>Coauthor</h2>\\n<p>bla bla bla</p>\\n<h2>Member</h2>\\n<p>bla bla bla</p>\\n\"}")
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
