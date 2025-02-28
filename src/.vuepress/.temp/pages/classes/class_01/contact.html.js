import comp from "C:/Users/muysengly/Desktop/my_github/cics/src/.vuepress/.temp/pages/classes/class_01/contact.html.vue"
const data = JSON.parse("{\"path\":\"/classes/class_01/contact.html\",\"title\":\"Contact\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Contact\",\"icon\":\"envolope\",\"date\":\"2024-12-12T00:00:00.000Z\",\"home\":true,\"heroText\":\"\",\"tagline\":\"\",\"description\":\"Author bla bla bla Coauthor bla bla bla Member bla bla bla\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"Author\",\"slug\":\"author\",\"link\":\"#author\",\"children\":[]},{\"level\":2,\"title\":\"Coauthor\",\"slug\":\"coauthor\",\"link\":\"#coauthor\",\"children\":[]},{\"level\":2,\"title\":\"Member\",\"slug\":\"member\",\"link\":\"#member\",\"children\":[]}],\"readingTime\":{\"minutes\":0.08,\"words\":24},\"filePathRelative\":\"classes/class_01/contact.md\",\"localizedDate\":\"December 12, 2024\",\"excerpt\":\"<h2>Author</h2>\\n<p>bla bla bla</p>\\n<h2>Coauthor</h2>\\n<p>bla bla bla</p>\\n<h2>Member</h2>\\n<p>bla bla bla</p>\\n\",\"autoDesc\":true}")
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
