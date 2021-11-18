import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

import { List, Item } from './shared/List';
import { Title } from './shared/Title';

const experienceData = [
  {
    company: 'EPAM Systems',
    date: '2016-2020',
    projects: [
      {
        name: 'REFINITIV',
        description:
          'Refinitiv provides financial software and risk solutions - delivering news, information and analytics, enabling transactions, and connecting the global community.',
        stack: [
          'Angular',
          'NgRx',
          'RxJS',
          'REFINITIV Enterprise tools (Material UI, State Management libraries)',
        ],
        responsibilities: [
          'Leading the stream of 5 people with straight customer communication',
          'Implementation of various platroms for monitoring different types of boands and loans in real time',
          'Optimizing application render time (~2 seconds)',
          'Implementation of the caching strategy for the critical data via IndexedDB with the help of Angular interceptors',
        ],
      },
      {
        name: 'Consumer Reports',
        description:
          'Unbiased ratings and reviews for 9,000+ products and services',
        stack: ['React', 'Redux', 'WordPress', 'JQuery'],
        responsibilities: [
          'Project structure reorganization',
          'Migration from JQuery and vanilla JS to React with Redux',
          'Optimizing processes of different streams by introducing Agile methodology to the customer',
        ],
      },
      {
        name: 'MAXDOME',
        description: 'German streaming platform.',
        stack: [
          'TypeScript',
          'React',
          'GraphQL',
          'Apollo',
          'Styled Components',
          'StoryBook',
        ],
        responsibilities: [
          'Straight customer communication',
          'Migration from Redux to Apollo Client',
          'Improving code review process with introduction of code review best practices and precommit hooks',
          'Optimization of the Webpack bundle size',
        ],
      },
      {
        name: 'Examinator',
        description:
          'Project for determination of the English level for students',
        stack: [
          'TypeScript',
          'React',
          'Redux',
          'Redux-Thunk',
          'Jest',
          'Enzyme',
          'Material UI',
          'NodeJS',
        ],
        responsibilities: [
          'Implementation of the various English tests with statistics and tracking options',
          'Improving test coverage with unit tests',
          'Implementation of the responsive layout based on Z eplin',
          'Performance improvements',
        ],
      },
    ],
  },
  {
    company: 'Military Academy of the Republic of Belarus',
    date: '2020-2021',
    projects: [
      {
        name: 'Military Service',
        description:
          'Serving in the mandatory Belarusian army IT-squadron. Full-time working as a Team Lead of a project of 5 people',
        stack: ['Angular', 'NgXs', 'RxJS', 'Angular Material'],
        responsibilities: [
          'Customer communication',
          'Tasks estimation and delegation',
          'Conflict solving and clarification processes',
          'High-level project architecture',
          'Performance optimizations',
        ],
      },
    ],
  },
];

const ProjectEntry = ({ name, description, stack, responsibilities }) => (
  <View>
    <Text style={styles.projectName}>{name}</Text>
    <Text style={styles.projectSectionHeadline}>Description</Text>
    <Text style={styles.projectDescription}>{description}</Text>
    <Text style={styles.projectSectionHeadline}>Stack</Text>
    <Text style={styles.projectStack}>{stack.join(', ')}</Text>
    <Text style={styles.projectSectionHeadline}>Responsibilities</Text>
    <List>
      {responsibilities.map((responsibility, i) => (
        <Item key={i} style={styles.detailContainer}>
          {`${responsibility};`}
        </Item>
      ))}
    </List>
  </View>
);

const CompanyEntry = ({ company, date, projects }) => (
  <View style={styles.entryContainer}>
    <View style={styles.headerContainer}>
      <View style={styles.leftColumn}>
        <Text style={styles.title}>{company}</Text>
      </View>
      <View style={styles.rightColumn}>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
    {projects.map(({ name, description, stack, responsibilities }, index) => (
      <ProjectEntry
        key={index}
        name={name}
        description={description}
        stack={stack}
        responsibilities={responsibilities}
      />
    ))}
  </View>
);

export const Experience = () => (
  <View style={styles.experienceContainer}>
    <Title>Employment History</Title>
    {experienceData.map(({ company, date, projects }) => (
      <CompanyEntry
        company={company}
        date={date}
        projects={projects}
        key={company}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  experienceContainer: {
    marginTop: 20,
  },
  entryContainer: {
    marginBottom: 10,
  },
  date: {
    fontSize: 11,
    fontFamily: 'Lato Italic',
  },
  detailContainer: {
    flexDirection: 'row',
  },
  detailLeftColumn: {
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
  },
  detailRightColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  bulletPoint: {
    fontSize: 10,
  },
  details: {
    fontSize: 10,
    fontFamily: 'Lato',
  },
  headerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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
  title: {
    fontSize: 14,
    color: '#1c77c3',
    textDecoration: 'none',
    fontFamily: 'Lato Bold',
  },
  projectSectionHeadline: {
    textDecoration: 'underline',
    fontSize: 10,
    color: 'black',
    fontFamily: 'Lato',
    marginBottom: 5,
  },
  projectName: {
    fontSize: 12,
    color: 'black',
    fontFamily: 'Lato Bold',
    marginBottom: 10,
    marginTop: 15,
  },
  projectDescription: {
    fontSize: 10,
    color: 'black',
    fontFamily: 'Lato',
    marginBottom: 10,
  },
  projectStack: {
    fontSize: 10,
    color: 'black',
    fontFamily: 'Lato',
    marginBottom: 10,
  },
});
