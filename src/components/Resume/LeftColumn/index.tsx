import { Text, View, StyleSheet, Link } from '@react-pdf/renderer';
import React from 'react';

import { Info } from './Info';
import { Social } from './Social';
import { Photo } from './Photo';
import { Languages } from './Languages';
import { Education } from './Education';

export const LeftColumn = () => {
  return (
    <View style={styles.leftColumn}>
      <View style={styles.headerInfo}>
        <Photo />
        <Link src="http://denis.bunchenko.com/" style={styles.author}>
          Denis Bunchenko
        </Link>
        <Text style={styles.role}>Software Engineer</Text>
      </View>

      <Info />
      <Education />
      <Languages />
      <Social />
    </View>
  );
};

const styles = StyleSheet.create({
  leftColumn: {
    padding: 30,
    backgroundColor: '#fbfbfbdd',
    flexDirection: 'column',
    width: 230,
    paddingRight: 30,
    '@media max-width: 400': {
      width: '100%',
      paddingRight: 0,
    },
    '@media orientation: landscape': {
      width: 200,
    },
  },
  headerInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  author: {
    fontSize: 20,
    fontFamily: 'Lato Bold',
    textAlign: 'center',
    color: '#1c77c3',
  },
  role: {
    fontSize: 16,
    textAlign: 'center',
  },
});
