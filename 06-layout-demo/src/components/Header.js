import React, { memo } from "react";

import styled from "styled-components";
import mq from "./MediaQuery";

const HeaderContainer = styled.header`
  /* background-color: #4169e1; */

  .jumbotron {
    padding: 80px;
    text-align: center;
    background: #1abc9c;
    color: white;

    h1 {
      font-size: 46px;
      font-weight: 700;
      margin-bottom: 15px;
    }

    p {
      font-size: 20px;
    }

    ${mq.maxWidth("sm")`
        padding: 40px;

        h1 {
            font-size: 32px;
            margin-bottom: 7px;
        }

        P {
            font-size: 12px;
        }
    `}
  }
`;

const Header = memo(() => {
  return (
    <HeaderContainer>
      <div className="jumbotron">
        <h1>My Wedsite</h1>
        <p>React.js Layout Template</p>
      </div>
    </HeaderContainer>
  );
});

export default Header;
