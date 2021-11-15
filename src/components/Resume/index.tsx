import React from 'react';
import {
  Text,
  Font,
  Page,
  View,
  Image,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';

import { Header } from './Header';
import { Education } from './Education';
import { Experience } from './Experience';
import { Skills } from './Skills';

Font.register({
  family: 'Open Sans',
  src: `https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf`,
});

Font.register({
  family: 'Lato',
  src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`,
});

Font.register({
  family: 'Lato Italic',
  src: `https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf`,
});

Font.register({
  family: 'Lato Bold',
  src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`,
});

const Resume = (props) => {
  return (
    <Page {...props} style={styles.page}>
      <View style={styles.container}>
        <View style={styles.leftColumn}>
          <View style={styles.headerInfo}>
            <Image src={props.imageSrc} style={styles.image} />
            <Text style={styles.author}>Denis Bunchenko</Text>
            <Text style={styles.role}>Software Engineer</Text>
          </View>

          <Education />
          <Skills />
        </View>
        <Experience />
      </View>
    </Page>
  );
};

export default (props) => {
  return (
    <Document
      keywords="denis bunchenko, resume, software engineer"
      subject="The resume of Denis Bunchenko"
      author="Denis Bunchenko"
      title="Resume"
    >
      <Resume size="A4" imageSrc={props.imageSrc} />
      {/* <Resume orientation="landscape" size="A4" />
    <Resume size={[380, 1250]} /> */}
    </Document>
  );
};

const styles = StyleSheet.create({
  page: {
    // padding: 30,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    '@media max-width: 400': {
      flexDirection: 'column',
    },
  },
  image: {
    marginBottom: 10,
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  leftColumn: {
    padding: 30,
    backgroundColor: '#fbfbfbdd',
    flexDirection: 'column',
    width: 200,
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
  },
  role: {
    fontSize: 16,
    textAlign: 'center',
  },
});
