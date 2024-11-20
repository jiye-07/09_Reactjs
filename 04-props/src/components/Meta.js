import React from "react";
// SEO 처리 기능 패키지
import { Helmet, HelmetProvider } from "react-helmet-async";
// 미리보기 이미지 샘플
// import sample from "./assets/img/sample.jpg";

const Meta = ({
  title = "React Example",
  description = "React.js 예제입니다",
  author = "지예",
  subject = "React.js",
  copyright = "jiye",
  keywords = "React, React.js, props, children, proptypes, react-router-dom",
  url = window.location.href,
  // image = sample,
  icon = "null",
  shortcutIcon = "null",
  appleTouchIcon = "null",
}) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        {/* SEO 태그 */}
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <meta name="subject" content={subject} />
        <meta name="copyright" content={copyright} />
        <meta name="content-language" content="ko" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        {/* <meta property="og:image" content={image} /> */}
        <link rel="icon" href={icon} type="image/png" />
        <link rel="shortcut icon" href={shortcutIcon} type="image/png" />
        <link rel="apple-touch-icon" href={appleTouchIcon} type="image/png" />
        {/* 구글 웹폰트 적용 */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link>
      </Helmet>
    </HelmetProvider>
  );
};

export default Meta;
