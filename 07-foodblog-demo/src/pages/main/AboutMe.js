// 07-foodblog-demo - AboutMe.js

import React, { memo } from "react";
import styled from "styled-components";

import dataset from "../../dataset";

const AboutMeContainer = styled.div`
  /* background-color: #00ff0055; */
  text-align: center;

  h2 {
    font-size: 32px;
    margin-bottom: 32px;
    font-weight: 400;
  }

  img {
    max-width: 100%;
    height: auto;
    margin-bottom: 26px;
  }

  h3 {
    font-size: 26px;
    margin-bottom: 16px;
    font-weight: 400;
  }

  h4 {
    font-size: 18px;
    margin-bottom: 16px;
    font-weight: 400;
  }

  p {
    font-size: 16px;
    font-weight: 300;
    line-height: 150%;
    margin-bottom: 30px;
    padding: 0 25px;
  }
`;

const AboutMe = memo(() => {
  // 필요한 정보만 분리
  const { aboutMe } = dataset;

  console.group("AboutMe.js");
  console.log(aboutMe);
  console.groupEnd();

  return (
    <AboutMeContainer>
      <h2>{aboutMe.title}</h2>
      <img src={aboutMe.img} />
      <h3>{aboutMe.msg1}</h3>
      <h4>{aboutMe.msg2}</h4>
      <p>{aboutMe.msg3}</p>
    </AboutMeContainer>
  );
});

export default AboutMe;
