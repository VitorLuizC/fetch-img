import test from 'ava';
import image from './';
import env from 'browser-env';

env();

test('Module exports a function', (context) => {
  context.is(typeof image, 'function');
});

test('Function returns a Promise', (context) => {
  context.true(image('?') instanceof Promise);
});
