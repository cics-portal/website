import comp from "C:/Users/muysengly/Desktop/my_github/website/src/.vuepress/.temp/pages/demo/001/007.cover.html.vue"
const data = JSON.parse("{\"path\":\"/demo/001/007.cover.html\",\"title\":\"7. Cover\",\"lang\":\"en-US\",\"frontmatter\":{\"order\":7,\"title\":\"7. Cover\",\"icon\":\"star\",\"cover\":\"/cover1.jpg\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"This is the cover layout\",\"slug\":\"this-is-the-cover-layout\",\"link\":\"#this-is-the-cover-layout\",\"children\":[]}],\"readingTime\":{\"minutes\":0.05,\"words\":14},\"filePathRelative\":\"demo/001/007.cover.md\",\"excerpt\":\"<h2>This is the cover layout</h2>\\n\"}")
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
