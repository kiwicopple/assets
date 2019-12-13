/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: "Assets",
  tagline: "Fast and (sometimes) free images and fonts",
  url: "https://assets.copplest.one",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Assets",
      // logo: {
      //   alt: "Assets",
      //   src: "img/logo.svg"
      // },
      links: [
        { to: "docs/images/icons8", label: "Images", position: "left" },
        {
          href: "https://github.com/kiwicopple/assets",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: "Docs",
        //   items: [
        //     {
        //       label: "Docs",
        //       to: "docs/doc1"
        //     }
        //   ]
        // },
        // {
        //   title: "Community",
        //   items: [
        //     {
        //       label: "Discord",
        //       href: "https://discordapp.com/invite/docusaurus"
        //     }
        //   ]
        // },
        // {
        //   title: "Social",
        //   items: [
        //     {
        //       label: "Blog",
        //       to: "blog"
        //     }
        //   ]
        // }
      ],
      // logo: {
      //   alt: "Facebook Open Source Logo",
      //   src: "https://docusaurus.io/img/oss_logo.png",
      //   href: "https://opensource.facebook.com/"
      // },
      copyright: `Copyright © ${new Date().getFullYear()} `
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js")
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
