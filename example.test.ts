import test from 'tape';
import { myFunction } from './myModule';

test('myFunction should return the correct result', (t) => {
  t.equal(myFunction(1), 'one');
  t.equal(myFunction(2), 'two');
  t.end();
});
