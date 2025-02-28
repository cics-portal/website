export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"Welcome":{"path":"/category/welcome/","indexes":[0]},"Webinar":{"path":"/category/webinar/","indexes":[1,2,3,4,5,6]}}}},"tag":{"/":{"path":"/tag/","map":{"Welcome":{"path":"/tag/welcome/","indexes":[0]},"Webinar":{"path":"/tag/webinar/","indexes":[1,2,3,4,5,6]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

