import HelloWorldButton from './components/hello-world-button';
import Heading from './components/heading';
import _ from 'lodash';
import './index.css';

const helloBtn = new HelloWorldButton();
helloBtn.render();

const heading = new Heading();
heading.render();

if (process.env.NODE_ENV === 'production') {
  console.log('production mode');
} else {
  console.log('development mode');
}

console.log('this is lodash just for chunking', _);
