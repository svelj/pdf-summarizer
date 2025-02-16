import { GlobalWorkerOptions } from 'pdfjs-dist/build/pdf';
import pdfWorker from 'pdfjs-dist/build/pdf.worker?url';

// Set the worker URL
GlobalWorkerOptions.workerSrc = pdfWorker;