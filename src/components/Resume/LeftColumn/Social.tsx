import React from 'react';
import { Text, View, StyleSheet, Link } from '@react-pdf/renderer';

import { List, Item } from '../shared/List';
import { Title } from '../shared/Title';

const socialLinks = [
  { title: 'LinkedIn', href: 'https://www.linkedin.com/in/denis-bunchenko/' },
  { title: 'Medium', href: 'https://medium.com/@den.on.by' },
  { title: 'GitHub', href: 'https://github.com/AwesomeDevDen' },
];

export const Social = () => (
  <View>
    <Title>Social</Title>
    {socialLinks.map((link) => (
      <Link src={link.href} style={styles.link} key={link.title}>
        {link.title}
      </Link>
    ))}
  </View>
);

const styles = StyleSheet.create({
  link: {
    fontFamily: 'Lato',
    fontSize: 10,
    marginBottom: 10,
    color: '#1c77c3',
  },
});
