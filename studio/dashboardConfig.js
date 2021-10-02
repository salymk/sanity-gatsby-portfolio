export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61586bfb9d23932692c99b9e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-e2oveyvv',
                  apiId: 'abeb4f5c-7aa1-46ed-b7a7-bda7742b7626'
                },
                {
                  buildHookId: '61586bfb19ab3e4e03fde65b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-mtv5w97q',
                  apiId: '4623c248-756c-4d8a-84f2-50b35db4b257'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/salymk/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-mtv5w97q.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
