import * as React from 'react';
import { Link, PageProps } from 'gatsby';

import { Seo } from '../components/Seo';
import * as styles from './404.module.less';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <>
      <Seo title="404: Not Found" />
      <h1>404: Not Found</h1>

      <article>
        <header>
          <div className={styles.container}>
            <h1 className={styles.title}>404</h1>
            <p className="description">
              You just hit a route that doesn&#39;t exist... the sadness.
            </p>
          </div>
        </header>

        <section>
          <div className={styles.container}>
            <Link to="/">
              <span>Go Back to Home Page</span>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
};

export default NotFoundPage;

