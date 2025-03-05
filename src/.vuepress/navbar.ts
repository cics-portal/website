import { navbar } from "vuepress-theme-hope";

export default navbar([
    {
        text: "Articles",
        link: "/article/",
        icon: "newspaper",
    },

    {
        text: "Webinar",
        link: "/webinar/",
        icon: "tv",
    },
    {
        text: "Member",
        link: "/member/member",
        icon: "users",
    },
    {
        text: "About",
        link: "/about/about",
        icon: "circle-info",
    },
    {
        text: "Demo",
        link: "/demo/",
        icon: "star",
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
]);
