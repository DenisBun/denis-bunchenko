import { View, StyleSheet, Text, Link } from '@react-pdf/renderer';
import React from 'react';

import { Title } from './shared/Title';

export const AdditionalInfo = () => {
  return (
    <View style={styles.additionalInfoContainer}>
      <Title>Additional Info</Title>
      <View>
        <View style={styles.headerContainer}>
          <View style={styles.leftColumn}>
            <Text style={styles.title}>
              Mentor of the{' '}
              <Link src={'https://www.it-academy.by/'} style={styles.link}>
                IT-academy
              </Link>
            </Text>
          </View>
          <View style={styles.rightColumn}>
            <Text style={styles.date}>2019-2020</Text>
          </View>
          <Text>Core JS, ES6 and beyond, React</Text>
        </View>
      </View>
      <View>
        <View style={styles.headerContainer}>
          <View style={styles.leftColumn}>
            <Text style={styles.title}>
              Mentor of the{' '}
              <Link src={'https://rs.school/'} style={styles.link}>
                RS School
              </Link>
            </Text>
          </View>
          <View style={styles.rightColumn}>
            <Text style={styles.date}>2019-2020</Text>
          </View>
          <Text>
            Data Structures with JavaScript; JS Scope; Functions; NPM / Node.js
            basics; Inheritance in JavaScript. ES6 Classes; Photoshop Basics;
            JavaScript Arrays; Position. Floats. Semantics. CSS3; DOM; DOM
            Events; Modules in JS; Event Loop. Animation; HTTP / HTTP2 / AJAX /
            Promises; Webpack. Assets management. Project Structure;
          </Text>
        </View>
      </View>
      <View>
        <View style={styles.headerContainer}>
          <View style={styles.leftColumn}>
            <Text style={styles.title}>
              Co-creator and co-owner of the IOS applications
            </Text>
          </View>
          <Text>WDGS</Text>
          <Text>PRST</Text>
        </View>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  additionalInfoContainer: {
    marginTop: 20,
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
  link: {
    fontFamily: 'Lato',
    fontSize: 10,
    color: '#1c77c3',
    // textDecoration: 'none',
  },
});
