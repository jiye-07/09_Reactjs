import React, { forwardRef } from "react";

import styled from "styled-components";

const MyBoxContainer = styled.div`
  border: 3px solid #0066ff;
  text-align: center;
  width: 300px;
`;

//
//
//

const MyBox = forwardRef(({ a, b }, ref) => {
  return (
    <MyBoxContainer>
      <h2 ref={ref}>MyBox</h2>
      <p>
        a={a}, b={b}
      </p>
    </MyBoxContainer>
  );
});

export default MyBox;
