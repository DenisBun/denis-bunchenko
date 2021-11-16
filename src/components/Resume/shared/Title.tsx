import React from 'react';
import { Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lato Bold',
    fontSize: 14,
    marginBottom: 10,
    textTransform: 'uppercase',
    borderBottom: '1px solid black',
    paddingBottom: 5,
  },
});

export const Title = ({ children }) => (
  <Text style={styles.title}>{children}</Text>
);