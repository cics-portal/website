import comp from "C:/Users/muysengly/Desktop/my_github/website/src/.vuepress/.temp/pages/demo/002/tomato.html.vue"
const data = JSON.parse("{\"path\":\"/demo/002/tomato.html\",\"title\":\"Tomato\",\"lang\":\"en-US\",\"frontmatter\":{\"cover\":\"/cover2.jpg\",\"icon\":\"star\",\"date\":\"2022-01-12T00:00:00.000Z\",\"category\":[\"Vegetable\"],\"tag\":[\"red\",\"round\"],\"star\":true,\"sticky\":true,\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.1,\"words\":30},\"filePathRelative\":\"demo/002/tomato.md\",\"localizedDate\":\"January 12, 2022\",\"excerpt\":\"\\n<h2>Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<p>Here is the content.</p>\\n\"}")
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
