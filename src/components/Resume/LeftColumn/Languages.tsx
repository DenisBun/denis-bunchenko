import { View, Text, StyleSheet } from '@react-pdf/renderer';
import React from 'react';

import { Title } from '../shared/Title';

const languagesData = [
  { name: 'Russian', level: 'Native', points: 5 },
  { name: 'English', level: 'B2+', points: 4 },
];

const MAX_DOTS_AMOUNT = 5;

export const Languages = () => (
  <View style={styles.languagesWrapper}>
    <Title>Languages</Title>
    {languagesData.map((language) => (
      <View style={styles.language} key={language.name}>
        <Text>{`${language.name} (${language.level})`}</Text>
        <View style={styles.dotContainer}>
          {new Array(MAX_DOTS_AMOUNT)
            .fill(null)
            .fill(1, 0, language.points)
            .map((el, i) => (
              <View
                style={el === 1 ? styles.dot : styles.dotEmpty}
                key={i}
              ></View>
            ))}
        </View>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  languagesWrapper: {
    marginBottom: 20,
  },
  language: {
    fontFamily: 'Lato',
    fontSize: 10,
  },
  dotContainer: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 10,
  },
  dot: {
    height: 8,
    width: 8,
    backgroundColor: 'black',
    borderRadius: 50,
    marginRight: 5,
  },
  dotEmpty: {
    height: 8,
    width: 8,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 50,
    marginRight: 5,
  },
});
