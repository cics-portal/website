import { navbar } from "vuepress-theme-hope";

export default navbar([
    {
        text: "Articles",
        link: "/article/",
        icon: "newspaper",
    },
    // {
    //     text: "Classes",
    //     icon: "book",
    //     children: [
    //         {
    //             text: "Class_01",
    //             link: "/classes/class_01/",
    //             icon: "book",
    //         },
    //         {
    //             text: "Class_02",
    //             link: "/classes/class_02/",
    //             icon: "book",
    //         },
    //     ],
    // },
    {
        text: "Webinar",
        link: "/webinar/",
        icon: "tv",
    },
    {
        text: "About",
        link: "/about/about",
        icon: "address-card",
    },
    {
        text: "Contact",
        link: "/contact/contact",
        icon: "envelope",
    },
    {
        text: "Demo",
        link: "/demo/",
        icon: "star",
    },
]);
