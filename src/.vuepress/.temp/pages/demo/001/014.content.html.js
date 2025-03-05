import comp from "C:/Users/muysengly/Desktop/my_github/website/src/.vuepress/.temp/pages/demo/001/014.content.html.vue"
const data = JSON.parse("{\"path\":\"/demo/001/014.content.html\",\"title\":\"14. Content\",\"lang\":\"en-US\",\"frontmatter\":{\"order\":14,\"title\":\"14. Content\",\"icon\":\"pen\",\"dir\":{\"collapsible\":false,\"order\":2,\"link\":true},\"gitInclude\":[\"demo.snippet.md\"]},\"headers\":[{\"level\":2,\"title\":\"Demo\",\"slug\":\"demo\",\"link\":\"#demo\",\"children\":[{\"level\":3,\"title\":\"component\",\"slug\":\"component\",\"link\":\"#component\",\"children\":[]},{\"level\":3,\"title\":\"Footnote\",\"slug\":\"footnote\",\"link\":\"#footnote\",\"children\":[]},{\"level\":3,\"title\":\"Include files\",\"slug\":\"include-files\",\"link\":\"#include-files\",\"children\":[]},{\"level\":3,\"title\":\"Presentation\",\"slug\":\"presentation\",\"link\":\"#presentation\",\"children\":[]},{\"level\":3,\"title\":\"Tabs\",\"slug\":\"tabs\",\"link\":\"#tabs\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.43,\"words\":128},\"filePathRelative\":\"demo/001/014.content.md\",\"excerpt\":\"<p>The theme provides the following ways to enrich your content.</p>\\n<ul>\\n<li>Footnotes: Supplementary explanation of key content</li>\\n<li>Import files: Easily split or reuse files</li>\\n<li>Presentation: Show content</li>\\n</ul>\\n\"}")
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
