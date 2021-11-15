import { PDFDownloadLink } from '@react-pdf/renderer';
import { graphql, PageProps } from 'gatsby';
import React, { useEffect, useState } from 'react';

import { PDFViewer } from '../components/PDFViewer';
import MyResume from '../components/Resume';
import { Seo } from '../components/Seo';

import pdfFile from '../images/pdf-file.png';

import './resume.less';

const Resume: React.FC<PageProps> = ({ data }) => {
  const resumeImageSrc = data.allFile.nodes[0].publicURL;

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      <Seo title="Resume" />

      <article className="blog-page">
        <header></header>

        <section className="container">
          <div className="resume-wrapper heroButtons">
            {isClient && (
              <>
                <PDFDownloadLink
                  document={<MyResume imageSrc={resumeImageSrc} />}
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
                  <MyResume imageSrc={resumeImageSrc} />
                </PDFViewer>
              </>
            )}
          </div>
        </section>
      </article>
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
