//import { terser } from "rollup-plugin-terser";
import uglifyjs from 'uglifyjs';
export default {
	input: 'src/bilzaa2d.js',
	plugins: [uglifyjs()],
	output: {
	  file: 'dist/bilza2d.js',
	  format: 'es',
	}
  };