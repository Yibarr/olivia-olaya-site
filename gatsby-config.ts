import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Olivia Olaya`,
    description: `Olivia Olaya's personal portfolio site`,
    siteUrl: `https://oliviaolaya.art`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        description: `Olivia Olaya's personal portfolio site`,
        name: `Olivia Olaya portfolio`,
        short_name: `Olivia Olaya`,
        icon: './src/resources/images/heart.png',
        lang: `en`,
      },
    },
   {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Covered By Your Grace`,
            file: `https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&display=swap`,
          },
        ],
      },
    }
  ]
};

export default config;
