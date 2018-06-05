module.exports = {
  title: '君の名は',
  description: '自从进入前端圈子以来，记录的一些自己所经历过的技术栈。',
  base: '/blog/',
  head: [
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/favicon.ico` }]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'vuepress', link: 'http://caibaojian.com/vuepress/' },
    ],
    sidebar: [
      {
        title: '基础',
        collapsable: true,
        children: [
          ['/base/html', '所见html']
        ]
      }
    ]
  }
}