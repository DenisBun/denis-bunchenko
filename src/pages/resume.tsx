import { PDFDownloadLink } from '@react-pdf/renderer';
import { PageProps } from 'gatsby';
import React, { useEffect, useState } from 'react';

import { PDFViewer } from '../components/PDFViewer';
import { ResumePDF } from '../components/ResumePDF';
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
                  document={<ResumePDF />}
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
                  <ResumePDF />
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
