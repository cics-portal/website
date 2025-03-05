import comp from "C:/Users/muysengly/Desktop/my_github/website/src/.vuepress/.temp/pages/demo/template/template_contact.html.vue"
const data = JSON.parse("{\"path\":\"/demo/template/template_contact.html\",\"title\":\"Template Contact\",\"lang\":\"en-US\",\"frontmatter\":{\"order\":3,\"icon\":\"star\",\"title\":\"Template Contact\",\"date\":\"2024-12-10T00:00:00.000Z\",\"description\":\"This is the header template File not found\",\"gitInclude\":[\"001_template.html\"]},\"headers\":[{\"level\":2,\"title\":\"This is the header template\",\"slug\":\"this-is-the-header-template\",\"link\":\"#this-is-the-header-template\",\"children\":[]}],\"readingTime\":{\"minutes\":0.23,\"words\":69},\"filePathRelative\":\"demo/template/template_contact.md\",\"localizedDate\":\"December 10, 2024\",\"excerpt\":\"<h2>This is the header template</h2>\\n<p>File not found</p>\\n\",\"autoDesc\":true}")
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
