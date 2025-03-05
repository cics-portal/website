import comp from "C:/Users/muysengly/Desktop/my_github/website/src/.vuepress/.temp/pages/demo/demo_and_feature/010.image.preview.html.vue"
const data = JSON.parse("{\"path\":\"/demo/demo_and_feature/010.image.preview.html\",\"title\":\"10. Image Preview\",\"lang\":\"en-US\",\"frontmatter\":{\"order\":10,\"title\":\"10. Image Preview\",\"icon\":\"image\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"Browse Mode\",\"slug\":\"browse-mode\",\"link\":\"#browse-mode\",\"children\":[]},{\"level\":2,\"title\":\"Customize Config\",\"slug\":\"customize-config\",\"link\":\"#customize-config\",\"children\":[]},{\"level\":2,\"title\":\"Demo\",\"slug\":\"demo\",\"link\":\"#demo\",\"children\":[]}],\"readingTime\":{\"minutes\":0.85,\"words\":256},\"filePathRelative\":\"demo/demo_and_feature/010.image.preview.md\",\"excerpt\":\"<p>By using [@vuepress/plugin-photo-swipe][photo-swipe], clicking images in pages will enter preview mode.</p>\\n<p>If you don't need this feature, you can set <code>plugins.photoSwipe: false</code> in theme options to disable it.</p>\\n\"}")
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
