import comp from "C:/Users/muysengly/Desktop/my_github/website/src/.vuepress/.temp/pages/demo/demo_and_feature/003.page.html.vue"
const data = JSON.parse("{\"path\":\"/demo/demo_and_feature/003.page.html\",\"title\":\"3. Page Config\",\"lang\":\"en-US\",\"frontmatter\":{\"order\":3,\"title\":\"3. Page Config\",\"icon\":\"file\",\"author\":\"Ms.Hope\",\"date\":\"2020-01-01T00:00:00.000Z\",\"category\":[\"Guide\"],\"tag\":[\"Page config\",\"Guide\"],\"sticky\":true,\"star\":true,\"footer\":\"Footer content for test\",\"copyright\":\"No Copyright\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"Page Title\",\"slug\":\"page-title\",\"link\":\"#page-title\",\"children\":[]},{\"level\":2,\"title\":\"Page Information\",\"slug\":\"page-information\",\"link\":\"#page-information\",\"children\":[]},{\"level\":2,\"title\":\"Page Content\",\"slug\":\"page-content\",\"link\":\"#page-content\",\"children\":[]},{\"level\":2,\"title\":\"Components\",\"slug\":\"components\",\"link\":\"#components\",\"children\":[]}],\"readingTime\":{\"minutes\":0.97,\"words\":290},\"filePathRelative\":\"demo/demo_and_feature/003.page.md\",\"localizedDate\":\"January 1, 2020\",\"excerpt\":\"<p>Content before <code>more</code> comment is regarded as page excerpt.</p>\\n\"}")
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
