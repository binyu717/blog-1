module.exports = {
  title: '君の名は',
  description: '自从进入前端圈子以来，记录的一些自己所经历过的技术栈。',
  base: '/blog/',
  head: [
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `./favicon.ico` }]
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
          ['/base/html', '所见所闻之html'],
          ['/base/css', '所见所闻之css'],
          ['/base/js', '所见所闻之javascript'],
          ['/base/rules', '所见所闻之web开发规范'],
          ['/base/memory', '所见所闻之内存'],
          ['/base/network', '所见所闻之网络'],
          ['/base/optimize', '所见所闻之优化'],
          ['/base/compatible', '所见所闻之兼容']
        ]
      }
    ]
  }
}