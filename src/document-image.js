import Heading from './components/heading';
import DocumentImage from './components/document-image/document-image';
import _ from 'lodash';
import './index.css';
const heading =  new Heading();
const docImg = new DocumentImage();

heading.render();
docImg.render();

console.log('this is lodash just for chunking', _);