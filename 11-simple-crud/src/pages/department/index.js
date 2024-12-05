import React, { memo, useState, useEffect, useCallback } from "react";

import styled from "styled-components";

import Table from "../../components/Table";
import Spinner from "../../components/Spinner";

import axiosHelper from "../../helpers/AxiosHelper";
import utilHelper from "../../helpers/UtilHelper";
import regexHelper from "../../helpers/RegexHelper";

// useNavigate --> 페이지 이동을 위한 hook
// useLocation --> 현재 페이지의 URL 정보를 제공하는 hook: QueryString 취득용도
import { useNavigate, useLocation } from "react-router-dom";

const DepartmentContainer = styled.div`
  .form-container {
    padding: 10px 0;
    margin: 0;

    input,
    button {
      margin-right: 15px;
      font-size: 16px;
      padding: 5px 10px;
    }
  }
`;

const Department = memo(() => {
  // 화면에 표시할 상태값(ajax 연동 결과로 받아올 json) -> 초기값을 빈 배열로 정의
  // Ajax 처리는 비동기이므로 데이터를 받아오는 처리의 완료 여부와 상관없이 화면 출력이 먼저 수행된다.
  // 그러므로 Ajax의 결과를 상태값에 저장하여 데이터를 받아온 후 화면이 자동 갱신되도록 처리해야 한다.
  const [department, setDepartment] = useState([]);

  // 현재 ajax가 데이터를 로딩중인지를 의미하는 상태값
  const [loading, setLoading] = useState(false);

  // 수정할 항목에 대한 id값을 저장하기 위한 상태값
  const [updateId, setUpdateId] = useState(-1);

  // 페이지 강제 이동을 위한 객체 생성
  const navigate = useNavigate();

  /** 검색 기능 type(1) */
  //   검색어를 저장하기 위한 상태변수
  //   const [keyword, setKeyword] = useState("");

  /** 검색 기능 type(2) */
  // QueryString에 포함된 keyword 값을 취득
  const { search } = useLocation();
  const { keyword } = utilHelper.getQuery(search);

  /** 페이지가 처음 열렸을 때 실행할 hook */
  // hook에 전달되는 콜백함수에 직접적으로 async를 적용할 수 없다.
  useEffect(() => {
    // Ajax 처리를 위한 비동기 구조
    (async () => {
      // Ajax 로딩 시작을 알림 --> 함수형 업데이트
      setLoading(true);

      //   Ajax의 결과를 저장할 변수 준비
      let data = null;

      // json-server에 정렬조건 설정하기
      // --> ?_sort=컬럼명&_order=asc|desc
      const args = { _sort: "id", _order: "desc" };

      //   검색어가 존재하는 경우
      if (keyword) {
        args["dname_like"] = keyword;
      }
      try {
        // React Router에 정의되지 않고, public 폴더에도 맵핑되는 경로가 없을 경우
        // package.json에 설정된 proxy 결로를 기준으로 Ajax 요청을 보낸다.
        // 즉 --> http://localhost:8080/department
        data = await axiosHelper.get("/department", args);
        console.log(data);
      } catch (e) {
        alert(e.message);
        return;
      } finally {
        // Ajax 로딩 종료를 알림
        setLoading(false);
      }

      //   Ajax의 요청 결과를 상태값에 반영한다.
      setDepartment(data.item);
    })();
  }, [keyword]);

  /** 검색폼에서의 전송{submit} 이벤트 */
  const onSearchSubmit = useCallback((e) => {
    e.preventDefault();

    // 이벤트가 발생한 폼 자신
    const form = e.currentTarget;

    // 폼안의 input태그 name속성으로 접근하여 입력값 취득
    const keyword = form.keyword.value;
    console.log(`검색어: ${keyword}`);

    // setKeyword(keyword);

    // 검색어를 QueryString으로 지정하여 페이지를 이동하는 효과를 준다.
    // 실제로는 페이지 이동이 아니라 URL 변조만 이루어진다.
    // 하지만 웹 브라우저는 주소가 변경되었으므로 페이지 이동으로 인식한다.
    // --> 페이지 이동으로 인식되면 리액트는 화면상의 모든 컴포넌트를 다시 랜더링한다.
    // --> 즉, URL이 변조되면 화면에 표시되는 컴포넌트가 처음부터 재실행된다는 뜻
    navigate(`/department?keyword=${keyword}`);
  }, []);

  // 데이터 추가 submit 이벤트
  const onDataAddSubmit = useCallback(
    (e) => {
      e.preventDefault();

      //이벤트가 발생한 폼 자신
      const form = e.currentTarget;

      //입력값에 대한 유효성 검사
      try {
        regexHelper.value("#dname", "학과명을 입력하세요");
        regexHelper.maxLength("#dname", 20, "학과명은 20자 이내로 입력하세요");
        regexHelper.value("#loc", "위치를 입력하세요");
        regexHelper.maxLength("#loc", 20, "위치는 20자 이내로 입력하세요");
      } catch (e) {
        alert(e.message);
        e.element.focus();
        return;
      }

      // 폼안의 input태그에 name속성으로 접근하여 입력값 취득
      const dname = form.dname.value;
      const loc = form.loc.value;

      //ajax를 통한 데이터 저장 요청 -->post 전송
      (async () => {
        //ajax의 결과를 저장할 변수 준비
        let data = null;

        try {
          data = await axiosHelper.post("/department", {
            dname: dname,
            loc: loc,
          });

          console.group("데이터 저장 결과");
          console.log(data);
          console.groupEnd();
        } catch (e) {
          console.error(e);
          alert(e.message);
          return;
        } finally {
          //ajax 로딩 종료를 알림 --> 함수형 업데이트
          setLoading((loading) => false);
        }

        // 저장이 완료된 후에는 상태값을 갱신한다 --> 화면이 자동으로 갱신된다
        // 1) Ajax로 백엔드에게 전체 목록을 다시 요청한다 ==> 비효율적(네트워크 트래픽 낭비)
        // 2) 현재 출력되고 있는 상태변수(배열)에 백엔드로 부터 받은 신규데이터만 추가한다
        // 주의: useEffect 안에서 기존의 상태값을 읽어오기 위해서는 종속성 배열에 해당 상태변수를 나열해야 한다
        const newData = [data.item, ...department];
        setDepartment(newData);
      })();
    },
    [department]
  );

  // 데이터 삭제 버튼 클릭 이벤트
  const onDataDeleteClick = useCallback(
    (e) => {
      e.preventDefault();

      //이벤트가 발생한 버튼 자신
      const button = e.currentTarget;
      //
      //
      //
      const id = parseInt(button.dataset.id);
      const dname = button.dataset.dname;
      console.log(`삭제 대상: ${id}, ${dname}`);

      if (!confirm(`정말 ${dname}(을)를 삭제하시겠습니까?`)) {
        return;
      }

      // 삭제 요청을 위한 Ajax 처리
      (async () => {
        // 로딩 시작을 알림
        setLoading(true);

        try {
          await axiosHelper.delete(`/department/${id}`);
        } catch (e) {
          console.error(e);
          alert(e.message);
          return;
        } finally {
          //ajax 로딩 종료를 알림
          setLoading(false);
        }
        // 백엔드에서 삭제되더라도 프론트가 갖고 있는 상태값은 복사본이므로
        // 삭제 요청된 항목과 일치하는 데이터를 직접 찾아서 제거 해야한다
        const newData = department.filter((v, i) => v.id !== id);
        setDepartment(newData);
      })();
    },
    [department]
  );

  // 데이터 수정 버튼 click 이벤트
  const onDataEditClick = useCallback((e) => setUpdateId(parseInt(e.currentTarget.dataset.id)), []);

  // 데이터 수정 버튼 click 이벤트
  const onDataEditSubmit = useCallback(
    (e) => {
      e.preventDefault();

      //이벤트가 발생한 폼 자신
      const current = e.currentTarget;

      //입력값에 대한 유효성 검사
      try {
        regexHelper.value('#edit-form input[name="dname"]', "학과명을 입력하세요");
        regexHelper.maxLength('#edit-form input[name="dname"]', 20, "학과명은 20자 이내로 입력하세요");
        regexHelper.value('#edit-form input[name="loc"]', "위치를 입력하세요");
        regexHelper.maxLength('#edit-form input[name="loc"]', 20, "위치는 20자 이내로 입력하세요");
      } catch (e) {
        alert(e.message);
        e.element.focus();
        return;
      }

      // <form>요소 내의 <input> 요소들을 name 속성값으로 접근하여 입력값을 얻음
      const id = parseInt(current.id.value);
      const dname = current.dname.value;
      const loc = current.loc.value;
      console.log(`수정할 데이터: ${id}, ${dname}, ${loc}`);

      // 백엔드에 데이터 수정 요청을 보낸다
      (async () => {
        // Ajax 로딩 시작을 알림
        setLoading(true);

        //수정 결과를 저장할 변수 준비
        let data = null;

        try {
          data = await axiosHelper.put(`/department/${id}`, {
            dname: dname,
            loc: loc,
          });

          console.group("데이터 수정 결과");
          console.log(data);
          console.groupEnd();
        } catch (e) {
          console.error(e);
          alert(e.message);
          return;
        } finally {
          //ajax 로딩 종료를 알림 --> 함수형 업데이트
          setLoading(false);
        }

        // 현재출력중인 상태변수를 사용해야하므로 종속변수 배열에 department를 추가한다
        const editId = department.findIndex((v, i) => v.id === id);
        console.log("수정된 항목의 인덱스: " + editId);
        const newData = [...department];
        newData.splice(editId, 1, data.item);
        console.log(newData);
        setDepartment(newData);

        // 상태변수로 되돌린다
        setUpdateId(-1);
      })();
    },
    [department]
  );

  return (
    <DepartmentContainer>
      <h2>Department</h2>

      <Spinner loading={loading} />
      {/* 입력폼 */}
      <form className="form-container" onSubmit={onDataAddSubmit}>
        <input type="text" name="dname" id="dname" placeholder="학과명을 입력하세요"></input>
        <input type="text" name="loc" id="loc" placeholder="위치를 입력하세요"></input>
        <button type="submit">저장하기</button>
      </form>

      {/* 검색폼 */}
      <form className="form-container" onSubmit={onSearchSubmit}>
        <input type="text" name="keyword" defaultValue={keyword}></input>
        <button type="submit">검색</button>
      </form>

      {/* 수정처리를 위해서 목록 전체를 폼으로 감싼다 */}
      <form onSubmit={onDataEditSubmit} id="edit-form">
        <Table>
          <thead>
            <tr>
              <th>학과번호</th>
              <th>학과이름</th>
              <th>위치</th>
              <th>-</th>
              <th>-</th>
            </tr>
          </thead>
          <tbody>
            {department.map((v, i) => {
              if (updateId === v.id) {
                return (
                  <tr key={`edit-${v.id}`}>
                    <td>
                      <input type="hidden" name="id" defaultValue={v.id} />
                      {v.id}
                    </td>
                    <td>
                      <input type="text" name="dname" defaultValue={v.dname} />
                    </td>
                    <td>
                      <input type="text" name="loc" defaultValue={v.loc} />
                    </td>
                    <td colSpan="2">
                      <button type="submit">수정</button>
                    </td>
                  </tr>
                );
              } else {
                return (
                  <tr key={v.id}>
                    <td>{v.id}</td>
                    {keyword ? (
                      <td dangerouslySetInnerHTML={{ __html: v.dname.replaceAll(keyword, `<mark>${keyword}</mark>`) }}></td>
                    ) : (
                      <td>{v.dname}</td>
                    )}
                    <td>{v.loc}</td>
                    <td>
                      <button type="button" data-id={v.id} onClick={onDataEditClick}>
                        수정
                      </button>
                    </td>
                    <td>
                      <button type="button" data-id={v.id} data-dname={v.dname} onClick={onDataDeleteClick}>
                        삭제
                      </button>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </Table>
      </form>
    </DepartmentContainer>
  );
});

export default Department;
