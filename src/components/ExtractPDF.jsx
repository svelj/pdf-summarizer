import React, { useState, useEffect } from 'react';
import * as pdfjs from 'pdfjs-dist/build/pdf';

import '../styles.css'; 
import APIRequest from './APIRequest';



function ExtractPDF() {
  const [text, setText] = useState('');

  async function extractText(event) {
    const file = event.target.files[0];

    if (!file) {
      console.log("No file selected");
      return;
    }

    const reader = new FileReader();
    reader.readAsArrayBuffer(file);

    reader.onload = async () => {
      try {
        const pdf = await pdfjs.getDocument({ data: reader.result }).promise;
        let extractedText = '';

        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const textContent = await page.getTextContent();
          extractedText += textContent.items.map(item => item.str).join(' ') + '\n';
        }

        console.log("Extracted Text:", extractedText);
        setText(extractedText);
      } catch (error) {
        console.error(" PDF extraction error:", error);
      }
    };

    reader.onerror = () => {
      console.error("Failed to read file");
    };
  }

  return (
    <div className="container">
      <h3>Upload a PDF to Extract Text</h3>
      <input type="file" accept="application/pdf" onChange={extractText} />
     <APIRequest text={text} />
    </div>
  );
}

export default ExtractPDF;
