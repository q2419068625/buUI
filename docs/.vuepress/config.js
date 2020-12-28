module.exports = {
    base:'/buUI/',
    title: 'buUI',
    description: '一个好用的UI框架',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/guide/' },
            { text: '交流', link: 'https://google.com' },
        ],
        sidebar: [
            { 
                title:'入门',
                children:[
                    '/install/',
                    '/get_start/',
                ]
            },
          {
            title: '组件',
            children: [ 
                '/components/button',
                '/components/tabs',
                '/components/input',
                '/components/grid',
                '/components/toast',
                '/components/layout',
                '/components/popover',
            ],
          }
        ]
      }
  }