import comp from "C:/Users/muysengly/Desktop/my_github/website/src/.vuepress/.temp/pages/demo/demo_and_feature/004.disable.html.vue"
const data = JSON.parse("{\"path\":\"/demo/demo_and_feature/004.disable.html\",\"title\":\"4. Disabling Layout\",\"lang\":\"en-US\",\"frontmatter\":{\"order\":4,\"title\":\"4. Disabling Layout\",\"icon\":\"gears\",\"category\":[\"Guide\"],\"tag\":[\"disable\"],\"navbar\":false,\"sidebar\":false,\"breadcrumb\":false,\"pageInfo\":false,\"contributors\":false,\"editLink\":false,\"lastUpdated\":false,\"prev\":false,\"next\":false,\"comment\":false,\"footer\":false,\"backtotop\":false,\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.27,\"words\":82},\"filePathRelative\":\"demo/demo_and_feature/004.disable.md\",\"excerpt\":\"<p>You can disable some function and layout on the page by setting the Frontmatter of the page.</p>\\n\"}")
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
