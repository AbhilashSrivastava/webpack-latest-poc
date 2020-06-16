import './heading.css';

class Heading {
  render() {
    const h1 = document.createElement('h1');
    const body = document.querySelector('body');
    h1.classList.add('heading');
    h1.innerHTML = 'This is simple heading';
    body.appendChild(h1);
  }
}

export default Heading;