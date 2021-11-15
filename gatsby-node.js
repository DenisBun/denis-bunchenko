const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.tsx`);
  // Define a template for tag page
  const tagPage = path.resolve(`./src/templates/tag.tsx`);

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              id
              frontmatter {
                title
                tags
                template
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    );
    return;
  }

  // const posts = result.data.allMarkdownRemark.nodes
  const all = result.data.allMarkdownRemark.edges;
  const posts = all.filter(
    (post) => post.node.frontmatter.template === 'blog-post'
  );
  // const pages = all.filter((post) => post.node.frontmatter.template === 'page');
  const tagSet = new Set();
  const categorySet = new Set();

  // =====================================================================================
  // Posts
  // =====================================================================================

  posts.forEach((post, i) => {
    const previous = i === posts.length - 1 ? null : posts[i + 1].node;
    const next = i === 0 ? null : posts[i - 1].node;

    if (post.node.frontmatter.tags) {
      post.node.frontmatter.tags.forEach((tag) => {
        tagSet.add(tag);
      });
    }

    if (post.node.frontmatter.categories) {
      post.node.frontmatter.categories.forEach((category) => {
        categorySet.add(category);
      });
    }

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });

  // =====================================================================================
  // Pages
  // =====================================================================================

  // pages.forEach((page) => {
  //   createPage({
  //     path: page.node.fields.slug,
  //     component: pagePage,
  //     context: {
  //       slug: page.node.fields.slug,
  //     },
  //   })
  // })

  // =====================================================================================
  // Tags
  // =====================================================================================

  const tagList = Array.from(tagSet);
  tagList.forEach((tag) => {
    createPage({
      path: `/tags/${slugify(tag)}/`,
      component: tagPage,
      context: {
        tag,
      },
    });
  });

  // =====================================================================================
  // Categories
  // =====================================================================================

  // const categoryList = Array.from(categorySet)
  // categoryList.forEach((category) => {
  //   createPage({
  //     path: `/categories/${slugify(category)}/`,
  //     component: categoryPage,
  //     context: {
  //       category,
  //     },
  //   })
  // })
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `);
};


// =====================================================================================
// Webpack Extended Config
// =====================================================================================
exports.onCreateWebpackConfig = ({ stage, actions, plugins, loaders }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        stream: require.resolve('stream-browserify'),
        zlib: require.resolve('browserify-zlib'),
        path: require.resolve('path-browserify'),
      },
      fallback: { fs: false, crypto: false },
    },
    plugins: [
      plugins.provide({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer'],
      }),
    ],
  })
  // https://github.com/diegomura/react-pdf/issues/1029#issuecomment-849420658
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /canvas/,
            use: loaders.null(),
          },
          {
            test: /pdfjs-dist/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
};

// Helpers
function slugify(str) {
  return (
    str &&
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x) => x.toLowerCase())
      .join('-')
  );
}