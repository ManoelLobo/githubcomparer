import { injectGlobal } from 'styled-components';

injectGlobal`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

body {
  background: #9b65e5;
  font-family: sans-serif;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
}
`;
