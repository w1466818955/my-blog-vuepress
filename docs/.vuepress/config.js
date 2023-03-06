module.exports = {
    lang: 'zh-CN',
    // 网页标题
    title: 'Ygm的个人博客',
    // 网页介绍
    description: '你不知道的JavaScript',
    // 打包路径和名字
    // base: "/my-blog/",
    // dest: "static",
    // 网页icon
    head: [['link', { rel: 'icon', href: '/img/img.png' }]],
    markdown: {
        lineNumbers: true,
    },
    serviceWorker: true, // 是否开启PWA
    // 顶部导航
    themeConfig: {
        logo: '/img/img.png', //网页顶端导航栏左上角的图标
        nav: [
            { text: '首页', link: '/' },
            {
                text: '前端',
                items: [
                    { text: 'HTML', link: '/frontend/html/one' },
                    { text: 'CSS', link: '/frontend/css/one' },
                    { text: 'JavaScript', link: '/frontend/js/one' },
                ],
            },
            { text: 'vue系列', link: '/frontend/vue/one' },
            { text: 'react系列', link: '/frontend/react/one' },
            { text: 'uniapp', link: '/frontend/uniapp/one' },
            { text: '项目问题bug', link: '/question-bug/one' },
            { text: '其他', link: '/frontend/other/one' },
            { text: '留言板', link: '/message/' },
        ],

        // 侧边栏
        sidebar: [
            {
                title: 'HTML系列', // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 2, // 可选的, 默认值是 1
                children: [
                    { title: '一、HTML基础', path: '/frontend/html/one' },
                    { title: '二、HTML元素、属性详解', path: '/frontend/html/tow' },
                    { title: '三、HTML表单详解', path: '/frontend/html/three' },
                ],
                initialOpenGroupIndex: -1, // 可选的, 默认值是 0
            },
            {
                title: 'CSS系列', // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 2, // 可选的, 默认值是 1
                children: [
                    { title: '一、CSS盒模型', path: '/frontend/css/one' },
                    { title: '二、css选择器有哪些？优先级？哪些属性可以继承？', path: '/frontend/css/tow' },
                    { title: '三、说说em/px/rem/vh/vw区别?', path: '/frontend/css/three' },
                    { title: '四、css加载会造成阻塞吗?', path: '/frontend/css/four' },
                ],
            },
            {
                title: 'JS系列', // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 2, // 可选的, 默认值是 1
                children: [
                    { title: '一、for...in和for...of的区别', path: '/frontend/js/one' },
                    { title: '二、js中的Enum枚举类型数据', path: '/frontend/js/tow' },
                    { title: '三、什么是事件循环?为什么会分为宏任务和微任务?', path: '/frontend/js/three' },
                    { title: '四、项目中所遇到的js封装', path: '/frontend/js/four' },
                ],
            },
            {
                title: 'vue系列', // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 2, // 可选的, 默认值是 1
                children: [{ title: '一、axios封装', path: '/frontend/vue/one' }],
            },
            {
                title: 'react系列', // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 2, // 可选的, 默认值是 1
                children: [{ title: 'react', path: '/frontend/react/one' }],
            },
            {
                title: 'uniapp', // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 2, // 可选的, 默认值是 1
                children: [
                    { title: '一、uniapp版本更新', path: '/frontend/uniapp/one' },
                    { title: '二、实现h5跳转app指定url或者app跳转app指定页面', path: '/frontend/uniapp/tow' },
                ],
            },
            {
                title: '其他', // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 2, // 可选的, 默认值是 1
                children: [
                    { title: '一、MarkDown语法', path: '/frontend/other/one' },
                    { title: '二、git提交规范', path: '/frontend/other/tow' },
                ],
            },
        ],
    },
    // 引入插件
    plugins: ['@vuepress/plugin-back-to-top'],
};
