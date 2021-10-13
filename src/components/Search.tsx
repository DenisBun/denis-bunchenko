import React, { useState, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useFlexSearch } from 'react-use-flexsearch';
import * as queryString from 'query-string';
import { useLocation, navigate } from '@reach/router';

import searchIcon from '../images/nav-search.png';
import { Posts } from './Posts/Posts';

import * as styles from './Search.module.less';

export const Search = ({ data }) => {
  const location = useLocation();
  const searchRef = useRef(null);
  const { search } = queryString.parse(location.search);

  const [query, setQuery] = useState(search || '');

  const { localSearchPages } = useStaticQuery(graphql`
    query {
      localSearchPages {
        index
        store
      }
    }
  `);

  const results = useFlexSearch(
    query,
    localSearchPages.index,
    localSearchPages.store
  );

  return (
    <>
      <div className={styles.searchBar}>
        <input
          ref={searchRef}
          id="search"
          type="search"
          className={styles.searchInput}
          placeholder="Start typing to search..."
          value={query}
          onChange={(e) => {
            navigate(
              e.target.value ? `/blog/?search=${e.target.value}` : '/blog'
            );
            setQuery(e.target.value);
          }}
        />
        <img
          className={styles.searchIcon}
          src={searchIcon}
          alt="Search"
          onClick={() => searchRef.current.focus()}
        />
      </div>
      <section>
        {query ? (
          results.length > 0 ? (
            <Posts data={results} showYears query={query} />
          ) : (
            <p style={{ marginTop: '2rem' }}>
              Sorry, nothing matched that search.
            </p>
          )
        ) : (
          <Posts data={data} showYears />
        )}
      </section>
    </>
  );
};
