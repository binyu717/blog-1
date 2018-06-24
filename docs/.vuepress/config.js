module.exports = {
  title: '君の名は',
  description: '自从进入前端圈子以来，记录的一些自己所经历过的技术栈。',
  base: '/blog/',
  head: [
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `./favicon.ico` }]
  ],
  themeConfig: {
    nav: [
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
          ['/base/system', '所见所闻之计算机系统'],
          ['/base/network', '所见所闻之网络'],
          ['/base/browser', '所见所闻之浏览器内核'],
          ['/base/optimize', '所见所闻之优化'],
          ['/base/compatible', '所见所闻之兼容'],
          ['/base/data', '所见所闻之数据结构'],
          ['/base/algorithm', '所见所闻之算法'],
          ['/base/design', '所见所闻之设计模式'],
          ['/base/mobile', '所见所闻之H5开发'],
          ['/base/bug', '所见所闻之bug']
        ]
      },
      {
        title: '高级',
        children: [
          ['/senior/jquery', '所见所闻之jquery'],
          ['/senior/vue', '所见所闻之vue'],
        ]
      }
    ]
  }
}