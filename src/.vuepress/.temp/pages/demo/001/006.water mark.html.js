import comp from "C:/Users/muysengly/Desktop/my_github/website/src/.vuepress/.temp/pages/demo/001/006.water mark.html.vue"
const data = JSON.parse("{\"path\":\"/demo/001/006.water%20mark.html\",\"title\":\"6. Water-Mark\",\"lang\":\"en-US\",\"frontmatter\":{\"order\":6,\"title\":\"6. Water-Mark\",\"icon\":\"water\",\"watermark\":{\"width\":200,\"height\":200,\"content\":\"Your content\",\"opacity\":0.5},\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"This is the watermark layout\",\"slug\":\"this-is-the-watermark-layout\",\"link\":\"#this-is-the-watermark-layout\",\"children\":[]}],\"readingTime\":{\"minutes\":0.08,\"words\":23},\"filePathRelative\":\"demo/001/006.water mark.md\",\"excerpt\":\"<h2>This is the watermark layout</h2>\\n\"}")
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
