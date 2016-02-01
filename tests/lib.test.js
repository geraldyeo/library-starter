import tape from 'tape';
import { cube } from '../src/math';

tape('Lib es6 test', (test) => {
	test.equal(cube(5), 125, 'should equal 125');
	test.end();
});
