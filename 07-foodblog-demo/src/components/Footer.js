import React, { memo } from "react";
import styled from "styled-components";

// 미디어쿼리 기능 참조
import mq from "../components/MediaQuery";

// 데이터 파일 가져오기
import dataset from "../dataset";

const FooterContainer = styled.div`
  /* background-color: #0066ff55; */
  border-top: 1px solid #dddddd; /* 상단 테두리선 */

  .container {
    /* 컨텐츠 영역의 가로 폭 제한 및 정렬 */
    max-width: 1200px;
    margin: auto;
    display: flex;

    /* 모바일 VI에서는 세로 배치 */
    ${mq.maxWidth("md")` 
      flex-direction: column;
  `}

    .footer-item {
      /* footer의 각 영역 비율 설정 */
      flex: 1;
      padding: 15px;

      /* 각 영역별 제목 */
      h3 {
        font-size: 24px;
        font-weight: 700px;
        margin: 22px 0;
        text-transform: uppercase;

        ${mq.maxWidth("md")` 
        font-size: 20px;
        font-weight: 500px;
        margin: 12px 0;
    `}
      }

      &:nth-child(1) {
        p {
          font-size: 15px;
          line-height: 150%;
          font-weight: 300;
        }
      }

      &:nth-child(2) {
        a {
          display: flex;
          margin: 20px 0;
          padding: 0 10px;

          img {
            width: 65px;
            height: 65px;
            object-fit: cover;
            margin-right: 10px;
          }

          .blog-post-title {
            font-weight: bold;
            margin-bottom: 5px;
            font-size: 15px;
          }

          .blog-post-content {
            line-height: 1.2;
          }
        }
      }

      &:nth-child(3) {
        /* 세 번째 영역 스타일 */
        .tags {
          li {
            display: inline-block;
            background-color: #616161;
            color: #ffffff;
            padding: 5px 10px;
            margin-bottom: 8px;
            margin-right: 5px;
            font-size: 13px;

            &.black {
              background-color: #000000;
            }
          }
        }
      }
    }
  }
`;

const Footer = memo(() => {
  // 데이터 셋으로 부터 필요한 부분만 분리함
  const { footer, blogPosts, tags } = dataset;

  console.group("Footer 컴포넌트");
  console.group("footer");
  console.log(footer);
  console.groupEnd();
  console.group("blogPosts");
  console.log(blogPosts);
  console.groupEnd();
  console.group("tags");
  console.log(tags);
  console.groupEnd();
  console.groupEnd();

  return (
    <FooterContainer>
      <div className="container">
        <div className="footer-item">
          <h3>FOOTER</h3>
          <p>{footer}</p>
        </div>
        <div className="footer-item">
          <h3>BLOG POSTS</h3>
          <ul className="blog-posts">
            {blogPosts.map((v, i) => {
              return (
                <li key={i}>
                  <a href="#">
                    <img src={v.img} />
                    <div className="text-box">
                      <h4 className="blog-post-title">{v.title}</h4>
                      <p className="blog-post-content">{v.content}</p>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer-item">
          <h3>POPULAR TAGS</h3>
          <ul className="tags">
            {tags.map((v, i) => {
              if (i == 0) {
                return (
                  <li key={i} className="black">
                    {v}
                  </li>
                );
              } else {
                return <li key={i}>{v}</li>;
              }
            })}
          </ul>
        </div>
      </div>
    </FooterContainer>
  );
});

export default Footer;