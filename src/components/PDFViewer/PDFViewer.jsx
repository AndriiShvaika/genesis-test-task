import { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PDFViewer = ({ PDF }) => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <Document file={PDF} onLoadSuccess={onDocumentLoadSuccess}>
      {Array.apply(null, Array(numPages))
        .map((_, i) => i + 1)
        .map((page, index) => {
          return (
            <Page
              key={index}
              pageNumber={page}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          );
        })}
    </Document>
  );
};

export default PDFViewer;
