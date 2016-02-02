import babel from 'rollup-plugin-babel';

export default {
	dest: 'lib/index.js',
	entry: 'src/index.js',
	format: 'cjs',
	plugins: [babel()]
};
