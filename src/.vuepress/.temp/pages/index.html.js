import comp from "C:/Users/muysengly/Desktop/my_github/cics/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"logo.png\",\"heroText\":\"CICS\",\"tagline\":\"Cambodia Information and <br> Communication Society\",\"actions\":[{\"text\":\"Get Started\",\"link\":\"/get-started/\",\"icon\":\"signs-post\",\"type\":\"primary\"},{\"text\":\"Guide\",\"icon\":\"lightbulb\",\"link\":\"/guide/\"},{\"text\":\"Demos\",\"icon\":\"star\",\"link\":\"/demo/\"}],\"features\":[{\"title\":\"Demo Demo\",\"icon\":\"fab fa-markdown\",\"details\":\"Demo Demo\",\"link\":\"/\"},{\"title\":\"Demo Demo\",\"icon\":\"person-chalkboard\",\"details\":\"Demo Demo\",\"link\":\"/\"},{\"title\":\"Demo Demo\",\"icon\":\"object-group\",\"details\":\"Demo Demoand etc.\",\"link\":\"/\"},{\"title\":\"Demo Demo\",\"icon\":\"comment-dots\",\"details\":\"Demo Demo\",\"link\":\"/\"},{\"title\":\"Demo Demo\",\"icon\":\"circle-info\",\"details\":\"Demo Demo\",\"link\":\"/\"}],\"copyright\":false,\"footer\":\"Sengly MUY\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.35,\"words\":106},\"filePathRelative\":\"readme.md\",\"excerpt\":\"\"}")
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
