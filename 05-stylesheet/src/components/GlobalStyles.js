import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    /* 이 안에서는 CSS 순정 코드를 작성 */

    * {
        font-family: 'Malgun Gothic', 'NaumGothic';
    }

    body {
        padding: 10px 20px;
        margin: 0;
    }
`;

export default GlobalStyles;
