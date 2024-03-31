import React from 'react';
import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: ${'#41687a'};
    --accent-color: ${'#99cae1'};
    --background-color: ${'rgba(245, 245, 245, 0.5)'};
    --text-color: ${'rgba(0, 0, 0, 0.7)'};
  }
`;

const StyledGlobalStyles = () => {

  return <GlobalStyles />;
};

export default StyledGlobalStyles;
