import comp from "C:/Users/muysengly/Desktop/[my] github/blog/src/.vuepress/.temp/pages/contact_me.html.vue"
const data = JSON.parse("{\"path\":\"/contact_me.html\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"portfolio\":true,\"title\":\"Home\",\"icon\":\"phone\",\"name\":\"Sengly MUY\",\"avatar\":\"avata.png\",\"titles\":[\"The AI Engineering.\"],\"footer\":false,\"description\":\"Description Address: Telegram: Email: Phone Number: Experience aaa bbb\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"Description\",\"slug\":\"description\",\"link\":\"#description\",\"children\":[{\"level\":3,\"title\":\"Experience\",\"slug\":\"experience\",\"link\":\"#experience\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.09,\"words\":28},\"filePathRelative\":\"contact_me.md\",\"excerpt\":\"<h2>Description</h2>\\n<p>Address:</p>\\n<p>Telegram:</p>\\n<p>Email:</p>\\n<p>Phone Number:</p>\\n<h3>Experience</h3>\\n<ul>\\n<li>\\n<p>aaa</p>\\n</li>\\n<li>\\n<p>bbb</p>\\n</li>\\n</ul>\\n\",\"autoDesc\":true}")
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
