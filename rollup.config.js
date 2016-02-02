import babel from 'rollup-plugin-babel';

export default {
	dest: 'lib/index.js',
	entry: 'src/index.js',
	format: 'cjs',
	sourceMap: process.env.BABEL_ENV === 'production' ? true : 'inline',
	plugins: [babel()]
};
