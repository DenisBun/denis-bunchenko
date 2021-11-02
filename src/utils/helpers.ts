import { Subject } from 'rxjs';

export function getSimplifiedPosts(posts, options = {}) {
  return posts.map((post) => ({
    id: post.node.id,
    date: post.node.frontmatter.date,
    slug: post.node.fields.slug,
    tags: post.node.frontmatter.tags,
    categories: post.node.frontmatter.categories,
    title: post.node.frontmatter.title,
    description: post.node.frontmatter.description,
    ...(options.thumbnails && {
      thumbnail: post.node.frontmatter.thumbnail.childImageSharp.fixed,
    }),
  }));
}

export function getCategoriesFromPosts(posts) {
  return posts
    .reduce((acc, post) => {
      return [...new Set([...acc, ...(post.categories || [])])];
    }, [])
    .sort();
}

export function slugify(string) {
  return (
    string &&
    string
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x) => x.toLowerCase())
      .join('-')
  );
}

export function getPostsByCategories(posts, categories) {
  const categoriesMap = {};
  categories.forEach((category) => {
    categoriesMap[category] = [];
  });

  posts.forEach((post) => {
    post.categories.forEach((category) => {
      categoriesMap[category] = [
        ...categoriesMap[category],
        {
          title: post.title,
          slug: post.slug,
        },
      ];
    });
  });
  return categoriesMap;
}

export function appendComments(commentBox) {
  const commentScript = document.createElement('script');
  const theme =
    localStorage.getItem('theme') === 'dark' ? 'github-dark' : 'github-light';

  commentScript.async = true;
  commentScript.src = 'https://utteranc.es/client.js';
  commentScript.setAttribute('repo', 'AwesomeDevDen/blog-comments');
  commentScript.setAttribute('issue-term', 'pathname');
  commentScript.setAttribute('id', 'utterances');
  commentScript.setAttribute('theme', theme);
  commentScript.setAttribute('crossorigin', 'anonymous');

  if (commentBox && commentBox.current) {
    commentBox.current.appendChild(commentScript);
  }
}

export function updateCommentsTheme(currentTheme) {
  const message = {
    type: 'set-theme',
    theme: currentTheme === 'dark' ? 'github-dark' : 'github-light',
  };
  const utterances = document.querySelector('iframe');
  utterances?.contentWindow?.postMessage(message, 'https://utteranc.es');
}

export const hasWindow = typeof window !== 'undefined';

export const toggleBackgroundColor = (theme) => {
  document.body.style.backgroundColor = theme === 'light' ? 'white' : '#181a1b';
};

export const getMainClass = (theme) => `theme ${theme}`;

export const themeSubject = new Subject<'light' | 'dark'>();
