import React from "react";
import styled from "styled-components";
import mq from "./MediaQuery";

const FooterContainer = styled.footer`
  /* background-color: #4682b4; */
  padding: 20px;
  font-size: 20px;
  text-align: center;
  background: #ddd;
  font-weight: 700;

  ${mq.maxWidth("sm")`
                padding: 10px;
                font-sze: 14px;
            `}
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div>footer</div>
    </FooterContainer>
  );
};

export default Footer;
