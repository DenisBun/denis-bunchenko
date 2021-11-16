import { graphql, useStaticQuery } from 'gatsby';
import { Image, StyleSheet } from '@react-pdf/renderer';
import React from 'react';

export const Photo = () => {
  //   const data = useStaticQuery(graphql`
  //     query {
  //       allFile(filter: { name: { eq: "me" }, extension: { eq: "jpeg" } }) {
  //         nodes {
  //           publicURL
  //         }
  //       }
  //     }
  //   `);
  //   console.log(data);
  return <Image src={'https://via.placeholder.com/150'} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    marginBottom: 10,
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});
