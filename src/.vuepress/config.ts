import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
    theme,

    base: "/cics/",

    locales: {
        "/": {
            lang: "en-US",
            title: "Home",
            description: "Cambodia Information and Communication Society",
            head: [["link", { rel: "shortcut icon", href: "favicon.ico" }]],
        },
    },
});
