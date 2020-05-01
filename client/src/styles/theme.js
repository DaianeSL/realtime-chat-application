import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    dark: '#0F0526',
    darkPurple: '#140840',
    purple: '#6C1ED9',
    cian: '#A52BD9',
    pink: '#BF1FB5',
    black: '#000000',
    white: '#FFFFFF',
    gray: '#CCCCCC',
  },
  fonts: ['Montserrat'].join(','),
  fontSizes: {
    smaller: '10px',
    small: '12px',
    normal: '16px',
    large: '20px',
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
