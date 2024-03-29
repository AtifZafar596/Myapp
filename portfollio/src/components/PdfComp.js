import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import pdf from '../components/h.pdf'
export default function PdfComp() {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className=' h-[200px] w-[300px]'>
       <p>
        Page {pageNumber} of {numPages}
      </p>
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.apply(null,Array(numPages))
        .map((x,i)=>i+1)
        .map((page)=>{
          return (
            <Page pageNumber={page} 
            renderTextLayer={false}
            renderAnnotationLayer={false}
            />
          )
        })
        }
       
      </Document>
     
    </div>
  );
}