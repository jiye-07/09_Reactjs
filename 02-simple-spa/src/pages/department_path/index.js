import React from 'react';

import { useParams } from "react-router-dom";

const DepartmentPath = () => {
    
    // 요청 데이터 확인 하기
    const params = useParams();
    console.group("useParams()의 리턴값 확인");
    console.debug(params);
    console.groupEnd();

    // 필요한 변수값과 타입 확인
    console.debug('요청된 학과번호 값=%s (%s)', params.id, typeof params.id);
    console.debug('요청된 학과번호 값=%s (%s)', params.msg, typeof params.msg);
    console.groupEnd();

    //
    const departmentList = {
        item: [
            { id: 201, dname: '전자공학과', loc: '3호관' },
            { id: 202, dname: '기계공학과', loc: '4호관' }
        ]
    };

    const departmentItem = departmentList.item.find((v , i) => v.id === parseInt(params.id));

    // 조회 결과가 없는 경우
    if (!departmentItem) {
        return (<h3>존재하지 않는 데이터에 대한 요청입니다.</h3>)
    }
    
    return (
        <div>
            <h2>오전</h2>
            <p>{departmentItem.dname}</p>

            <h2>오후</h2>
            <p>{departmentItem.dname}</p> 
        </div>
  );
};

export default DepartmentPath;
