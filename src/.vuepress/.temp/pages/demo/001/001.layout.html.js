import comp from "C:/Users/muysengly/Desktop/my_github/website/src/.vuepress/.temp/pages/demo/001/001.layout.html.vue"
const data = JSON.parse("{\"path\":\"/demo/001/001.layout.html\",\"title\":\"1. Layout\",\"lang\":\"en-US\",\"frontmatter\":{\"order\":1,\"title\":\"1. Layout\",\"icon\":\"object-group\",\"category\":[\"Guide\"],\"tag\":[\"Layout\"],\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.35,\"words\":106},\"filePathRelative\":\"demo/001/001.layout.md\",\"excerpt\":\"<p>The layout contains:</p>\\n<ul>\\n<li><a href=\\\"https://theme-hope.vuejs.press/guide/layout/navbar.html\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Navbar</a></li>\\n<li><a href=\\\"https://theme-hope.vuejs.press/guide/layout/sidebar.html\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Sidebar</a></li>\\n<li><a href=\\\"https://theme-hope.vuejs.press/guide/layout/footer.html\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Footer</a></li>\\n</ul>\"}")
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
