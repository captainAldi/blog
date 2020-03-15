// .vuepress/config.js

module.exports = {
  

  // Title of your website
  title: 'Aldi Blog',

  // Description of your website
  description: 'This is my blog',

  // Language of your website
  locales: {
    '/': {
      lang: 'en-US',
    },
  },

  //head
  head: [
    [
      "script",
      {
        "data-ad-client": "ca-pub-6631243362768566",
        async: true,
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      }
    ],
    ['link', { rel: 'icon', href: 'https://i.ibb.co/rpy4dNP/icon.png' }]
  ],

  // Theme to use
  theme: 'meteorlxy',

  //Plugin
  plugins: ['@vuepress/medium-zoom'],

  // Theme config
  themeConfig: {
    // Language of this theme. See the [Theme Language] section below.
    lang: 'en-US',

    // Personal infomation (delete the fields if you don't have / don't want to display)
    personalInfo: {
      // Nickname
      nickname: 'Aldi',

      // Introduction of yourself (HTML supported)
      description: 'Happy Coding<br/>Happy Life',

      // Email
      email: 'renaldiyamato@gmail.com',

      // Your location
      location: 'Jambi City, Indonesia',

      // Your organization
      organization: 'UNAMA',

      // Your avatar image
      // Set to external link
      avatar: 'https://i.ibb.co/2Fw8d39/web-programming.png',
      // Or put into `.vuepress/public` directory. E.g. `.vuepress/public/img/avatar.jpg`
      // avatar: '/img/avatar.jpg',

      // Accounts of SNS
      sns: {
        // Github account and link
        github: {
          account: 'captainaldi',
          link: 'https://github.com/captainaldi',
        },

        // Facebook account and link
        facebook: {
          account: 'Renaldi Yulvianda',
          link: 'https://www.facebook.com/renaldiyulvianda',
        },

        // LinkedIn account and link
        linkedin: {
          account: 'Renaldi Yulvianda',
          link: 'https://www.linkedin.com/in/renaldi-yulvianda-818512186/',
        },

        // Twitter account and link
        twitter: {
          account: 'Renaldi Yulvianda',
          link: 'https://twitter.com/captain_aldi',
        },

        // Medium account and link
        medium: {
          account: 'Renaldi Yulvianda',
          link: 'https://medium.com/@renaldiyamato',
        },

        // Instagram account and link
        instagram: {
          account: 'Renaldi Yulvianda',
          link: 'https://www.instagram.com/renaldiyulvianda/',
        },

        // Docker Hub account and link
        docker: {
          account: 'Renaldi Yulvianda',
          link: 'https://hub.docker.com/u/captainaldi',
        },
      },
    },

    // Header Config (Optional)
    header: {
      // The background of the header. You can choose to use an image, or to use random pattern (geopattern)
      background: {
        // URL of the background image. If you set the URL, the random pattern will not be generated, and the `useGeo` will be ignored.
        url: 'https://i.ibb.co/CMHDwPf/header-2.jpg',

        // Use random pattern. If you set it to `false`, and you don't set the image URL, the background will be blank.
        useGeo: true,
      },

      // show title in the header or not
      showTitle: false,
    },

    // Footer Config (Optional)
    footer: {
      // Show 'Powered by VuePress' or not (enable it to support VuePress)
      poweredBy: true,

      // Show the theme that you are using (enable it to support this theme) (please do not disable it, haha)
      poweredByTheme: true,

      // Add your custom footer (HTML supported)
      custom: 'Copyright 2020-present <a href="https://github.com/captainaldi" target="_blank">captainAldi</a> | MIT License',
    },

    // Info Card Config (Optional)
    infoCard: {
      // The background of the info card's header. You can choose to use an image, or to use random pattern (geopattern)
      headerBackground: {
        // URL of the background image. If you set the URL, the random pattern will not be generated, and the `useGeo` will be ignored.
        url: 'https://i.ibb.co/KwNgk9M/header-3.jpg',

        // Use random pattern. If you set it to `false`, and you don't set the image URL, the background will be blank.
        useGeo: true,
      },
    },

    // Show the last updated time of your posts
    lastUpdated: true,

    // The content of your navbar links
    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false },
      { text: 'About', link: '/about/', exact: false },
      { text: 'Github', link: 'https://github.com/captainaldi/blog' },
    ],

    // Comments config. See the [Posts Comments] section below.
    comments: {
      owner: 'captainAldi',
      repo: 'captainAldi.github.io',
      clientId: 'ccb25d7b151174423efa',
      clientSecret: 'de898af1b28af3a8be9c2ec4e21bbb33c1531486',
    },

    // Pagination config (Optional)
    pagination: {
      perPage: 5,
    },

    // Default Pages (Optional, the default value of all pages is `true`)
    defaultPages: {
      // Allow theme to add Home page (url: /)
      home: true,
      // Allow theme to add Posts page (url: /posts/)
      posts: true,
    },
  },
}