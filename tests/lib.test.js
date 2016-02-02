import ava from 'ava';
import { cube } from '../src/math';

ava('Lib es6 test', (test) => {
	test.is(cube(5), 125, 'should equal 125');
});
