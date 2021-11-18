import React from 'react';
import { Text, StyleSheet } from '@react-pdf/renderer';

export const IntroText = () => (
  <>
    <Text style={styles.text}>
      I have been working on large-scale software products for over 5 years. I
      have worked in teams of various sizes and understand the demands of Agile
      frameworks. I have worked in cross-functional and multi-cultural teams,
      which members are from USA, England, Finland, Germany, and Pakistan. Have
      a huge amount of experience teaching the newcomers and junior developers.
    </Text>
    <Text style={styles.text}>
      I always do my best to solve problems and/or provide useful and flexible
      solutions in an accurate and timely manner. I enjoy learning something
      new, overcoming hardships, co-operating with team members. I am a team
      player, who can always provide accurate and useful solutions, which can be
      easily supported in the future.
    </Text>
    <Text style={styles.text}>
      My main strength is the ability to adapt to new products, ideas,
      situations, and work environments.
    </Text>
  </>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    fontFamily: 'Lato',
    paddingBottom: 10,
  },
});
