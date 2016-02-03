import ava from 'ava';
import { square, cube } from '../src/math';

ava('test square', (test) => {
	test.is(square(5), 25, 'should equal 25');
});

ava('test cube', (test) => {
	test.is(cube(5), 125, 'should equal 125');
});
