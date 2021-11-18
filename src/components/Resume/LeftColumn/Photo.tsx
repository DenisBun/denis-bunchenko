import { graphql, useStaticQuery } from 'gatsby';
import { Image, StyleSheet } from '@react-pdf/renderer';
import React, { useContext } from 'react';

import { ResumePhotoContext } from '../../../pages/resume';

export const Photo = () => {
  const resumePhoto = useContext(ResumePhotoContext);
  return <Image src={resumePhoto} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    marginBottom: 10,
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});
