import { createGlobalStyle } from 'styled-components'

import regularFont from './MuseoSans500.woff2'
import boldFont from './MuseoSans700.woff2'
import bolderFont from './MuseoSans900.woff2'

export default createGlobalStyle`
  @font-face {
    font-family: MuseoSans;
    src: local('MuseoSansW00-500'), local('MuseoSansW00-500'),
    url(${regularFont}) format('woff2');
    font-weight: 400;
  }

  @font-face {
    font-family: MuseoSans;
    src: local('MuseoSansW00-700'), local('MuseoSansW00-700'),
    url(${boldFont}) format('woff2');
    font-weight: 700;
  }

  @font-face {
    font-family: MuseoSans;
    src: local('MuseoSans-900'), local('MuseoSans-900'),
    url(${bolderFont}) format('woff2');
    font-weight: 900;
  }
`
