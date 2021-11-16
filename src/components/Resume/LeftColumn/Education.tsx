import { View, Text, StyleSheet } from '@react-pdf/renderer';
import React from 'react';

import { Title } from '../shared/Title';

export const Education = () => (
  <View style={styles.educationWrapper}>
    <Title>Education</Title>
    <View>
      <Text style={styles.subtitle}>
        Information Technology Engineer (Bachelor's degree)
      </Text>
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
          <Text style={styles.title}>GSU named after F.Skorina</Text>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.date}>2014-2018</Text>
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  educationWrapper: {
    marginBottom: 20,
  },
  subtitle: {
    fontFamily: 'Lato Bold',
    fontSize: 12,
    marginBottom: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  leftColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  rightColumn: {
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'flex-end',
    justifySelf: 'flex-end',
  },
  date: {
    fontSize: 8,
    fontFamily: 'Lato Italic',
  },
  title: {
    fontSize: 10,
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'Lato',
  },
});
