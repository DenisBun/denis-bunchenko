import React from 'react';
import { Text, View, StyleSheet, Link } from '@react-pdf/renderer';

import { Title } from '../shared/Title';

const infoData = [
  { subtitle: 'Location', values: ['Minsk (Gomel), Belarus'] },
  { subtitle: 'Phone', values: ['(044) 595-56-85'] },
  {
    subtitle: 'Email',
    values: ['den.on.by@gmail.com', 'awesomedevdev@yandex.com'],
  },
  { subtitle: 'Primary Skill', values: ['UI/UX'] },
  { subtitle: 'Frameworks', values: ['React', 'React Native', 'Angular'] },
];

const LinkEntry = ({ value, isLast }) => (
  <Link
    src={`mailto:${value}`}
    style={isLast ? styles.linkWithExtraMargin : styles.link}
  >
    {value}
  </Link>
);

const TextEntry = ({ isLast, value }) => (
  <Text style={isLast ? styles.valueWithExtraMargin : styles.value} key={value}>
    {value}
  </Text>
);

export const Info = () => (
  <View style={styles.container}>
    <Title>Info</Title>
    {infoData.map((data, i) => (
      <View key={i}>
        <Text style={styles.subtitle}>{data.subtitle}</Text>
        {data.values.map((value, index) =>
          data.subtitle === 'Email' ? (
            <LinkEntry
              key={value}
              isLast={index === data.values.length - 1}
              value={value}
            />
          ) : (
            <TextEntry
              key={value}
              isLast={index === data.values.length - 1}
              value={value}
            />
          )
        )}
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: 'Lato Bold',
    fontSize: 12,
    marginBottom: 5,
  },
  value: {
    fontFamily: 'Lato',
    fontSize: 10,
  },
  valueWithExtraMargin: {
    fontFamily: 'Lato',
    fontSize: 10,
    marginBottom: 10,
  },
  link: {
    fontFamily: 'Lato',
    fontSize: 10,
    color: '#1c77c3',
    // textDecoration: 'none',
  },
  linkWithExtraMargin: {
    fontFamily: 'Lato',
    fontSize: 10,
    color: '#1c77c3',
    // textDecoration: 'none',
    marginBottom: 10,
  },
});
