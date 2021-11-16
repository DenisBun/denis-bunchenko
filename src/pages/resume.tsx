import { PDFDownloadLink } from '@react-pdf/renderer';
import { graphql, PageProps } from 'gatsby';
import React, { useEffect, useState } from 'react';

import { PDFViewer } from '../components/PDFViewer';
import MyResume from '../components/Resume';
import { Seo } from '../components/Seo';

import pdfFile from '../images/pdf-file.png';

import './resume.less';

const Resume: React.FC<PageProps> = () => {
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
    </>
  );
};

export default Resume;
