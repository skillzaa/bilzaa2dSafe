//import { terser } from "rollup-plugin-terser";
export default {
	input: 'src/bilzaa2d.js',
//	plugins: [terser()],
	output: {
	  file: 'testsrc/bilzaa2d.js',
	  format: 'cjs', //es
	}
  };