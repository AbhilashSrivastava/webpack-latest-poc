import Img from './img.jpg';
import './document-image.css';

class DocumentImage {
  render() {
    const img = document.createElement('img');
    img.src = Img;
    img.alt = 'document'
    img.classList.add('document-image');
    const body = document.querySelector('body');
    body.appendChild(img);
  }
}
export default DocumentImage;
