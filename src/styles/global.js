import { injectGlobal } from 'styled-components';

injectGlobal`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #9b65e5;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
}
`;
