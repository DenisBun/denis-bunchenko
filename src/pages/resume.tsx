import { PDFDownloadLink } from '@react-pdf/renderer';
import { graphql, PageProps } from 'gatsby';
import React, { createContext, useEffect, useState } from 'react';

import { PDFViewer } from '../components/PDFViewer';
import MyResume from '../components/Resume';
import { Seo } from '../components/Seo';

import pdfFile from '../images/pdf-file.png';

import './resume.less';

export let ResumePhotoContext;

const Resume: React.FC<PageProps> = ({ data }) => {
  const [isClient, setIsClient] = useState(false);

  const resumePhoto = data.allFile.nodes[0].publicURL;

  // can't use static query in my Photo component for some reason -> context to the resque
  // a bit hacky, but works like a charm. No need to update context value dynamically
  ResumePhotoContext = createContext(resumePhoto);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      <Seo title="Resume" />
      <ResumePhotoContext.Provider value={resumePhoto}>
        <article className="blog-page">
          <header></header>

          <section className="container">
            <div className="resume-wrapper heroButtons">
              {isClient && (
                <>
                  <PDFDownloadLink
                    document={<MyResume size={[595.28]} />}
                    fileName="Denis Bunchenko CV.pdf"
                    className="button iconButton downloadLink"
                  >
                    {({ blob, url, loading, error }) =>
                      loading ? (
                        `loading...`
                      ) : (
                        <>
                          <span>Download </span>
                          <img src={pdfFile} alt="pdf" className="pdfImg" />
                        </>
                      )
                    }
                  </PDFDownloadLink>
                  <PDFViewer>
                    <MyResume size="A4" />
                  </PDFViewer>
                </>
              )}
            </div>
          </section>
        </article>
      </ResumePhotoContext.Provider>
    </>
  );
};

export default Resume;

export const pageQuery = graphql`
  query {
    allFile(filter: { name: { eq: "me" }, extension: { eq: "jpeg" } }) {
      nodes {
        publicURL
      }
    }
  }
`;
