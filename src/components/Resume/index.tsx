import React from 'react';
import { Font, Page, View, Document, StyleSheet } from '@react-pdf/renderer';

import { Experience } from './Experience';
import { LeftColumn } from './LeftColumn';
import { IntroText } from './IntroText';
import { AdditionalInfo } from './AdditionalInfo';

// preventing hyphenation
Font.registerHyphenationCallback((word) => [word]);

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
    <Page size={props.size}>
      <View style={styles.container}>
        <LeftColumn />
        <View style={styles.mainSectionContainer}>
          <IntroText />
          <Experience />
          <AdditionalInfo />
        </View>
      </View>
    </Page>
  );
};

export default ({ size }) => {
  return (
    <Document
      keywords="denis bunchenko, resume, software engineer"
      subject="The resume of Denis Bunchenko"
      author="Denis Bunchenko"
      title="Resume"
    >
      <Resume size={size} />
    </Document>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  mainSectionContainer: {
    flex: 1,
    paddingTop: 30,
    paddingRight: 30,
    paddingLeft: 30,
    '@media max-width: 400': {
      paddingTop: 10,
      paddingLeft: 0,
    },
  },
});
